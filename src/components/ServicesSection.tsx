import { Target, Video, Instagram, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Digital Ads",
      description: "We run Facebook, Instagram & Google Ads campaigns that convert and drive real business results.",
      features: ["Campaign Strategy", "A/B Testing", "Performance Analytics", "Budget Optimization"],
    },
    {
      icon: Video,
      title: "Motion Graphics",
      description: "Animated videos & reels that capture attention and tell your brand story effectively.",
      features: ["Video Production", "Animated Reels", "Ad Creatives", "Social Media Content"],
    },
    {
      icon: Instagram,
      title: "Instagram Posts",
      description: "Creative posts & stories that stop the scroll and engage your target audience authentically.",
      features: ["Content Creation", "Story Design", "Feed Planning", "Carousel Posts"],
    },
    {
      icon: TrendingUp,
      title: "Brand Growth",
      description: "Increase organic reach & engagement for your brand with proven growth strategies.",
      features: ["Growth Strategy", "Audience Building", "Community Management", "Analytics"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to spark growth and drive real results for your brand.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-background border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
