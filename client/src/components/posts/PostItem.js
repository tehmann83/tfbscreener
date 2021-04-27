import { addLike, deletePost, removeLike } from '../../actions/post';
import {
	faThumbsDown,
	faThumbsUp,
	faTimes
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const PostItem = ({
	addLike,
	removeLike,
	deletePost,
	auth,
	post: { _id, text, name, avatar, user, likes, comments, date },
	showActions = true
}) => {
	return (
		<div className="post bg-white p-1 my-1">
			<div>
				<Link to={`/profile/${user}`}>
					<img className="round-img" src={avatar} alt="" />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<p className="my-1">{text}</p>
				<p className="post-date">
					Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
				</p>

				{showActions && (
					<>
						<button
							type="button"
							className="btn btn-light"
							onClick={e => addLike(_id)}
						>
							<FontAwesomeIcon icon={faThumbsUp} />{' '}
							{likes.length > 0 && <span>{likes.length}</span>}
						</button>
						<button
							type="button"
							className="btn btn-light"
							onClick={e => removeLike(_id)}
						>
							<FontAwesomeIcon icon={faThumbsDown} />{' '}
						</button>
						<Link to={`/posts/${_id}`} className="btn btn-primary">
							Discussion{' '}
							{comments.length > 0 && (
								<span className="comment-count">{comments.length}</span>
							)}
						</Link>
						{!auth.loading && user === auth.user._id && (
							<button
								onClick={e => deletePost(_id)}
								type="button"
								className="btn btn-danger"
							>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						)}
					</>
				)}
			</div>
		</div>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
	PostItem
);
