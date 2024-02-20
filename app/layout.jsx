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
        <div>{children}</div>
    </body>
    </html>
  )
};

export default MainLayout;