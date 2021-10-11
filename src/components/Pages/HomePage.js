import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import IntroBox from '../IntroBox/IntroBox';
import Waves from '../waves/Waves';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HomePage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GeekBot</title>
          <link rel="canonical" href="https://geekbot.matrixio.tech" />
        </Helmet>
          <Navbar />
          <IntroBox />
          <About />
          <Waves />
          <Footer />
      </HelmetProvider>
    </div>
  )
}

export default HomePage;
