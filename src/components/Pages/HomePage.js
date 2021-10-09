import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import IntroBox from '../IntroBox/IntroBox';
import Waves from '../waves/Waves';

const HomePage =()=>{
  return(
    <div>
      <Navbar />
      <IntroBox />
      <About />
      <Waves />
      <Footer />
    </div>
  )
}

export default HomePage;
