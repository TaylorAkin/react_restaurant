import React from 'react';
import axios from 'axios';
import './MenuItems.css'





class MenuItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            price: ['-20', '-17', '-40', '-32', '-10', '-12', '-16', '-21', '-25', '-30', '-45', '-24', '-10', '-14', '-15', '-16', '-12'],
            title: ['Agliaita', 'Bagna cauda', 'Maccu', 'Minestrone', 'Boreto', 'Bari', 'Farinata', 'Crocche', 'Columba Pasquale',
                'Pane toscana', 'Panino', 'Pesto', 'Penia', 'Riscotto', 'Riso tonnato', 'Acqua', 'Cacciucco', 'Cappon Magro',
                'Involtini', 'Cozze', 'Buridda', 'Parafur', 'Bieta', 'Vlorfa', 'Rizto', 'Buonasera', 'Bene', 'Fonduta', 'Chitarra', 'Eliche'],
        }
    }

    componentDidMount() {

        var getStorage = localStorage.getItem(this.props.menuName);
        if (getStorage) {

            getStorage = JSON.parse(getStorage);
            this.setState(state => ({
                items: getStorage

            }));

        }

        else {

            axios.get(`https://entree-f18.herokuapp.com/v1/menu/${this.props.numOfItems}`)
                .then(res => {

                    // prepare new menu item array
                    let menuitems = res.data.menu_items;
                    console.log(menuitems);

                    // add this back
                    menuitems.map((item, idx) => {
                        item.title = this.state.title[Math.floor(Math.random() * this.state.title.length)];
                        item.price = this.state.price[Math.floor(Math.random() * this.state.price.length)];
                        return item;
                    })

                    this.setState({ items: menuitems })
                    localStorage.setItem(this.props.menuName, JSON.stringify(this.state.items));

                });
        }
    }


    render() {

        var carousel = `carousel${this.props.menuName}`;
        var carouselID = `#${carousel}`;

        return (

            <div className='container-fluid py-5 mt-0' id='MenuItemsBtnClicked'>
                <div className='row py-5 justify-content-md-center'>
                    <div id={carousel} className="carousel slide" data-ride="carousel" data-touch="true" data-keyboard="true">
                        <ol className="carousel-indicators">

                            {this.state.items.map((item, idx) => {

                              var active = " active";

                                if (idx > 0) {
                                    active = "";
                                }

                                return(
    
                                    <React.Fragment>

                                        <li key= {idx} data-target="#carouselExampleIndicators" data-slide-to="0" className= {active} ></li>
                                       

                                    </React.Fragment>

                                )

                                
                            }
                            
                            )}

                        </ol>
                        <div className="carousel-inner">
                            <React.Fragment>

                                {this.state.items.map((item, idx) => {

                                    var active = " active";

                                    if (idx > 0) {
                                        active = "";
                                    }

                                    var carouselItem = `carousel-item${active}`;

                                    return (
                                        <div key={idx} className={carouselItem}>
                                            <h5 className='py-5 text-white'> <span className='h3'>{item.title} {item.price}</span>  <br></br> {item.description}</h5>
                                        </div>
                                    );
                                }
                                    //<h5 key={idx} className='col-3 py-5 text-white'> <span className='h3'>{item.title} {item.price}</span>  <br></br> {item.description}</h5>
                                )}

                            </React.Fragment>
                        </div>
                        <a className="carousel-control-prev" href={carouselID} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon px-5" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={carouselID} role="button" data-slide="next">
                            <span className="carousel-control-next-icon px-5" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </div>
            </div>
        );
    }
}



export default MenuItems;