import React from 'react';
import { signIn  } from '../../actions';
import {Field,reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignIn extends React.Component{
    state = { buttonClick:false}
    renderError(meta){
        if(meta.touched && meta.error ){
            return(
                <div className="ui red message">
                    <div className="header">{meta.error}</div>
                </div>
            );
        }
        return null;
    }
    renderInput = ({input,label,meta,type}) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}  autoComplete="on" type={type}/>
                {this.renderError(meta)}
            </div>
        );
    }
    renderErrorMessage(ss){
        if(this.state.buttonClick){
            if(this.props.authState.token === null && this.props.authState.error === null){
                return (
                    <div>
                        <div className="ui active inverted dimmer">
                            <div className="ui medium text loader">Loading</div>
                        </div>
                    </div>
                    );
            }else if(!this.props.authState.isSignedIn){
                return (<div className="ui red message">{this.props.authState.error}</div>);
            }else{
                return (<Redirect to="imageUpload"/>)
            }
        }else{
           return null;
        }
        
    }

    onSubmit = (formsValue) => {
        this.setState({ buttonClick: true });
        this.props.signIn(formsValue);
    }
    render(){
        return (
            <div>
                <div style={{ width: '50%', marginTop:"100px",border:"solid",padding:"20px",borderRadius:"20px" }}>
                    <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name="email" component={this.renderInput} label="Enter email" type="text"/>
                        <Field name="password" component={this.renderInput} label="Enter password" type="password"/>
                        {this.renderErrorMessage()}
                        <button className="ui button primary" onClick={this.props.authState.error = null}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
const validate = (formsValue) => {
    const errors = {};
    if(!formsValue.email){
        errors.email = "Email cann't be empty";
    }
    if(!formsValue.password){
        errors.password = "Password cann't be empty";
    }
    return errors;
}
const mapStateToProps = (state) => {
    return {authState:state.auth}
}
export default connect(mapStateToProps , {signIn})(reduxForm({form:"signInForm",validate})(SignIn));