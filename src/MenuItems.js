import React from 'react';
import axios from 'axios';




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

        var getStorage = localStorage.getItem("MenuItems");
        if (getStorage) {

            getStorage = JSON.parse(getStorage);
            this.setState(state => ({
                items: getStorage

            }));

        }

        else {

            axios.get(`https://entree-f18.herokuapp.com/v1/menu/8`)
                .then(res => {

                    // prepare new menu item array
                    let menuitems = res.data.menu_items;
                    console.log(menuitems);

                    // add this back
                    menuitems.map((item, idx) => {
                        item.title = this.state.title[Math.floor(Math.random() * this.state.title.length)];
                        item.price = this.state.price[Math.floor(Math.random() * this.state.price.length)];
                    })


                    // map data to the m array
                    // add price, title


                    // then set state items: m
                    this.setState({ items: menuitems })
                    localStorage.setItem('MenuItems', JSON.stringify(this.state.items));

                });
        }
    }


        render(){
            // let items = [1,2,3,4,5,6,7,8,9,10,11,12].map(item => {
            return (

                <div className='container mt-5'>
                    <div className='row'>

                        {this.state.items.map(item =>
                            <React.Fragment>

                                <h5 className='col-3 mt-5 text-white'> <span className='h3'>{item.title} {item.price}</span>  <br></br> {item.description}</h5>

                            </React.Fragment>


                        )}
                    </div>
                </div>
            );
        }
    }



    export default MenuItems;