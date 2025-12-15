import { MapPin, GraduationCap, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Based in",
      value: "Kathmandu, Nepal",
      color: "bg-coral/20 text-coral",
    },
    {
      icon: GraduationCap,
      title: "Education",
      value: "BCA Graduate",
      color: "bg-lavender/20 text-lavender",
    },
    {
      icon: Award,
      title: "Certified",
      value: "UI/UX & Graphic Design",
      color: "bg-mint/40 text-teal-dark",
    },
    {
      icon: Heart,
      title: "Passion",
      value: "User-Centered Design",
      color: "bg-sunshine/30 text-foreground",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blob blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Illustration area */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-light to-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-6xl">✨</span>
                    </div>
                    <p className="text-2xl font-display font-bold text-foreground">Barsha Acharya</p>
                    <p className="text-muted-foreground">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral rounded-2xl rotate-12 float flex items-center justify-center text-3xl shadow-lg">
                🎨
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-lavender rounded-full float flex items-center justify-center text-2xl shadow-lg" style={{ animationDelay: "1.5s" }}>
                💡
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="animate-slide-in-right">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designing with <span className="text-gradient">passion</span> & purpose
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a creative UI/UX Designer from Kathmandu, Nepal, with a background in 
              Computer Applications (BCA). My journey into design started with a curiosity 
              for creating beautiful, functional digital experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Certified in both Graphic Design and UI/UX Design from Broadway Infosys Nepal, 
              I combine technical skills with artistic vision to craft interfaces that not only 
              look amazing but feel intuitive to use.
            </p>
            
            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:scale-105 cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
