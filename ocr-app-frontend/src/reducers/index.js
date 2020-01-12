import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers'
import {reducer} from 'redux-form';
import TextReducers from './TextReducers'
import SignUpReducers from './SingUpReducers';
import SingUpReducers from './SingUpReducers';

export default combineReducers({
    auth:AuthReducers,
    form:reducer,
    resultText:TextReducers,
    singUp:SingUpReducers
});