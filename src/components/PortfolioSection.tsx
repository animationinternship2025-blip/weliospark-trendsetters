import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, title: "Fashion Brand Campaign", category: "Ads", description: "Instagram & Facebook ad campaign" },
    { id: 2, title: "Product Launch Reel", category: "Motion Graphics", description: "Animated product showcase" },
    { id: 3, title: "Social Media Content", category: "Instagram", description: "Monthly content creation" },
    { id: 4, title: "Tech Startup Growth", category: "Brand Growth", description: "360° brand strategy" },
    { id: 5, title: "Food Delivery App", category: "Ads", description: "Google & Meta ads campaign" },
    { id: 6, title: "Brand Story Animation", category: "Motion Graphics", description: "60s brand video" },
  ];

  const categories = ["All", "Ads", "Motion Graphics", "Instagram", "Brand Growth"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our recent work and see how we've helped brands grow their digital presence.
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

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/portfolio">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
