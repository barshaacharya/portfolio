import { Figma, Palette, Code, Layers, Users, MessageSquare, Lightbulb, Target } from "lucide-react";

const SkillsSection = () => {
  const tools = [
    { name: "Figma", icon: Figma, color: "bg-[#F24E1E]/10 text-[#F24E1E] border-[#F24E1E]/20" },
    { name: "Illustrator", icon: Palette, color: "bg-[#FF9A00]/10 text-[#FF9A00] border-[#FF9A00]/20" },
    { name: "Photoshop", icon: Layers, color: "bg-[#31A8FF]/10 text-[#31A8FF] border-[#31A8FF]/20" },
    { name: "InDesign", icon: Palette, color: "bg-[#FF3366]/10 text-[#FF3366] border-[#FF3366]/20" },
    { name: "HTML & CSS", icon: Code, color: "bg-primary/10 text-primary border-primary/20" },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageSquare, description: "Clear & effective collaboration" },
    { name: "Teamwork", icon: Users, description: "Building together, achieving more" },
    { name: "Problem Solving", icon: Lightbulb, description: "Creative solutions to challenges" },
    { name: "Goal-Oriented", icon: Target, description: "Focused on delivering results" },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-coral/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-lavender/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Skills & Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Creative <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and skills I use to bring ideas to life
          </p>
        </div>

        {/* Design Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Design Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 ${tool.color} backdrop-blur-sm hover:scale-110 transition-all cursor-default animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tool.icon className="w-6 h-6" />
                <span className="font-semibold">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-3xl border border-border hover:border-primary/30 hover:shadow-xl transition-all hover:-translate-y-2 cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun decorative shapes */}
        <div className="absolute -bottom-10 left-1/4 w-20 h-20 border-4 border-coral/30 rounded-2xl rotate-12" />
        <div className="absolute top-1/2 -right-10 w-16 h-16 border-4 border-lavender/30 rounded-full" />
      </div>
    </section>
  );
};

export default SkillsSection;
