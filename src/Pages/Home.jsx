import React from 'react';
import PromoSection from '../Components/PromoSection';
import StatisTics from '../Components/StatisTics';
import OurStory from '../Components/OurStory';
import Value from '../Components/Value';
import Services from '../Components/Services';
import Approach from '../Components/Approach';
import Growth from '../Components/Growth';
import Opinion from '../Components/Opinion';
import ContactUs from '../Components/ContactUs';

const Home = () => {
    return (
        <div>
            <PromoSection/>
            <StatisTics/>
            <OurStory/>
            <Value/>
            <Services/>
            <Approach/>
            <Growth></Growth>
            <Opinion/>
            <ContactUs/>
        </div>
    );
};

export default Home;