import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';

const HomePage =()=>{
  return(
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Footer />
      </div>


    </div>
  )
}

export default HomePage;
