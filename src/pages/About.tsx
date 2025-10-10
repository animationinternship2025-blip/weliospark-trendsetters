import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Authentic Connection",
      description: "We believe in creating genuine connections between brands and their audiences through relatable, trend-driven content.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every campaign is optimized for measurable results. We track, analyze, and continuously improve performance.",
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Fresh ideas and creative thinking are at the heart of everything we do. We stay ahead of trends and platform changes.",
    },
    {
      icon: Award,
      title: "Quality & Excellence",
      description: "Despite being freshers, we're committed to delivering professional, high-quality work that exceeds expectations.",
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
              About <span className="text-primary">WelioSpark</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're freshers in marketing, but we know the trends because we're the actual social media users. 
              Our youth isn't a weakness—it's our superpower.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                WelioSpark was born from a simple realization: the most powerful marketing insights come from 
                the people who actually use social media every day. As Gen Z digital natives, we don't just 
                study trends—we live them, create them, and share them.
              </p>
              <p>
                While we're freshers in the professional marketing world, we bring something more valuable than 
                years of traditional experience: authentic understanding of what makes content resonate with 
                today's audiences. We know what stops the scroll, what drives engagement, and what builds genuine 
                community.
              </p>
              <p>
                Our approach combines data-driven strategy with creative authenticity. We use professional tools 
                and proven techniques, but we infuse every campaign with the fresh perspective and innovative 
                thinking that only young, passionate marketers can provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To bridge the gap between brands and Gen Z audiences through authentic, trend-driven digital 
              marketing that drives real engagement and measurable results.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8">
              <p className="text-lg text-foreground">
                "We're not just marketing to Gen Z—we ARE Gen Z. That's our edge, our authenticity, 
                and our commitment to you."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
