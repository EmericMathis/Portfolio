"use client";

import { useState } from 'react';
import Image from 'next/image';

export function ImageGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-[800px]">
                {images.slice(0, 4).map((image, index) => (
                    <div
                        key={index}
                        className="relative h-[200px] cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Modal pour l'image agrandie */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-4xl h-[80vh]">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
} 