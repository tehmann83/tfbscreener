import alert from './alert';
import auth from './auth';
import { combineReducers } from 'redux';
import profile from './profile';

export default combineReducers({
	alert,
	auth,
	profile
});
