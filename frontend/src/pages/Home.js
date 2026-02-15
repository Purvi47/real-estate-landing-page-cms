import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectOverview from '../components/ProjectOverview';
import Amenities from '../components/Amenities';
import Connectivity from '../components/Connectivity';
import FloorPlans from '../components/FloorPlans'; 
import VideoSection from '../components/VideoSection';
import AboutDeveloper from '../components/AboutDeveloper';
import ConstructionUpdates from '../components/ConstructionUpdates'; 
import FAQ from '../components/FAQ';

const Home = () => {
    const [contents, setContents] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/api/content')
            .then(res => {
                const data = {};
                res.data.forEach(item => {
                    data[item.section] = item;
                });
                setContents(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ backgroundColor: "#fff" }}>
            <Navbar />

            {/* 1. Main Entry Section */}
            <Hero
                title={contents.Hero?.title || ""}
                description={contents.Hero?.description || ""}
            />

            {/* 2. About the Project with White Curve Transition */}
            <ProjectOverview
                title={contents["Project Overview"]?.title}
                description={contents["Project Overview"]?.description}
            />

            {/* 3. Grid of Icons for Amenities */}
            <Amenities
                title={contents.Amenities?.title}
                amenities={contents.Amenities?.description?.split(",") || []}
            />

            {/* 4. Township Building Slider (Mint Green Background Starts Here) */}
            <Connectivity
                title={contents.Connectivity?.title || ""}
                description={contents.Connectivity?.description || ""}
            />

            {/* 5. Floor Plans - Positioned on Mint Background directly above Video 
                Matches the layout in image_58c572.jpg */}
            <FloorPlans />

            {/* 6. Video Section - The City Skyline Bridge 
                Stitches the Floor Plans to the Developer section */}
            <VideoSection />

            {/* 7. Developer Information and Statistics */}
            <AboutDeveloper 
                title={contents["About Developer"]?.title || "About Developer"}
                description={contents["About Developer"]?.description || ""}
            />

            {/* 8. Construction Status (Under Construction / Completed) */}
            <ConstructionUpdates 
                title={contents["Construction Updates"]?.title || "Construction Updates"} 
            />

            {/* 9. Support and Common Questions */}
            <FAQ
                title={contents.FAQ?.title || ""}
                faqList={contents.FAQ?.faq || []}
            />
        </div>
    );
};

export default Home;