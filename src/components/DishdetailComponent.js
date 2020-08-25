import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentSection from './CommentSectionComponent'

	function RenderComments({comments}){
		if(comments != null){
			return(
				<CommentSection comments={comments}/>
			)
		}
		else{
			return(
				<div></div>
			)
		}
	}
	

	function RenderDish({dish}){
		if(dish != null){
			return (
				<div key={dish.id}>
					<Card>
						<CardImg width="100%" src={dish.image} alt={dish.name}/>
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
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
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">
								Home
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<Link to="/menu">
								Menu
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>
							{props.dish.name}
						</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dish.name}</h3>
						<hr/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish}/>
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments comments={props.comments}/>
					</div>
				</div>
			</div>
		);
	}
export default DetailedDish;
