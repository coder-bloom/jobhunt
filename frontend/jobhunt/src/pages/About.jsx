import React from 'react';
import Frontpgab from '../components/Aboutcompo/Frontpgab';
import Slide2ab from '../components/Aboutcompo/Slide2ab';
import Slide3ab from '../components/Aboutcompo/Slide3ab';
import Slide4 from '../components/Aboutcompo/Slide4';
import Slide5 from '../components/Aboutcompo/Slide5';
import Slide6 from '../components/Aboutcompo/Slide6';
import Footer from '../components/Homecompo/Footer';
import Navbar from '../components/Homecompo/Navbar';

const About = (props) => {
  return (
    <div>
      <Navbar/>
      <Frontpgab/>
      <Slide2ab/>
      <Slide3ab/>
      <Slide4/>
      <Slide5/>
      <Slide6/>
      <Footer/>
    </div>
  );
};

export default About;