import React from "react";

const GallerySection = () => {
    const images = [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800", 
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", 
        "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?w=800", 
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=800", 
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800", 
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800", 
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800", 
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", 
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800",
        "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?w=800",
    ];

    return (
        <section className="bg-[#f4f9fd] py-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">
                    Campus <span className="text-blue-500"> Life Gallery </span>
                </h2>
                <p className="text-gray-600 text-lg">
                    Celebrating our graduates and campus moments
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative border border-blue-200 group overflow-hidden rounded-xl shadow-md"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <p className="text-white text-lg font-medium">Campus View</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
