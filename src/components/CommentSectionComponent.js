import React, { Component } from 'react';

class CommentSection extends Component{

	// renderRating(p) {
	// 	let ratingSection = null;
	// 	for(let i = 0; i < p; i++){
	// 		ratingSection += '<div><span className="fa fa-star fa-md"></span></div>';
	// 	}
	// 	return ratingSection;
	// }
	render(){
		const commentSection = this.props.info.comments.map((singleComment) => {
			return(
				<li className="list-group-item">
					<div key={singleComment.id}>
						<div>{singleComment.comment}</div>
						<div className="m-2">--{singleComment.author}, {singleComment.date}</div>
					</div>
				</li>
			);
		});
		return(
			<div>
				<h4>Comments</h4>
				<ul className="list-group list-group-flush">
					{commentSection}
				</ul>
			</div>
		);
	}
}

export default CommentSection;