import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import React from 'react'
import '@/assets/styles/globals.css';
export const metadata = { 
    title: 'RealestEstate | Find the Perfect Rental',
    description: 'Find your Dream property',
    keywords: 'rental, find rentals'
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
    <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
    </body>
    </html>
  )
};

export default MainLayout;