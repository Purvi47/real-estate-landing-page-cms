import React from "react";

const VideoSection = () => {
  return (
    <section 
      style={{ 
        width: "100%", 
        height: "500px", // Adjust height based on your preference
        position: "relative",
        overflow: "hidden",
        cursor: "pointer"
      }}
      onClick={() => window.open('https://your-video-url.com', '_blank')}
    >
      {/* BACKGROUND SKYLINE IMAGE */}
      <img 
        src="/images/skyline-video-bg.png" // Replace with your skyline image path
        alt="City Skyline" 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover" 
        }} 
      />

      {/* OVERLAY & PLAY BUTTON */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.1)" // Subtle dark overlay to make button pop
      }}>
        {/* PLAY ICON CIRCLE */}
        <div style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "4px solid #fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.2)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          {/* PLAY TRIANGLE */}
          <div style={{
            width: 0,
            height: 0,
            borderTop: "20px solid transparent",
            borderBottom: "20px solid transparent",
            borderLeft: "30px solid white",
            marginLeft: "10px"
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;