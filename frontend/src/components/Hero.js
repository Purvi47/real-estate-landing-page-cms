import React from "react";

const Hero = ({ data }) => {
  // Use data from admin panel or default to your reference design
  const content = data || {
    brandName: "VIGHNAHARTA",
    projectName: "INFINITY",
    unit1Title: "SMART 1 BHK",
    unit1OldPrice: "74.99 Lacs",
    unit1NewPrice: "69.99 Lacs*",
    unit2Title: "PREMIUM 2 BHK",
    unit2OldPrice: "1.05 CR",
    unit2NewPrice: "96.99 Lacs*",
    location: "BLDG. NO. 223/224, CIRCLE - KANNAMWAR NAGAR 1, VIKHROLI (EAST)"
  };

  return (
    <section id="home" style={{ display: "flex", minHeight: "90vh", marginTop: "80px", background: "#fff", fontFamily: "'Montserrat', sans-serif", flexWrap: "wrap" }}>
      
      {/* LEFT: Building Image (Static as per instructions) */}
      <div style={{ flex: "1 1 500px", minHeight: "400px" }}>
        <img src="/images/hero-building.jpg" alt="Building" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* RIGHT: Editable Content */}
      <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 5%", textAlign: "center" }}>
        
        <div style={{ marginBottom: "30px" }}>
          <p style={{ fontSize: "14px", letterSpacing: "6px", color: "#2F4F4F", margin: 0, fontWeight: "400" }}>{content.brandName}</p>
          <h2 style={{ fontSize: "52px", letterSpacing: "4px", color: "#2F4F4F", margin: "-10px 0 0 0", fontWeight: "900" }}>{content.projectName}</h2>
        </div>

        <div style={{ width: "85%", height: "1px", background: "#E0E0E0", position: "relative", marginBottom: "40px" }}>
           <span style={{ position: "absolute", top: "-7px", left: "50%", transform: "translateX(-50%)", background: "white", padding: "0 15px", color: "#D1D1D1" }}>◈</span>
        </div>

        <div style={{ display: "flex", width: "100%", justifyContent: "center", marginBottom: "40px" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#2F4F4F" }}>{content.unit1Title}</h3>
            <p style={{ fontSize: "15px", color: "#666" }}>@ <span style={{ textDecoration: "line-through", color: "#FF4D4D" }}>₹ {content.unit1OldPrice}</span></p>
            <p style={{ fontSize: "42px", fontWeight: "900", color: "#2F4F4F" }}>₹ {content.unit1NewPrice}</p>
            <p style={{ fontSize: "13px", color: "#888", letterSpacing: "3px" }}>onwards</p>
          </div>
          <div style={{ width: "1px", height: "120px", background: "#E0E0E0" }}></div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#2F4F4F" }}>{content.unit2Title}</h3>
            <p style={{ fontSize: "15px", color: "#666" }}>@ <span style={{ textDecoration: "line-through", color: "#FF4D4D" }}>₹ {content.unit2OldPrice}</span></p>
            <p style={{ fontSize: "42px", fontWeight: "900", color: "#2F4F4F" }}>₹ {content.unit2NewPrice}</p>
            <p style={{ fontSize: "13px", color: "#888", letterSpacing: "3px" }}>onwards</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ fontSize: "28px" }}>📍</span>
          <p style={{ fontSize: "13px", fontWeight: "700", color: "#333", textAlign: "left" }}>{content.location}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;