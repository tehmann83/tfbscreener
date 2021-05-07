import alert from './alert';
import auth from './auth';
import { combineReducers } from 'redux';
import data from './data';
import post from './post';
import profile from './profile';

export default combineReducers({
	alert,
	auth,
	data,
	profile,
	post
});
