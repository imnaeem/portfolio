'use client';

import Image from 'next/image';
import { useState } from 'react';

type ProjectGalleryProps = {
	images: { url: string; key: string }[];
	title: string;
};

/** Main image + clickable thumbnail strip. */
export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
	const [active, setActive] = useState(0);

	if (images.length === 0) return null;

	return (
		<div>
			<div className='card overflow-hidden'>
				<div className='relative aspect-[16/9] bg-stone-100'>
					<Image
						key={images[active].key}
						src={images[active].url}
						alt={`${title} — screenshot ${active + 1}`}
						fill
						sizes='(max-width: 1024px) 100vw, 1024px'
						className='object-cover'
						priority
					/>
				</div>
			</div>

			{images.length > 1 ? (
				<div
					className='mt-3 grid grid-cols-4 gap-2.5 sm:grid-cols-6'
					role='group'
					aria-label='Project screenshots'>
					{images.map((image, i) => (
						<button
							key={image.key}
							type='button'
							onClick={() => setActive(i)}
							aria-label={`Show screenshot ${i + 1}`}
							aria-pressed={i === active}
							className={`relative aspect-video cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-200 ${
								i === active
									? 'border-accent shadow-sm'
									: 'border-transparent opacity-70 hover:opacity-100'
							}`}>
							<Image
								src={image.url}
								alt=''
								fill
								sizes='160px'
								className='object-cover'
								loading='lazy'
							/>
						</button>
					))}
				</div>
			) : null}
		</div>
	);
}
