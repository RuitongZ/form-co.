import React from 'react';

import HomeBanner from '../components/HomeBanner';
import Categories from '../components/Categories';
import Booking from '../components/Booking';
import ImgCarousel from '../components/ImgCarousel';

function Home() {
  return (
    <>
      <HomeBanner />
      <Categories />
      <Booking />
      <ImgCarousel title='Featured Products' isFeatured={true} />
    </>
  );
}

export default Home;
