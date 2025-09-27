import { Link } from "react-router-dom";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1611893459332-a5a1c7b69e5c?q=80&w=600&auto=format&fit=crop", alt: "Diamond ring", link: "/shop/rings" },
  { src: "https://images.unsplash.com/photo-1589674781758-a3c03c35539b?q=80&w=600&auto=format&fit=crop", alt: "Gold necklace", link: "/shop/necklaces" },
  { src: "https://images.unsplash.com/photo-1627293585420-13ad3b23f37f?q=80&w=600&auto=format&fit=crop", alt: "Elegant earrings", link: "/shop/earrings" },
  { src: "https://images.unsplash.com/photo-1611591437281-462bf4a21456?q=80&w=600&auto=format&fit=crop", alt: "Collection of bracelets", link: "/shop/bracelets" },
  { src: "https://images.unsplash.com/photo-1591213238023-41a189b9f11e?q=80&w=600&auto=format&fit=crop", alt: "Luxury watch", link: "/shop" },
  { src: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce64?q=80&w=600&auto=format&fit=crop", alt: "Pendant", link: "/shop" },
];

export const ImageGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Gallery</h2>
          <p className="mt-4 text-lg text-gray-500">A glimpse into our world of fine jewelry.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg group">
              <Link to={image.link}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover aspect-square transform transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};