const About = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section with Image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-base-content/80 text-lg max-w-2xl mx-auto">
            Your 360° partner for business growth
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Intro Text */}
        <div className="text-center mb-16">
          <p className="text-base-content/80 text-lg leading-relaxed">
            At <span className="font-semibold text-primary">MH360</span>, we
            believe that business growth is driven by more than just marketing.
            It requires a strong brand, the right people, effective systems, and
            the ability to turn ideas into meaningful results. From digital
            marketing, branding, event management to HR consultancy, recruitment
            and talent acquisition, training and people development, we bring
            essential business solutions together under one roof.
          </p>
          <p className="text-base-content/80 text-lg leading-relaxed mt-4">
            Our approach is simple: we first understand your business, then
            design solutions around your specific goals and challenges. Whether
            you are launching a new business, strengthening an existing brand,
            building your team, or improving your HR processes, MH360 is here to
            support you at every stage of your growth journey.
          </p>
        </div>

        {/* 2 Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Mission */}
          <div
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            data-aos="zoom-in-left"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Our Mission"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center -mt-10 mb-2 border-4 border-base-200 shadow">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="card-title text-2xl">Our Mission</h2>
              <p className="text-base-content/80 leading-relaxed">
                To provide integrated Marketing and HR solutions that help
                businesses attract customers, develop people, strengthen
                organizations, and achieve sustainable growth through practical
                strategies, creative thinking, and meaningful partnerships.
              </p>
            </div>
          </div>

          {/* Card 2 - Vision */}
          <div
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            data-aos="zoom-in-right"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Our Vision"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center -mt-10 mb-2 border-4 border-base-200 shadow">
                <span className="text-2xl">💡</span>
              </div>
              <h2 className="card-title text-2xl">Our Vision</h2>
              <p className="text-base-content/80 leading-relaxed">
                To become a trusted 360-degree business growth partner,
                empowering organizations to build stronger brands, better teams,
                and sustainable business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
