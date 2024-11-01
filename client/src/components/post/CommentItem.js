import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CommentItem = ({
	comment: { _id, text, name, avatar, user, date },
	postId,
	auth,
	deleteComment
}) => {
	return (
		<div class="post bg-white p-1 my-1">
			<div>
				<Link to={`/profile/${user}`}>
					<img class="round-img" src={avatar} alt="" />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<p class="my-1">{text}</p>
				<p class="post-date">
					Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
				</p>
				{!auth.loading && user === auth.user._id && (
					<button
						onClick={e => deleteComment(postId, _id)}
						type="button"
						className="btn btn-danger"
					>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				)}
			</div>
		</div>
	);
};

CommentItem.propTypes = {
	postId: PropTypes.number.isRequired,
	comments: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteComment: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
