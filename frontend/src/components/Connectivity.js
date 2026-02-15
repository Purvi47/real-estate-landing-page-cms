import React, { useState } from "react";

const Connectivity = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the second card centered

  const buildingCards = [
    { img: "/images/bldg.png", name: "Maharta Aaradhya" },
    { img: "/images/bldg.png", name: "Newly Launched - Vignaharta Enclave" },
    { img: "/images/bldg.png", name: "Premium Suites - Phase II" },
    { img: "/images/bldg.png", name: "Vignaharta Heights" },
    { img: "/images/bldg.png", name: "Aaradhya Gardenia" },
  ];

  const cardWidth = 350; 
  const gap = 20; 

  const nextSlide = () => {
    if (currentIndex < buildingCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    /* REFINED SECTION: Reduced padding-top to remove the major gap */
    <section 
      id="connectivity"
      style={{ 
        padding: "20px 0 0px 0", // 20px top padding instead of 80px
        background: "#f0f7f6",    // Light mint background to blend sections
        textAlign: "center",
        width: "100%",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ width: "100%", margin: "auto", position: "relative" }}>
        
        <h2 style={{ 
          fontSize: "28px", 
          color: "#2f4f4f", 
          marginBottom: "40px", 
          fontWeight: "bold" 
        }}>
          Explore More Buildings in the Township
        </h2>

        <div style={{ 
          position: "relative", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          width: "100%" 
        }}>
          
          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "5%",
              zIndex: "10",
              background: "#4CAF50",
              border: "none",
              clipPath: "polygon(100% 0%, 0% 50%, 100% 100%)",
              cursor: currentIndex === 0 ? "default" : "pointer",
              width: "20px",
              height: "30px",
              opacity: currentIndex === 0 ? "0.3" : "1"
            }}
          ></button>

          {/* Wrapper for the "Window" */}
          <div style={{ width: "100%", overflow: "hidden", display: "flex", justifyContent: "center" }}>
            
            {/* The Actual Moving Track */}
            <div style={{ 
              display: "flex", 
              gap: `${gap}px`, 
              transition: "transform 0.5s ease-out",
              transform: `translateX(calc(50% - (${cardWidth}px / 2) - (${currentIndex} * (${cardWidth}px + ${gap}px))))`,
              width: "max-content",
              padding: "20px 0" // Room for shadow
            }}>
              {buildingCards.map((card, index) => {
                const isActive = index === currentIndex;

                return (
                  <div key={index} style={{ 
                    position: "relative",
                    width: `${cardWidth}px`, 
                    height: "450px", 
                    borderRadius: "20px", 
                    overflow: "hidden",
                    boxShadow: isActive ? "0 15px 30px rgba(0,0,0,0.2)" : "0 10px 20px rgba(0,0,0,0.1)",
                    opacity: isActive ? "1" : "0.5",
                    transform: isActive ? "scale(1)" : "scale(0.9)",
                    transition: "all 0.5s ease",
                    background: "#fff"
                  }}>
                    <img src={card.img} alt="Building" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    
                    <div style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      background: isActive 
                        ? "linear-gradient(to top, #b2ff59, #d4fc79)" 
                        : "rgba(255,255,255,0.9)",
                      padding: "15px 10px",
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#2f4f4f",
                      textAlign: "center"
                    }}>
                      {card.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "5%",
              zIndex: "10",
              background: "#4CAF50",
              border: "none",
              clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
              cursor: currentIndex === buildingCards.length - 1 ? "default" : "pointer",
              width: "20px",
              height: "30px",
              opacity: currentIndex === buildingCards.length - 1 ? "0.3" : "1"
            }}
          ></button>

        </div>
      </div>
    </section>
  );
};

export default Connectivity;