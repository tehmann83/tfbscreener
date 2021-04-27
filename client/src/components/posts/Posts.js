import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostForm from './PostForm';
import PostItem from './PostItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);
	return loading ? (
		Spinner
	) : (
		<>
			<h1 className="large text-primary">Posts</h1>
			<p className="lead">
				<FontAwesomeIcon icon={faUser} />
			</p>
			<PostForm />
			<div className="posts">
				{posts.map(post => (
					<PostItem key={post._id} post={post} />
				))}
			</div>
		</>
	);
};

Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
