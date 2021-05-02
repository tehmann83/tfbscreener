import React, { useEffect } from 'react';

import CommentForm from './CommentForm';
import CommentItem from '../post/CommentItem';
import { Link } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
	useEffect(() => {
		getPost(match.params.id);
	}, [getPost, match.params.id]);
	return loading || post === null ? (
		<Spinner />
	) : (
		<div className="container">
			<Link to="/posts" className="btn">
				Back to posts
			</Link>{' '}
			<PostItem post={post} showActions={false} />
			<CommentForm postId={post._id} />
			{post.comments.map(comment => (
				<CommentItem key={comment._id} comment={comment} postId={post._id} />
			))}
		</div>
	);
};

Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
