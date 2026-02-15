import "./Amenities.css";

export default function Amenities() {
  const amenities = [
    { img: "/images/swimming.png", title: "Swimmnig-Pool" },
    { img: "/images/Clubhouse.png", title: "Clubhouse" },
    { img: "/images/Sports-Cort.png", title: "Sports-Cort" },
    { img: "/images/Co-working Space.png", title: "Co-working Space" },
    { img: "/images/Pet Park.png", title: "Pet Park" },
    { img: "/images/BBQ Deck.png", title: "BBQ Deck" },
  ];

  return (
    <section className="amenities-section">
      <section id="amenities" className="amenities-section"></section>

      <div className="amenities-container">

        {/* TITLE */}
        <h2>Amenities</h2>
        <p className="subtitle">
          Thoughtfully crafted surroundings that reflect tradition,
          comfort, and a human-centered design approach.
        </p>

        <div className="amenities-content">

          {/* LEFT IMAGE */}
          <div className="amenities-image">
            <img src="/images/amenities-building.png" alt="Amenities" />
          </div>

          {/* RIGHT ICON GRID */}
          <div className="amenities-grid">
            {amenities.map((item, index) => (
              <div className="amenity-card" key={index}>
                <div className="icon-circle">
                  <img src={item.img} alt={item.title} />
                </div>
                <p>{item.title}</p>
              </div>
            ))}

            <button className="view-btn">View more</button>
          </div>

        </div>

      </div>

    </section>
  );
}
