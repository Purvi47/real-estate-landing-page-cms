import React, { useState } from "react";

const FloorPlans = () => {
  const [activeWing, setActiveWing] = useState("East Wing");
  const [activeBhk, setActiveBhk] = useState("1 bhk");

  const wings = ["All", "East Wing", "West Wing", "North Wing", "South Wing"];
  const bhks = ["1 bhk", "2 bhk", "5,6 bhk"];

  return (
    <section id="floor-plans" style={{ background: "#c2f0e3", padding: "60px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* WING NAVIGATION - Right Aligned */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "25px", marginBottom: "40px" }}>
          {wings.map((wing) => (
            <span
              key={wing}
              onClick={() => setActiveWing(wing)}
              style={{
                cursor: "pointer",
                fontSize: "13px",
                color: activeWing === wing ? "#2f4f4f" : "#8ebfb3",
                fontWeight: activeWing === wing ? "600" : "400",
                borderBottom: activeWing === wing ? "2px solid #2f4f4f" : "none",
                paddingBottom: "5px",
                transition: "0.3s"
              }}
            >
              {wing}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "60px", flexWrap: "wrap" }}>
          
          {/* LEFT: MAIN FLOOR PLAN IMAGE */}
          <div style={{ 
            background: "white", 
            padding: "15px", 
            borderRadius: "25px", 
            boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
            flex: "0 1 500px" 
          }}>
            <img 
              src="/images/floorplan-1bhk.png" // Ensure this exists in public/images/
              alt="Floor Plan" 
              style={{ width: "100%", height: "auto", borderRadius: "15px", display: "block" }} 
              onError={(e) => { e.target.src = "https://via.placeholder.com/450x450?text=Floor+Plan+Image"; }}
            />
          </div>

          {/* RIGHT: SELECTION & DETAILS */}
          <div style={{ flex: "0 1 380px" }}>
            <div style={{ 
              background: "white", 
              padding: "40px 30px", 
              borderRadius: "30px", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)", 
              textAlign: "center" 
            }}>
              
              {/* BHK SELECTORS */}
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "25px" }}>
                {bhks.map((bhk) => (
                  <button
                    key={bhk}
                    onClick={() => setActiveBhk(bhk)}
                    style={{
                      padding: "10px 18px",
                      borderRadius: "8px",
                      border: "none",
                      background: activeBhk === bhk ? "#4db6ac" : "#b2dfdb",
                      color: "white",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "600"
                    }}
                  >
                    {bhk}
                  </button>
                ))}
              </div>

              <h3 style={{ color: "#2f4f4f", margin: "0 0 8px 0", fontSize: "20px" }}>Type - {activeBhk.toUpperCase()}</h3>
              <p style={{ color: "#555", margin: "0 0 8px 0", fontSize: "15px" }}>Area - 380-411 RCA Sq. ft</p>
              <p style={{ fontWeight: "700", color: "#2f4f4f", fontSize: "16px" }}>Price - Click for price</p>
              
              <button style={{ 
                marginTop: "25px", 
                padding: "14px 30px", 
                background: "linear-gradient(90deg, #7bc67b, #b2ff59)", 
                border: "none", 
                borderRadius: "10px", 
                color: "#244b45", 
                fontWeight: "700", 
                cursor: "pointer",
                width: "100%"
              }}>
                Download Floor Plan
              </button>
            </div>

            {/* THUMBNAILS - Perfectly Spaced */}
            <div style={{ display: "flex", gap: "15px", marginTop: "25px", justifyContent: "space-between" }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ 
                  background: "white", 
                  padding: "8px", 
                  borderRadius: "12px", 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.03)",
                  flex: "1"
                }}>
                  <img 
                    src="/images/floorplan-thumb.png" 
                    alt="thumb" 
                    style={{ width: "100%", borderRadius: "8px" }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=Thumb"; }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FloorPlans;