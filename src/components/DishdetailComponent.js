import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CommentSection from './CommentSectionComponent';


	function RenderDish({dish}){
		if(dish != null){
			return (
				<div className="row">
					<div className="col-12 col-md-5 m-1" key={dish.id}>
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name}/>
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">
						<CommentSection comments={dish.comments}/>
					</div>
				</div>
				
			);
		}
		else{
			return (<div></div>);
		}
	}

	const DetailedDish = (props) =>{
		return(
			<div className="container">
				<RenderDish dish={props.dish}/>
			</div>
		);
	}
export default DetailedDish;
