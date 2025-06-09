import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    text: "This service completely transformed our workflow. Highly recommend to anyone looking for reliability and excellence.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Mark Wilson",
    role: "Freelancer",
    text: "Fast, efficient, and the team really understands customer needs. Support is also top-notch!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophie Lee",
    role: "Product Manager",
    text: "The user interface is so intuitive and the performance is excellent. My productivity has skyrocketed.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Properties() {
  const slideRightToLeft = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  };

  const slideLeftToRight = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-full h-3/4 bg-white flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        What Our Customers Say
      </h2>

      <div className="relative w-full max-w-7xl h-[500px] overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-gray-50">
        {/* Top half: Right to Left */}
        <div className="absolute top-0 w-full h-1/2 overflow-hidden">
          <motion.div
            {...slideRightToLeft}
            className="flex items-center"
            style={{ width: `${testimonials.length * 22}rem` }}
          >
            {testimonials.map((t, i) => (
              <div key={`rtl-${i}`} className="w-80 mx-6">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom half: Left to Right */}
        <div className="absolute bottom-0 w-full h-1/2 overflow-hidden">
          <motion.div
            {...slideLeftToRight}
            className="flex items-center"
            style={{ width: `${testimonials.length * 22}rem` }}
          >
            {testimonials.map((t, i) => (
              <div key={`ltr-${i}`} className="w-80 mx-6">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col justify-between h-full">
      <p className="text-gray-700 italic mb-6">“{testimonial.text}”</p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
