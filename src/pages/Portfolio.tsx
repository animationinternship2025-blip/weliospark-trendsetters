import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    { 
      id: 1, 
      title: "Fashion Brand Campaign", 
      category: "Ads", 
      description: "Instagram & Facebook ad campaign",
      details: "Increased sales by 150% through targeted ads",
      metrics: "5M+ impressions, 12% CTR"
    },
    { 
      id: 2, 
      title: "Product Launch Reel", 
      category: "Motion Graphics", 
      description: "Animated product showcase",
      details: "Viral reel with 500K+ views in first week",
      metrics: "500K+ views, 25K shares"
    },
    { 
      id: 3, 
      title: "Social Media Content", 
      category: "Instagram", 
      description: "Monthly content creation",
      details: "Grew follower base by 200% in 3 months",
      metrics: "50K+ new followers, 8% engagement rate"
    },
    { 
      id: 4, 
      title: "Tech Startup Growth", 
      category: "Brand Growth", 
      description: "360° brand strategy",
      details: "Complete brand transformation and growth",
      metrics: "300% growth, 100K+ audience"
    },
    { 
      id: 5, 
      title: "Food Delivery App", 
      category: "Ads", 
      description: "Google & Meta ads campaign",
      details: "Reduced CPA by 40% while scaling volume",
      metrics: "10K+ conversions, ROI 4.5x"
    },
    { 
      id: 6, 
      title: "Brand Story Animation", 
      category: "Motion Graphics", 
      description: "60s brand video",
      details: "Award-winning brand story that went viral",
      metrics: "1M+ views, Featured on platforms"
    },
    { 
      id: 7, 
      title: "Lifestyle Brand Posts", 
      category: "Instagram", 
      description: "Aesthetic feed transformation",
      details: "Complete feed redesign with cohesive branding",
      metrics: "35K+ followers gained, 12% engagement"
    },
    { 
      id: 8, 
      title: "E-commerce Store Growth", 
      category: "Brand Growth", 
      description: "Full funnel optimization",
      details: "Scaled from 0 to 50K monthly revenue",
      metrics: "50K+ monthly revenue, 200+ orders/month"
    },
    { 
      id: 9, 
      title: "Real Estate Campaign", 
      category: "Ads", 
      description: "Lead generation ads",
      details: "Generated 500+ qualified leads in 30 days",
      metrics: "500+ leads, 20% conversion rate"
    },
  ];

  const categories = ["All", "Ads", "Motion Graphics", "Instagram", "Brand Growth"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Explore our recent work and see how we've helped brands grow their digital presence 
              and achieve remarkable results.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant={filter === category ? "default" : "outline"}
                  className={`transition-all duration-300 ${
                    filter === category 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/30 group-hover:text-primary/40 transition-colors">
                        {project.id}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <p className="text-sm text-foreground mb-2">
                      {project.details}
                    </p>
                    <div className="text-xs text-primary font-medium">
                      {project.metrics}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want Similar Results?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help your brand achieve remarkable growth.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
