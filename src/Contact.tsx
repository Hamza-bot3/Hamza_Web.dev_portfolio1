import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    console.log("Form submitted:", formState);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash === "#contact") {
      scrollToSection("contact");
    }
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-800 via-blue-700 to-cyan-600"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
            Get In Touch
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-xl animate-fade-in-up animation-delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-cyan-100 mb-6">
                  I'm always excited to work on new projects and collaborate
                  with fellow developers. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </p>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-cyan-300 mr-2" />
                  <a
                    href="mailto:digitalhamzaparvez@gmail.com"
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    digitalhamzaparvez@gmail.com
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Hamza-bot3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-300 transition-colors duration-300 glow-effect"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hamza-parvez-8a761b225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-300 transition-colors duration-300 glow-effect"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/hamza_webdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-300 transition-colors duration-300 glow-effect"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
              <div>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-cyan-100 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-cyan-100 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-cyan-100 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-cyan-100">
                      Your message has been submitted successfully.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-20 border-t border-white border-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Hamza Parvez</h3>
              <p className="text-cyan-100 mt-1 max-w-2xl">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product.
              </p>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-cyan-100">
            <p>
              &copy; {new Date().getFullYear()} Hamza Parvez. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
