import React from "react";

const ConstructionUpdates = () => {
  const updates = [
    {
      status: "Under Construction",
      tower: "Tower A",
      image: "/images/Tower A.png", // Replace with your image path
    },
    {
      status: "Completed",
      tower: "Tower B",
      image: "/images/Tower B.png", // Replace with your image path
    },
    {
      status: "Completed",
      tower: "Tower C",
      image: "/images/Tower C.png", // Replace with your image path
    },
  ];

  return (
    <section
      id="construction-updates"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(to bottom, #bbf7d0 50%, #ffffff 50%)", // Matches the split background in image
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#2f4f4f",
          marginBottom: "50px",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
      >
        Construction Updates
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {updates.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "320px",
              height: "420px",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              backgroundColor: "#fff",
            }}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.tower}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Bottom Info Overlay (Frosted Glass Effect) */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                padding: "20px 0",
                background: "rgba(47, 79, 79, 0.6)", // Dark teal transparent
                backdropFilter: "blur(8px)", // Frosted glass effect
                color: "white",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "4px",
                }}
              >
                {item.status}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  opacity: "0.9",
                  marginBottom: "10px",
                }}
              >
                {item.tower}
              </div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  textDecoration: "underline",
                  fontSize: "12px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConstructionUpdates;