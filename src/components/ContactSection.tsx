import { useState } from "react";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "barshaacharya7@gmail.comasdasdasdsad", href: "mailto:barshaacharya7@gmail.com" },
    { icon: Phone, label: "Phone", value: "+977 9840353895", href: "tel:+9779840353895" },
    { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", href: null },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 blob blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 blob blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    required
                    placeholder="Enter Your name"
                    className="rounded-xl h-12 border-2 focus:border-primary"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="email@example.com"
                    className="rounded-xl h-12 border-2 focus:border-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <Textarea
                    required
                    placeholder="Tell me about your project..."
                    className="rounded-xl min-h-32 border-2 focus:border-primary resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-xl h-12 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all hover:scale-[1.02] cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Behance Link */}
              <a
                href="https://www.behance.net/barshaacharya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.02] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1769FF] flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">Bē</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">View my work</p>
                  <p className="font-semibold">Behance Portfolio</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              {/* Fun message */}
              <div className="p-6 bg-gradient-to-br from-sunshine/20 to-coral/10 rounded-3xl text-center">
                <p className="text-4xl mb-3">🚀</p>
                <p className="font-semibold text-lg">Ready to create something amazing?</p>
                <p className="text-muted-foreground">Let's turn your ideas into reality!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
