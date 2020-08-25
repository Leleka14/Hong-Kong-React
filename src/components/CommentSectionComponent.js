import React from 'react';

	// renderRating(p) {
	// 	let ratingSection = null;
	// 	for(let i = 0; i < p; i++){
	// 		ratingSection += '<div><span className="fa fa-star fa-md"></span></div>';
	// 	}
	// 	return ratingSection;
	// }

	function RenderComments({comment}){
		return(
			<div>
				<div>{comment.comment}</div>
				<div className="m-2">--{comment.author}, {new Intl.DateTimeFormat('en-US', {
					year: 'numeric', 
					month: 'short', 
					day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
				</div>
			</div>
			
		);
	}
	

	const CommentSection = (props) =>{
		const allComments = props.comments.map((comment) =>{
			return(
				<li className="list-group-item">
					<RenderComments comment={comment}/>
				</li>
			);
		})
		
		return(
			<React.Fragment>
				<h4>Comments</h4>
				<ul className="list-group list-group-flush">
					{allComments}
				</ul>
			</React.Fragment>
		);
	}

export default CommentSection;