import React from 'react';
import MealType from './MealType';
import MenuItems from './MenuItems';


const componentStyle = {
    color: 'black',
    opacity: '0.5'
};


class ConditionalButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,


        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }


    handleChange(e){
        e.preventDefault();

        this.setState(state => ({
            clicked: false,
        }));

    }

    handleClick(e) {
        e.preventDefault();

        this.setState(state => ({
            clicked: true,
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {!this.state.clicked ? <MealType name={this.props.name} /> : <MenuItems menuName={this.props.name} numOfItems={this.props.numOfItems} style={componentStyle} onClick={this.props.onChange} />}
            </div>
        );
    }

}

export default ConditionalButton;