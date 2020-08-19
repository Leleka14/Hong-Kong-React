import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DetailedDish extends Component{

	render(){
		return(
			<Card>
				<CardImg src={this.props.info.image} alt={this.props.info.name}/>
				<CardBody>
					<CardTitle>{this.props.info.name}</CardTitle>
					<CardText>{this.props.info.description}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default DetailedDish;
