import React, { useEffect } from 'react';

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
		<>
			<Link to="/posts" className="btn">
				Back to posts
			</Link>{' '}
			<PostItem post={post} showActions={false} />
		</>
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
