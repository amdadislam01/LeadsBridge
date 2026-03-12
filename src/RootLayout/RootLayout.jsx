import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen text-base-content '>
            <Navbar/>

            <main className='grow'>
                <div >
                    <Outlet/>
                </div>
            </main>
            
            <Footer/>
            
        </div>
    );
};

export default RootLayout;