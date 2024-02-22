import Navbar from '@/components/Navbar'; 
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
    </body>
    </html>
  )
};

export default MainLayout;