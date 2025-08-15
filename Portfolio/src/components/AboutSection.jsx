import { Briefcase, Code, Lightbulb, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              CS Student & Aspiring ML Engineer
            </h3>

            <p className="text-muted-foreground">
              As a Computer Science student at UCLA, my interests span software development, 
              user experience, and the future of AI. 
            </p>

            <p className="text-muted-foreground">
              I enjoy exploring how thoughtful tech can improve people’s lives, 
              whether through intuitive products or intelligent systems. I’m always 
              eager to grow my skills and collaborate on projects that bring 
              meaningful ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/JennieZhou_Resume.pdf"
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
                  <h4 className="font-semibold text-lg"> Software Development</h4>
                  <p className="text-muted-foreground">
                    I build responsive apps with React and JavaScript, turning ideas 
                    into sleek, reliable products.
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
                  <h4 className="font-semibold text-lg">User Experience & Design</h4>
                  <p className="text-muted-foreground">
                    I design intuitive interfaces that make technology feel 
                    natural and effortless.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects & Growth</h4>
                  <p className="text-muted-foreground">
                    Through hands-on projects, I’m expanding my skills and exploring 
                    the future of software, UX, and AI.
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