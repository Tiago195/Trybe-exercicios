import { combineReducers } from 'redux';
import token from './users';
import player from './trivia';

const rootReducers = combineReducers({ token, player });

export default rootReducers;
