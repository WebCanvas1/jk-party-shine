import img1 from "@/assets/gallery/gallery-1.jpeg";
import img2 from "@/assets/gallery/gallery-2.jpeg";
import img3 from "@/assets/gallery/gallery-3.jpeg";
import img4 from "@/assets/gallery/gallery-4.jpeg";
import img5 from "@/assets/gallery/gallery-5.jpeg";
import img6 from "@/assets/gallery/gallery-6.jpeg";
import img7 from "@/assets/gallery/gallery-7.jpeg";
import img8 from "@/assets/gallery/gallery-8.jpeg";
import img9 from "@/assets/gallery/gallery-9.jpeg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      
      {/* Heading */}
      <div className="text-center mb-10 px-4">
  <h2 className="text-4xl md:text-5xl font-bold text-purple-700">
    Our Work Gallery
  </h2>

  <p className="mt-3 font-bold text-yellow-500">
    Some of our recent party setups and decorations
  </p>
</div>

      {/* FULL WIDTH GRID */}
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-[250px] md:h-[300px] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
