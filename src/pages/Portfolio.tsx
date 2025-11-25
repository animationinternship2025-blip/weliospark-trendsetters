import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const team = [
    { id: 1, name: "Aarav Sharma", role: "Digital Marketing Strategist", specialty: "Paid Ads & Analytics", bio: "Expert in data-driven ad campaigns and performance optimization." },
    { id: 2, name: "Priya Patel", role: "Creative Director", specialty: "Motion Graphics & Design", bio: "Specialized in creating stunning visuals and animated content." },
    { id: 3, name: "Rohan Verma", role: "Social Media Manager", specialty: "Instagram & Content", bio: "Crafting engaging social content that builds communities." },
    { id: 4, name: "Ananya Singh", role: "Brand Strategist", specialty: "Growth & Development", bio: "Strategic thinker focused on sustainable brand growth." },
    { id: 5, name: "Arjun Mehta", role: "Content Creator", specialty: "Video & Photography", bio: "Creating compelling video content and photography." },
    { id: 6, name: "Isha Gupta", role: "SEO Specialist", specialty: "Search & Optimization", bio: "Driving organic growth through technical SEO excellence." },
    { id: 7, name: "Karan Reddy", role: "Copywriter", specialty: "Content & Messaging", bio: "Writing persuasive copy that converts and engages." },
    { id: 8, name: "Neha Kapoor", role: "Analytics Expert", specialty: "Data & Insights", bio: "Turning data into actionable marketing insights." },
    { id: 9, name: "Vikram Joshi", role: "Email Marketing Specialist", specialty: "Email Campaigns", bio: "Building effective email campaigns that drive results." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A talented team of marketing professionals dedicated to delivering exceptional results 
              and bringing your brand vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-medium">
                      {member.specialty}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Brand?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our team can help your business achieve its marketing goals.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
