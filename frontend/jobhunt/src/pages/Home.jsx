import React from 'react';
import Homecom from '../components/Homecompo/Homecom';
import TopCompanies from '../components/Homecompo/Topcompanies';
import Hire from '../components/Homecompo/Hire';
import Footer from '../components/Homecompo/Footer';
import Navbar from '../components/Homecompo/Navbar';

const Home = (props) => {
  return (
    <div>
      <Navbar/>
      <Homecom/>
      <TopCompanies/>
      <Hire/>
      <Footer/>
    </div>
  );
};

export default Home;