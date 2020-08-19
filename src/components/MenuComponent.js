import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DetailedDish from './DishdetailComponent.js';
import CommentSection from './CommentSectionComponent';


class Menu extends Component{

	constructor(props){
		super(props);

		this.state = {
			selectedDish: null
		}
	}

	onDishSelect(dish){
		this.setState({selectedDish: dish});
	}

	renderDish(dish){
		if(dish != null){
			return (
				<DetailedDish info={this.state.selectedDish}/>
			);
		}
		else{
			return (<div></div>);
		}
	}

	renderComments(dish){
		if(dish != null){
			return(
				<CommentSection info={this.state.selectedDish}/>
			);
		}
		else{
			return(
				<div></div>
			);
		}
	}

	render() {
		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={()=>this.onDishSelect(dish)}>
						<CardImg width="100%" src={dish.image} alt={dish.name}/>
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});
		return(
			<div className="container">
				<div className="row">
					{menu}
				</div>
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						{this.renderDish(this.state.selectedDish)}
					</div>
					<div className="col-12 col-md-5 m-1">
						{this.renderComments(this.state.selectedDish)}
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;