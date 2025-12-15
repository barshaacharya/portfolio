import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blob blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 blob blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-mint/30 blob blur-2xl" />
      
      {/* Floating shapes */}
      <div className="absolute top-32 right-20 w-16 h-16 bg-coral rounded-2xl rotate-12 float opacity-60" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-lavender rounded-full float opacity-70" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-sunshine rounded-lg rotate-45 float opacity-80" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Available for freelance work</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Hi, I'm{" "}
          <span className="text-gradient">Barsha</span>
          <span className="inline-block wiggle ml-4">👋</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          UI/UX Designer
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Crafting delightful digital experiences with creativity and purpose. 
          Turning ideas into beautiful, user-centered designs.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Work Together
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/10 transition-all hover:scale-105"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Know More About Me
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
