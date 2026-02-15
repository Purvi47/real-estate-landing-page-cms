import React from "react";

const ProjectOverview = ({ title, description }) => {
  return (
    <section
    id="overview"
      style={{
        position: "relative",
        background: "#E3F0EC",
        /* REDUCED PADDING: from 120px to 60px to close the gap */
        padding: "60px 60px 0px 60px", 
        overflow: "hidden"
      }}
    >
      {/* REFINED CURVED TOP SHAPE */}
      <div
        style={{
          position: "absolute",
          /* MATCHED TOP: Adjusted to align with the new padding */ 
          left: 0,
          width: "100%",
          height: "180px",
          background: "white",
          borderBottomLeftRadius: "60% 100%",
          borderBottomRightRadius: "40% 100%",
          zIndex: 0
        }}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
          marginTop: "40px" // Adds a small internal space for the curve
        }}
      >
        {/* ================= LEFT IMAGE COLLAGE ================= */}
        <div
          style={{
            position: "relative",
            width: "520px",
            height: "420px"
          }}
        >
          {/* BIG CIRCLE */}
          <img
            src="/images/project-main.jpg"
            alt="main"
            style={{
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "absolute",
              left: "80px",
              top: "40px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
              zIndex: 2
            }}
          />

          {/* TOP LEFT SMALL */}
          <img
            src="/images/project-small1.png"
            alt="small1"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "absolute",
              left: "40px",
              top: "20px",
              border: "8px solid #E3F0EC",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              zIndex: 3
            }}
          />

          {/* BOTTOM RIGHT SMALL */}
          <img
            src="/images/project-small2.png"
            alt="small2"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "absolute",
              right: "70px",
              bottom: "30px",
              border: "8px solid #E3F0EC",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              zIndex: 3
            }}
          />
        </div>

        {/* ================= RIGHT TEXT ================= */}
        <div style={{ maxWidth: "520px" }}>
          <h2
            style={{
              fontSize: "2.4rem",
              marginBottom: "20px",
              color: "#244B45"
            }}
          >
            {title || "About Project"}
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#555",
              fontSize: "15px"
            }}
          >
            {description || "Your project description goes here. It should be engaging and informative for potential buyers."}
          </p>

          <button
            style={{
              marginTop: "25px",
              padding: "12px 28px",
              background: "#7BC67B",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)"
            }}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;