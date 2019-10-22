import React from 'react';
import './Restaurant.css';
import { Parallax } from "react-parallax";




class Restaurant extends React.Component {

    render() {

        return (
            <React.Fragment>

            <div>
                {/* <MealTypeCard Image = "/images/breakfast2.jpg" Name = 'Breakfast'  />
                <MealTypeCard Image = "/images/appetizers.jpg" Name = 'Appetizers'  />
                <MealTypeCard Image = "/images/lunch.jpg" Name = 'Lunch'  />
                <MealTypeCard Image = "/images/dinner.jpg" Name = 'Dinner'  />
                <MealTypeCard Image = "/images/dessert.jpg" Name = 'Dessert'  /> */}
                <ParallaxBlock />
            </div>
            <Footer />
                
            </React.Fragment>
  
    )

    }

}


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <button className="navbar-toggler navbar-toggler-icon h3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" />

            <a className="navbar-brand mr-5 h1" href="#about">Stellas</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-end">
                    <li className="nav-item active">
                        <a className="nav-link h3" href="#about">Hours & Location <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <a class="nav-link dropdown-toggle h3" href="#about" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menus</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#breakfast">Breakfast</a>
                            <a class="dropdown-item" href="#lunch">Lunch</a>
                            <a class="dropdown-item" href="#appetizers">Appetizers</a>
                            <a class="dropdown-item" href="#dinner">Dinner</a>
                            <a class="dropdown-item" href="#dessert">Dessert</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link h3" href="#about" tabIndex="-1">Private Dining</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link h3" href="#about" tabIndex="-1">About Stellas</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function Footer() {

    return (
        <footer className='footer navbar navbar-light bg-dark text-white-50'>

            <div className='container'>

                <div className = 'row'>

                    <small className = 'col-4'>Stellas</small>

                    <small className = 'col-4'>8334 W. Trusel Avenue Spring Valley, CA 91977</small>

                    <small className = 'col-4'> Monday-Thursday <br /> 
                    10:45-10PM      <br />
                    Friday & Saturday <br />
                    10:45-11PM
                
                </small>

                </div>

            </div>

        </footer>
    )

}

// class MealTypeCard extends React.Component {

//     constructor(props){
//         super(props);
//         this.style = {
//             backgroundImage: `url(${props.Image})`,
//             backgroundposition: 'center',
//             backgroundsize: 'cover',
//             backgroundrepeat: 'no-repeat',
//             height: '50vh',

//         }
//         this.mealtype =  this.props.Name


    
        
//         }

    

//     render(){
        
//         return(

//             <div className = 'container-fluid'>
//                 <div className = 'row'>
//                     <div className = 'col-1'></div>
//                     <div className = 'col-10 card bg-dark text-white'>
//                         <img className="card-img" style = {this.style} alt = '' />
//                         <div className="card-img-overlay">
//                         <h5 className="card-title"> {this.mealtype}</h5>
//                     </div>
//                     </div>
//                     <div className = 'col-1'></div>
//                 </div>
//             </div>

//         );

//     }
// }

/////////////////Paralax //////////////////////////

const styles = {
    fontFamily:  'Dancing Script',
    textAlign: "center",
    
  };
  const insideStyles = {
    
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: '10rem',
    color: 'white'
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
    
  
class ParallaxBlock extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div style={styles}>

    <Parallax bgImage={image1}>
    <Navbar />

      <div style={{ height: 580 }}>
        <div style={insideStyles}>Stellas</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image2} blur={{ min: -1, max: 5 }}>
      <div style={{ height: 500 }} id = 'breakfast'>
        <button className = "btn btn-link" style={insideStyles}>Breakfast</button>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} strength={-100}>
      <div style={{ height: 500 }} id = 'lunch'>
      <button className = "btn btn-link" style={insideStyles}>Lunch</button>
      </div>
    </Parallax>
    <h1>| | |</h1>
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
      <div style={{ height: 500 }} id = 'appetizers'>
      <button className = "btn btn-link" style={insideStyles}>Appetizers</button>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image5} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }} id = 'dinner'>
      <button className = "btn btn-link" style={insideStyles}>Dinner</button>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image6} strength={-100}>
      <div style={{ height: 500 }} id = 'dessert'>
      <button className = "btn btn-link" style={insideStyles}>Dessert</button>
      </div>
    </Parallax>
    <div style={{ height: 10 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

    }

}

export default Restaurant;
