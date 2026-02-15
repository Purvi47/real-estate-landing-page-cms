exports.seedContent = async () => {
  const count = await Content.countDocuments();
  if (count === 0) {
    const initialData = [
      { 
        section: "hero", 
        title: "INFINITY", 
        description: "VIGHNAHARTA", 
        extraData: { 
          unit1Title: "SMART 1 BHK", 
          unit1OldPrice: "74.99 Lacs", 
          unit1NewPrice: "69.99 Lacs*", 
          unit2Title: "PREMIUM 2 BHK", 
          unit2OldPrice: "1.05 CR", 
          unit2NewPrice: "96.99 Lacs*", 
          location: "BLDG. NO. 223/224, CIRCLE - KANNAMWAR NAGAR 1, VIKHROLI (EAST)" 
        } 
      },
      { section: "overview", title: "Project Overview", description: "Modern lifestyle homes designed with comfort and connectivity in mind." },
      { section: "connectivity", title: "Nearby Connectivity", description: "5 Mins from Vikhroli Station, 2 Mins from Eastern Express Highway." },
      { section: "amenities", title: "World Class Amenities", description: "Thoughtfully crafted surroundings that reflect tradition and comfort." },
      { section: "about", title: "About UrbanNest", description: "Leading the way in sustainable and luxury urban living since 2010." },
      { section: "updates", title: "Construction Updates", description: "Phase 1: RCC Work Completed. Phase 2: Interior Finishing in progress." },
      { 
        section: "faq", 
        title: "Frequently Asked Questions", 
        faq: [
          { question: "What is the possession date?", answer: "The expected possession is by December 2026." },
          { question: "Is the project RERA registered?", answer: "Yes, the project is fully RERA compliant." }
        ] 
      }
    ];
    await Content.insertMany(initialData);
    console.log("Database Seeded 100%!");
  }
};