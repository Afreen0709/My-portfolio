import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>AFREEN TAJ</b>.
I demonstrate a comprehensive mastery of front-end technologies, including Bootstrap, HTML, CSS, JavaScript, React, and Figma. My proficiency in Bootstrap allows me to create responsive, mobile-first web pages that are both aesthetically pleasing and highly functional. With a strong command of HTML and CSS, I can structure and style web content with precision and creativity, ensuring a seamless visual experience. My expertise in JavaScript enables me to add dynamic elements and interactivity, enhancing user engagement.


          </p>
          <p className={classes.br}>
          Leveraging React, I build scalable, efficient single-page applications with a modular, component-based architecture. Additionally, my skills in Figma allow me to design intuitive and user-centric interfaces, ensuring a smooth transition from concept to implementation. This diverse skill set equips me to deliver innovative and cohesive web solutions that exceed client expectations and drive success.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
