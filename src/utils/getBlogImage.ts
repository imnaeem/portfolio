// Utility to get blog images from external API with fallback to local SVGs

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || 'demo';

export async function getBlogImageUrl(category: string, keyword: string, fallbackSvg: string): Promise<string> {
	// Try to fetch from Unsplash API first
	try {
		const response = await fetch(
			`https://api.unsplash.com/photos/random?query=${encodeURIComponent(keyword)}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`,
			{ next: { revalidate: 86400 } } // Cache for 24 hours
		);

		if (response.ok) {
			const data = await response.json();
			if (data.urls && data.urls.regular) {
				return data.urls.regular;
			}
		}
	} catch (error) {
		console.warn(`Failed to fetch image from Unsplash for ${keyword}, using fallback SVG`, error);
	}

	// Fallback to local SVG
	return fallbackSvg;
}

// For client-side usage with default fallback
export function getBlogImageUrlSync(fallbackSvg: string): string {
	return fallbackSvg;
}

