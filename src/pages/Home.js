import React from 'react';

import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import Categories from '../components/Categories';
import Booking from '../components/Booking';
import ImgCarousel from '../components/ImgCarousel';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <Categories />
      <Booking />
      <ImgCarousel title='Featured Products' />
      <Footer />
    </>
  );
}

export default Home;
