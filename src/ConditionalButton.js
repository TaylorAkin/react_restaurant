import React from 'react';
import MealType from './MealType';
import MenuItems from './MenuItems';
import insideStyles from './Restaurant'


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

        this.setState(state => ({
            clicked: !state.clicked,
          }));
        }

        render(){
           return (
            <div onClick={this.handleClick}>
                { !this.state.clicked ? <MealType name = {this.props.name} /> : <MenuItems /> }
            </div>
           );
          }
      
    }

    export default ConditionalButton;