import React from 'react'
import { signUp  } from '../../actions'
import {Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
class SignUp extends React.Component{
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
                <input {...input}  autoComplete="off" type={type}/>
                {this.renderError(meta)}
            </div>
        );
    }
    onSubmit = (formsValue) => {
        this.setState({ buttonClick: true });
        this.props.signUp(formsValue);
    }
    renderErrorMessage(){
        if(this.state.buttonClick){
            if(this.props.singUp.success === false && this.props.singUp.error === null){
                return (
                    <div>
                        <div className="ui active inverted dimmer">
                            <div className="ui medium text loader">Loading</div>
                        </div>
                    </div>
                );
            }else if(this.props.singUp.error !== null){
                return (<div className="ui red message">{this.props.singUp.error}</div>);
            }else if(this.props.singUp.success){
                return (<Redirect to="/"/>);
            }
        }
    }
    render(){
        return (
            <div>
                <div style={{ width: '50%', marginTop:"100px",border:"solid",padding:"20px",marginLeft:"25%",borderRadius:"20px" }}>
                    <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name="name" component={this.renderInput} label="Enter name" type="text"/>
                        <Field name="email" component={this.renderInput} label="Enter email" type="text"/>
                        <Field name="password" component={this.renderInput} label="Enter password" type="password"/>
                        <Field name="rePassword" component={this.renderInput} label="Re-Enter password" type="password"/>
                        {this.renderErrorMessage()}
                        <button className="ui button primary">Sing Up</button>
                    </form>
                    <div>
                        <p></p>
                        <Link to="/" className="ui primary basic button">Already have an account? Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}
const validate = (formsValue) => {
    const errors = {};
    if(!formsValue.name){
        errors.name = "Name cann't be empty";
    }
    if(!formsValue.email){
        errors.email = "Email cann't be empty";
    }
    if(!formsValue.password){
        errors.password = "Password cann't be empty";
    }
    if(!formsValue.rePassword){
        errors.rePassword = "Re-Enter Password cann't be empty";
    }
    if((formsValue.password !== undefined) && (formsValue.password !== formsValue.rePassword)){
        errors.rePassword = "Password is not matching ";
    }
    return errors;
}
const mapStateToProps = (state) => {
    return {singUp:state.singUp}
}
export default connect(mapStateToProps , {signUp})(reduxForm({form:"signUpForm",validate})(SignUp));