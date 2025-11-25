import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const team = [
    { id: 1, name: "Aarav Sharma", role: "Digital Marketing Strategist", specialty: "Paid Ads & Analytics" },
    { id: 2, name: "Priya Patel", role: "Creative Director", specialty: "Motion Graphics & Design" },
    { id: 3, name: "Rohan Verma", role: "Social Media Manager", specialty: "Instagram & Content" },
    { id: 4, name: "Ananya Singh", role: "Brand Strategist", specialty: "Growth & Development" },
    { id: 5, name: "Arjun Mehta", role: "Content Creator", specialty: "Video & Photography" },
    { id: 6, name: "Isha Gupta", role: "SEO Specialist", specialty: "Search & Optimization" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our talented team of marketing professionals ready to bring your brand to life with innovative strategies and creative excellence.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {team.map((member) => (
              <div
                key={member.id}
                className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                    <div className="text-5xl font-bold text-primary/30 group-hover:text-primary/40 transition-colors">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-sm text-primary font-semibold mb-2">
                    {member.role}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105">
                Work With Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
