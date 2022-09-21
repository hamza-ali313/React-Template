import { Container, Row, Col, Carousel, Nav, Tab, Sonnet, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useState } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// SLICK
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

import ScrollToTop from './Views/ScrollToTop/Index';
import MySlider from './Views/MySlider';
import clock from "./images/clock.png"
import screen from "./images/screen.png"
import calender from "./images/calender.png"

// AOS.init({
//     offset: 200,
//     duration: 600,
//     easing: 'ease-in-sine',
//     delay: 200,
// });



class App extends React.Component {
   
    render() {
        
        
        return (
            
            <div>
                <MySlider first={clock} second={screen} third={calender} fourth={clock} fifth={screen}  sixth={calender}/>
            </div>
          
            
        );
    }
}



export default App;
