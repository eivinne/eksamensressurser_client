import React, { useState, useEffect } from 'react';
import { HomeSection, HomeHeader, HomeContent } from '../styles/StyledComponents';

const Home = () => {
  

  return (
    <>
      <HomeHeader>Velkommen til FK Rørleggerservice AS</HomeHeader>
      <HomeSection>
        <section className="gridBox1" onClick={ (e) => window.location="/Offices"}>Kontorer</section>
        <section className="gridBox2" onClick={ (e) => window.location="/Contact"}>Kontakt</section>
        <section className="gridBox3" onClick={ (e) => window.location="/Articles"}>Se våre fagartikler om oppussing av bad</section>
      </HomeSection>

    </>
  );
};

export default Home;