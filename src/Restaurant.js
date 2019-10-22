import React from 'react';
import './Restaurant.css';
import { Parallax } from "react-parallax";
import axios from 'axios';


/////////////////NavBar/////////////////////////


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
                    <a className="nav-link dropdown-toggle h3" href="#about" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menus</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#breakfast">Breakfast</a>
                            <a className="dropdown-item" href="#lunch">Lunch</a>
                            <a className="dropdown-item" href="#appetizers">Appetizers</a>
                            <a className="dropdown-item" href="#dinner">Dinner</a>
                            <a className="dropdown-item" href="#dessert">Dessert</a>
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

///////////////////Footer//////////////////////

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


////////////////// Old Class /////////////////////

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

function MealType(props) {
        return (
        <button className = "btn btn-link" style={insideStyles}>{props.name}</button>
        )
}

class MenuItems extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [],
            price: ['$20','$17','$40','$32','$10','$12','$16','$21','$25','$30','$45','$24','$10','$14','$15','$16','$12'],
            title: ['Agliaita', 'Bagna cauda', 'Maccu', 'Minestrone', 'Boreto', 'Bari', 'Farinata', 'Crocche', 'Columba Pasquale', 
                     'Pane toscana', 'Panino', 'Pesto', 'Penia', 'Riscotto', 'Riso tonnato', 'Acqua', 'Cacciucco', 'Cappon Magro', 
                     'Involtini', 'Cozze', 'Buridda'],
        }
    }

    componentDidMount(){
        axios.get(`https://entree-f18.herokuapp.com/v1/menu/12`)
            .then(res => {
                console.log(res);
                // prepare new menu item array
                let menuitems = res.data.menu_items;
                // var m = res.data.menu_items
                menuitems.map((item, idx) => {
                    item.title = "Something";
                    item.price = "$1";
                })
                // map data to the m array
                // add price, title


                // then set state items: m
                this.setState({items: menuitems })

            });
    }
    render(){

        // let items = [1,2,3,4,5,6,7,8,9,10,11,12].map(item => {
            return (
              
                 <div className = 'container mt-5'>
                    <div className = 'row'>



                    {this.state.items.map(item => 
                        <React.Fragment>

                            <h5 className = 'col-3 mt-5'> <span className = 'h2'>Item Name & Price</span>  <br></br> {item.description}</h5>

                        </React.Fragment>
                    
                    
                    )}
           
                    </div>
                </div>

              
    
            );
     

    }

}




class ConditionalButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            
            
        }
        this.handleClick = this.handleClick.bind(this);


    }

    handleClick(e){
        e.preventDefault();
        console.log('clicked!');

        this.setState(state => ({
            clicked: !state.clicked,
          }));
        }

        render(){
           return (
            <div onClick={this.handleClick}>
                { !this.state.clicked ? <MealType name = {this.props.name} /> : <MenuItems style={insideStyles}/> }
            </div>
           );
          }
      
    }

    




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
    fontSize: '6.5rem',
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
                {/* <MealTypeCard Image = "/images/breakfast2.jpg" Name = 'Breakfast'  />
                <MealTypeCard Image = "/images/appetizers.jpg" Name = 'Appetizers'  />
                <MealTypeCard Image = "/images/lunch.jpg" Name = 'Lunch'  />
                <MealTypeCard Image = "/images/dinner.jpg" Name = 'Dinner'  />
                <MealTypeCard Image = "/images/dessert.jpg" Name = 'Dessert'  /> */}
                <ParallaxMenu />
            </div>
            <Footer />
                
            </React.Fragment>
  
    )

    }

}
export default Restaurant;
