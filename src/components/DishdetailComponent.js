import React, { useState } from 'react';
import { Card, CardImg, CardText, Button, CardBody, Row, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import ReactStars from "react-rating-stars-component";
import { Loading } from './LoadingComponent.js';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

const RenderDish = ({dish}) =>{
	if(dish != null){
		return (
			<div key={dish.id}>
				<FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
					<Card>
						<CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</FadeTransform>
			</div>
		);
	}
	else{
		return (<div></div>);
	}
}


	
const RenderComments = ({comments, postComment, dishId}) =>{
	if(comments != null){
		return(
			<React.Fragment>
				<h4>Comments</h4>
				<ul className="list-group list-group-flush">
					<Stagger in>
						<Fade in>
						{comments.map((comment) =>{
							return(
								<li className="list-group-item">
									<ReactStars
										count={comment.rating}
										size={24}
										edit={false}
									/>
									<div>{comment.comment}</div>
									<h6 className="m-2">--{comment.author}, {new Intl.DateTimeFormat('en-US', {
										year: 'numeric', 
										month: 'short', 
										day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
									</h6>
								</li>
							);
						})}		
						</Fade>
					</Stagger>
				</ul>
				<CommentForm postComment={postComment} dishId={dishId}/>
			</React.Fragment>
		)
	}
	else{
		return(
			<div></div>
		)
	}
}
const CommentForm = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(prevState => !prevState);
	}

	const handleSubmit = (values) =>{
		toggleModal();
		console.log(props.dishId, values)
		props.postComment(props.dishId, values.rating, values.author, values.comment)
	}
	return(
		<React.Fragment>
			<Button outline onClick={toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
			<Modal isOpen={isModalOpen} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal}>Leave a Comment</ModalHeader>
				<ModalBody>
					<LocalForm onSubmit={(values) => handleSubmit(values)}>
						<div className="container">
							<Row className="form-group">
								<Label htmlFor="rating">Rating</Label>
								<Control.select className="form-control" 
								model=".rating" 
								name="rating"
								id="rating">
									<option>5</option>
									<option>4</option>
									<option>3</option>
									<option>2</option>
									<option>1</option>
								</Control.select>								
							</Row>
							<Row className="form-group">
								<Label htmlFor="author">Your name</Label>
								<Control.text className="form-control"
								model=".author"
								name="author"
								placeholder="Your name"
								id="author"
								validators={{
									required, minLength: minLength(3), maxLength: maxLength(15)
								}}/>
								<Errors className="text-danger"
								model=".author"
								show="touched"
								messages={{
									required: 'Required',
									minLength: 'Must be greater than 2 characters',
									maxLength: 'Must be 15 characters or less'
								}}/>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment">Comment</Label>
								<Control.textarea className="form-control"
								model=".comment"
								name="comment"
								id="comment"
								rows="6"/>
							</Row>
							<Row className="form-group">
								<Button type="submit" color="success">Submit</Button>
							</Row>
						</div>
					</LocalForm>
				</ModalBody>
			</Modal>
		</React.Fragment>
	)
}

const DetailedDish = (props) =>{

	if(props.isLoading){
		return (
			<div className="container">
				<div className="row">
					<Loading/>
				</div>
			</div>
		)
	}
	else if(props.errorMessage){
		return (
			<div className="container">
				<div className="row">
					<h4>{props.errorMessage}</h4>
				</div>
			</div>
		)
	}

	if(props.dish != null){
		return(
			<React.Fragment>
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
							<RenderComments comments={props.comments}
							postComment={props.postComment}
							dishId={props.dish.id}/>
						</div>
					</div>
				</div>
				
			</React.Fragment>
		);
	}
}
export default DetailedDish;
