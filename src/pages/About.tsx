import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      
      <main className="pt-32 px-8 pb-10">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Left side - Photo */}
      <div className="flex justify-center lg:justify-start">
        <div className="w-[400px] h-[600px] mt-8 overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300 shadow-md rounded-[300px]">
          {/* Placeholder - you'll replace this with your father's photo */}
          <img
            src="/about/DSC_6676 (2).JPG"
            alt="Narendra Sharma"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

            
            {/* Right side - Bio and contact */}
            <div className="space-y-3">
              <div>
                <h2 className="text-3xl text-muted-foreground font-semibold tracking-wide text-foreground mb-2">
                  Narendra Sharma
                </h2>
                
                <div className="space-y-1 text-muted-foreground font-light leading-relaxed [&>*:last-child]:mb-0">
                  <p>
                    <strong>Firm: </strong>Yash Interior Furniture<br></br>
                    Narendra Sharma is a passionate interior designer with over <strong>20 years of experience</strong> in creating beautiful, functional spaces that reflect his clients' unique personalities and lifestyles.
                  </p>

                  <p>
                    He offers end-to-end interior solutions, specializing in:
                  </p>

                  <ul className="list-disc pl-5 space-y-0.2 text-muted-foreground font-light">
                    <li>Custom woodwork and modular furniture</li>
                    <li>False ceilings and designer chandelier installations</li>
                    <li>Premium painting and texture wall finishes</li>
                    <li>Designer wallpapers, accent wall styling & wall cladding</li>
                    <li>Flooring solutions (tiles, marble, wooden, laminate)</li>
                    <li>Plumbing and sanitary work</li>
                    <li>Luxurious bathroom interiors with premium fittings</li>
                    <li>Complete electrical layout and ambient lighting setup</li>
                    <li>Living essentials like sofa sets, beds, dining tables, etc.</li>
                    <li>Home theatre design and integration</li>
                    <li>Modern office interiors that blend aesthetics with productivity</li>
                  </ul>
                  <p>and many more...</p>
                  <p style={{ marginBottom: 0 }}>
                    His work stands out for its attention to detail, space optimization, and a perfect blend of elegance and functionality across both residential and commercial projects.
                  </p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="pt-2 border-t border-border">
                <h3 className="text-xl text-muted-foreground font-light tracking-wide text-foreground mb-2">
                  Contact
                </h3>
                
                <div className="space-y-1 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold">Phone:</span>
                    <a 
                      href="tel:+91 7011646216, +91 9829471312" 
                      className="hover:text-foreground transition-colors duration-200"
                    >
                      +91 7011646216, +91 9829471312
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">Email:</span>
                    <a 
                      href="mailto:sonainteriorfurniture@gmail.com" 
                      className="hover:text-foreground transition-colors duration-200"
                    >
                      sonainteriorfurniture@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              </div>
    </div>
  </div>
      </main>
    </div>
  );
};

export default About;