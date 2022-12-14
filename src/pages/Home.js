import React from 'react';
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Newsletter/>
            <Categories/>
        </div>
    );
};

export default Home;