import { Link } from "react-router-dom";

const galleryImages = [
  { src: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg", alt: "Diamond ring", link: "/shop/rings" },
  { src: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg", alt: "Gold necklace", link: "/shop/necklaces" },
  { src: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg", alt: "Elegant earrings", link: "/shop/earrings" },
  { src: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg", alt: "Collection of bracelets", link: "/shop/bracelets" },
  { src: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg", alt: "Luxury watch", link: "/shop" },
  { src: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg", alt: "Pendant", link: "/shop" },
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