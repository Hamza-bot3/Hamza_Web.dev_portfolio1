import { FaWordpress, FaShopify, FaCode } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import React from "react";

// Define the SkillCardProps interface
interface SkillCardProps {
  icon: React.ReactNode; // or JSX.Element
  title: string;
  description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-white bg-opacity-5 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-opacity-10 hover:transform hover:scale-105">
      <div className="text-cyan-300 mb-4">{icon}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-cyan-100 text-sm">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-800 via-blue-700 to-cyan-600"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
            About Me
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-xl animate-fade-in-up animation-delay-200">
            <p className="text-white text-lg mb-6">
              With over 3 years of experience in the field, I specialize in
              creating dynamic and engaging web applications. My passion lies in
              crafting digital experiences that not only look great but also
              provide seamless functionality.
            </p>
            <p className="text-white text-lg mb-8">
              My expertise spans across various platforms and technologies,
              allowing me to offer comprehensive solutions tailored to each
              project's unique needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <SkillCard
                icon={<FaCode className="w-8 h-8" />}
                title="Web Development"
                description="Custom web applications using modern frameworks and technologies"
              />
              <SkillCard
                icon={<FaWordpress className="w-8 h-8" />}
                title="WordPress"
                description="Customizable websites and content management systems"
              />
              <SkillCard
                icon={<SiFramer className="w-8 h-8" />}
                title="Framer"
                description="Stunning, interactive designs and prototypes"
              />
              <SkillCard
                icon={<FaShopify className="w-8 h-8" />}
                title="Shopify"
                description="E-commerce solutions for businesses of all sizes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
