import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
      {
        icon: Users,
        title: "Client Partnership",
        description: "We build lasting partnerships with our clients, working collaboratively to understand goals and deliver strategic marketing solutions.",
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
      description: "We're committed to delivering exceptional, professional work that exceeds expectations and drives business growth.",
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
              Fresh perspectives. Authentic engagement.Real results.
              We understand trends because we lives and breathe social media
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
                WelioSpark was founded on the principle that successful digital marketing requires a perfect 
                blend of strategic thinking, creative execution, and data-driven optimization. We partner with 
                businesses of all sizes to develop comprehensive marketing strategies that drive real, measurable results.
              </p>
              <p>
                Our team brings together expertise across multiple disciplines—from paid advertising and SEO to 
                content creation and analytics. We believe in understanding your business goals first, then 
                crafting customized strategies that align with your objectives and deliver tangible ROI.
              </p>
              <p>
                Our approach combines proven marketing methodologies with innovative tactics and cutting-edge 
                tools. We stay ahead of industry trends, continuously test and optimize campaigns, and maintain 
                transparent communication to ensure your marketing investment delivers maximum value.
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
              To empower businesses with We are freshers in marketing - but we know
              the trends because we're the actual social media users.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8">
              <p className="text-lg text-foreground">
                "We combine strategic expertise with creative innovation to deliver marketing solutions 
                that drive real business results and long-term success."
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
