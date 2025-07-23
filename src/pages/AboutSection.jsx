import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Passionate Web Developer</h3>
            <p className="text-mute-foreground">
              I'm a MERN Stack developer with a strong interest in building responsive, 
              user-friendly, and scalable web applications. I enjoy bringing ideas to 
              life in the browser and love the challenge of solving real-world problems 
              through code.
            </p>
            <p className="text-mute-foreground">
              With a solid foundation in React.js, Node.js, and MongoDB, I've worked on 
              projects ranging from eCommerce platforms to training management systems. 
              I’m also actively learning tools like Next.js and WebSocket to expand my 
              capabilities and create dynamic, real-time experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Rajan-Shrestha-CV.pdf" // replace with your actual file path
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-mute-foreground">
                    I specialize in building modern full-stack web applications using 
                    React, Express, and MongoDB. I focus on writing clean, maintainable 
                    code that follows best practices and ensures smooth user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-mute-foreground">
                    I pay close attention to the user interface and design experience. 
                    I craft intuitive and visually appealing interfaces using Tailwind CSS 
                    and component libraries like ShadCN to ensure the designs are both 
                    aesthetic and functional.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-mute-foreground">
                    From planning to deployment, I handle projects with a structured 
                    approach. I’ve led academic and freelance projects where I collaborated 
                    with teams, managed timelines, and delivered working applications 
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
