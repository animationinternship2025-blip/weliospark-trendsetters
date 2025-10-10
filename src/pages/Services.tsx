import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Video, Instagram, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Digital Ads",
      description: "We run Facebook, Instagram & Google Ads campaigns that convert and drive real business results.",
      features: [
        "Campaign Strategy & Planning",
        "A/B Testing & Optimization",
        "Performance Analytics",
        "Budget Optimization",
        "Audience Targeting",
        "Creative Development",
      ],
      benefits: "Drive qualified traffic, increase conversions, and maximize your ROI with data-driven ad campaigns.",
    },
    {
      icon: Video,
      title: "Motion Graphics",
      description: "Animated videos & reels that capture attention and tell your brand story effectively.",
      features: [
        "Video Production",
        "Animated Reels",
        "Ad Creatives",
        "Social Media Content",
        "Explainer Videos",
        "Brand Story Videos",
      ],
      benefits: "Stand out in crowded feeds with eye-catching animations that communicate your message instantly.",
    },
    {
      icon: Instagram,
      title: "Instagram Posts",
      description: "Creative posts & stories that stop the scroll and engage your target audience authentically.",
      features: [
        "Content Creation",
        "Story Design",
        "Feed Planning",
        "Carousel Posts",
        "Hashtag Strategy",
        "Caption Writing",
      ],
      benefits: "Build a visually stunning feed that attracts followers and drives engagement organically.",
    },
    {
      icon: TrendingUp,
      title: "Brand Growth",
      description: "Increase organic reach & engagement for your brand with proven growth strategies.",
      features: [
        "Growth Strategy",
        "Audience Building",
        "Community Management",
        "Analytics & Reporting",
        "Influencer Partnerships",
        "Content Calendar",
      ],
      benefits: "Grow your brand sustainably with strategies that build lasting relationships with your audience.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital marketing solutions designed to spark growth and drive real results for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Icon & Title */}
                <div className="flex-1">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={40} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="text-foreground">{service.benefits}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <div className="bg-card border border-border rounded-xl p-8">
                    <h3 className="text-xl font-semibold mb-6">What's Included:</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50">
                Work With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
