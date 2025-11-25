import { TrendingUp, Users, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Strategic Expertise",
      description: "We leverage industry best practices and proven methodologies to deliver exceptional marketing results.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Growth",
      description: "Our campaigns are optimized using advanced analytics and performance metrics to maximize ROI.",
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "We develop innovative marketing strategies that differentiate your brand and capture attention.",
    },
    {
      icon: Target,
      title: "Measurable Results",
      description: "Every campaign is tracked, analyzed, and optimized for tangible business outcomes and growth.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Trust <span className="text-primary">WelioSpark</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              WelioSpark delivers comprehensive digital marketing solutions with a focus on measurable ROI, 
              strategic planning, and data-driven optimization for businesses of all sizes.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
