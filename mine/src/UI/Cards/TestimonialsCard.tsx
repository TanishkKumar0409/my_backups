import { LuStar } from "react-icons/lu";

export default function TestimonialsCard({
  testimonial,
}: {
  testimonial: any;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 mx-4 shadow-sm">
      <div className="flex justify-center mb-8">
        {[...Array(testimonial.rating)].map((_, idx) => (
          <LuStar
            key={idx}
            className="text-yellow-400 fill-current w-5 h-5 mx-0.5"
          />
        ))}
      </div>

      <blockquote className="text-xl md:text-2xl text-gray-700 text-center font-medium leading-relaxed mb-8">
        "{testimonial.content}"
      </blockquote>

      <div className="flex flex-col items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-gray-100"
        />
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-900 mb-1">
            {testimonial.name}
          </div>
          <div className="text-gray-600 font-medium">
            {testimonial.position}
          </div>
        </div>
      </div>
    </div>
  );
}
