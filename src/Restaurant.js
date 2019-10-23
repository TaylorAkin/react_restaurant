import React from 'react';
import './Restaurant.css';
import Navbar from './Navbar';
import ConditionalButton from './ConditionalButton';
import Footer from './Footer';
import { Parallax } from "react-parallax";
import { insideStyles } from './insideStyles';





/////////////////Paralax //////////////////////////

const styles = {
    fontFamily:  'Dancing Script',
    textAlign: "center",
    
  };
  
  const image1 =
    "/images/waterbar.jpg";
  const image2 =
    "/images/breakfast2.jpg";
  const image3 =
    "/images/lunch.jpg";
  const image4 =
    "/images/appetizers.jpg";
  const image5 =
    "/images/dinner.jpg";
  const image6 =
    "/images/dessert.jpg";
    
  
class ParallaxMenu extends React.Component {
   
    
    render(){
        return(
            <div style={styles}>

    <Parallax bgImage={image1}>
    <Navbar />

      <div style={{ height: 580 }}>
        <div style={insideStyles}>Stellas</div>
      </div>
    </Parallax>
    <h1 id = 'breakfast'>| | |</h1>
    <Parallax bgImage={image2} blur={{ min: -1, max: 5 }}>
      <div style={{ height: 500 }}>
        <ConditionalButton name= 'Breakfast'/>
      </div>
    </Parallax>
    <h1 id = 'lunch'>| | |</h1>
    <Parallax bgImage={image3} strength={-100}>
      <div style={{ height: 500 }}>
      <ConditionalButton  name= 'Lunch'/>
      </div>
    </Parallax>
    <h1 id = 'appetizers'>| | |</h1>
    <Parallax
      bgImage={image4}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
      <ConditionalButton name= 'Appetizers'/>
      </div>
    </Parallax>
    <h1 id = 'dinner'>| | |</h1>
    <Parallax bgImage={image5} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
      <ConditionalButton name= 'Dinner'/>
      </div>
    </Parallax>
    <h1 id = 'dessert'>| | |</h1>
    <Parallax bgImage={image6} strength={-100}>
      <div style={{ height: 500 }}>
      <ConditionalButton name= 'Dessert'/>
      </div>
    </Parallax>
    <div style={{ height: 10 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

    }

}



class Restaurant extends React.Component {

    render() {

        return (
            <React.Fragment>

            <div>
            
                <ParallaxMenu />

            </div>
            <Footer />
                
            </React.Fragment>
  
    )

    }

}
export default Restaurant;
