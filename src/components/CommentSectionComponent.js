import React from 'react';

	// renderRating(p) {
	// 	let ratingSection = null;
	// 	for(let i = 0; i < p; i++){
	// 		ratingSection += '<div><span className="fa fa-star fa-md"></span></div>';
	// 	}
	// 	return ratingSection;
	// }
	const CommentSection = (props) =>{
		const commentSection = props.comments.map((singleComment) => {
			return(
				<li className="list-group-item">
					<div key={singleComment.id}>
						<div>{singleComment.comment}</div>
						<div className="m-2">--{singleComment.author}, {new Intl.DateTimeFormat('en-US', {
							year: 'numeric', 
							month: 'short', 
							day: '2-digit'}).format(new Date(Date.parse(singleComment.date)))}
						</div>
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

export default CommentSection;