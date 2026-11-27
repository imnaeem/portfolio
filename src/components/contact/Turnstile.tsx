'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

type TurnstileOptions = {
	sitekey: string;
	action?: string | undefined;
	theme?: 'auto' | 'light' | 'dark';
	callback?: (token: string) => void;
	'expired-callback'?: () => void;
	'error-callback'?: () => void;
};

type TurnstileApi = {
	render: (container: HTMLElement, options: TurnstileOptions) => string | undefined;
	reset: (widgetId: string) => void;
	remove: (widgetId: string) => void;
};

declare global {
	interface Window {
		turnstile?: TurnstileApi;
	}
}

let scriptPromise: Promise<void> | null = null;

const loadTurnstileScript = (): Promise<void> => {
	if (typeof window === 'undefined' || window.turnstile) {
		return Promise.resolve();
	}
	if (scriptPromise) {
		return scriptPromise;
	}

	scriptPromise = new Promise<void>((resolve, reject) => {
		const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
		const script = existing ?? document.createElement('script');

		const handleLoad = () => resolve();
		const handleError = () => {
			scriptPromise = null;
			reject(new Error('Failed to load Cloudflare Turnstile'));
		};

		script.addEventListener('load', handleLoad, { once: true });
		script.addEventListener('error', handleError, { once: true });

		if (!existing) {
			script.src = SCRIPT_SRC;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}
	});

	return scriptPromise;
};

export type TurnstileHandle = {
	reset: () => void;
};

type TurnstileProps = {
	siteKey?: string | undefined;
	action?: string | undefined;
	theme?: 'auto' | 'light' | 'dark';
	onToken: (token: string | null) => void;
};

export const Turnstile = forwardRef<TurnstileHandle, TurnstileProps>(function Turnstile(
	{ siteKey, action, theme = 'auto', onToken },
	ref
) {
	const containerRef = useRef<HTMLDivElement>(null);
	const widgetIdRef = useRef<string | null>(null);
	const onTokenRef = useRef(onToken);

	useEffect(() => {
		onTokenRef.current = onToken;
	}, [onToken]);

	useImperativeHandle(
		ref,
		() => ({
			reset: () => {
				onTokenRef.current(null);
				if (widgetIdRef.current && window.turnstile) {
					window.turnstile.reset(widgetIdRef.current);
				}
			},
		}),
		[]
	);

	useEffect(() => {
		let cancelled = false;

		if (!siteKey || !containerRef.current) {
			return;
		}

		loadTurnstileScript()
			.then(() => {
				if (cancelled || !window.turnstile || !containerRef.current) {
					return;
				}

				widgetIdRef.current =
					window.turnstile.render(containerRef.current, {
						sitekey: siteKey,
						action,
						theme,
						callback: (token) => onTokenRef.current(token),
						'expired-callback': () => onTokenRef.current(null),
						'error-callback': () => onTokenRef.current(null),
					}) ?? null;
			})
			.catch((error) => {
				console.error(error);
				onTokenRef.current(null);
			});

		return () => {
			cancelled = true;
			if (widgetIdRef.current && window.turnstile) {
				window.turnstile.remove(widgetIdRef.current);
				widgetIdRef.current = null;
			}
		};
	}, [siteKey, action, theme]);

	if (!siteKey) {
		return (
			<p style={{ color: '#DC2626', fontSize: 13 }}>
				Captcha is not configured. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY and redeploy.
			</p>
		);
	}

	return <div ref={containerRef} />;
});
