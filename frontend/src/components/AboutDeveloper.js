import React from "react";

const AboutDeveloper = ({ title, description }) => {
  const stats = [
    { value: "6", label: "Projects" },
    { value: "1.32 LAC", label: "sq. ft. area developed" },
    { value: "449+", label: "Happy Families" },
    { value: "3.77 LAC", label: "sq. ft. ongoing" },
    { value: "2.7 LAC", label: "sq. ft. Area Upcoming" },
  ];

  return (
    <section id="developer" style={{ background: "#ffffff", fontFamily: "sans-serif", overflow: "hidden" }}>
      <div style={{ padding: "80px 20px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", color: "#2f4f4f", fontWeight: "bold", marginBottom: "20px" }}>
          {title || "About Developer"}
        </h2>
        <p style={{ maxWidth: "1000px", margin: "0 auto", color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
          {description || "Vignaharta Developers is more than just a real estate company—we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living."}
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 10, marginBottom: "-40px" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-around", 
          alignItems: "center",
          flexWrap: "wrap", 
          background: "#bbf7d0", 
          padding: "25px 15px", 
          borderRadius: "60px", 
          maxWidth: "1150px", 
          margin: "0 auto",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ 
              textAlign: "center", 
              flex: "1 1 150px",
              borderRight: i !== stats.length - 1 ? "1px solid #94d8a9" : "none" 
            }}>
              <div style={{ fontWeight: "bold", fontSize: "24px", color: "#2f4f4f" }}>{stat.value}</div>
              <div style={{ fontSize: "10px", color: "#2f4f4f", textTransform: "uppercase", marginTop: "5px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        width: "100%", 
        height: "550px", 
        position: "relative",
        background: "#f9f9f9"
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          clipPath: "polygon(0 12%, 50% 0, 100% 12%, 100% 100%, 0 100%)",
          overflow: "hidden"
        }}>
          <img 
            src="/images/developer-building.png" 
            alt="Developer Project" 
            style={{ 
              width: "100%", 
              height: "115%", 
              objectFit: "cover",
              objectPosition: "center 20%" 
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;