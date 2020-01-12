import React from 'react'
import { uploadImage  } from '../../actions'
import {Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import TextResult from './../textResult/TextResult'
import { Grid} from 'semantic-ui-react'
class ImageUpload extends React.Component{
    state = {image:null,imageOnClick:false,imagePath:null};
    renderError(){
        if(this.state.image === null && this.state.imageOnClick === true ){
            return(
                <div className="ui red message">
                    <div className="header">plese select image</div>
                </div>
            );
        }
        return null;
    }
    renderInput = ({input,label,meta,type}) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input autoComplete="on" type={type} onChange={this.onChangeHandler}/>
                {this.renderError()}
            </div>
        );
    }
    onChangeHandler =async (event) => {
        if(event.target.files[0] !== undefined){
            this.setState({
                image:event.target.files[0],
                imageOnClick:false,
                imagePath:URL.createObjectURL(event.target.files[0])
            });
        }else{
            this.setState({image:null,imagePath:null,imageOnClick:false});
        }
    }
    onSubmit = () => {
        this.props.textResult.results=undefined;
        this.setState({imageOnClick:true})
        if(this.state.image === null){
            
        }else{
            const data = new FormData();
            data.append('image', this.state.image);
            this.props.uploadImage(data);
        }
        
    }
    renderImage(){
        if(this.state.imagePath === null){
            return null;
        }else{
            return (<div><img src={this.state.imagePath} alt="ss" width="90%" height="300px"></img></div>);
        }
    }
    renderResult(){
        if(this.state.image !== null && this.state.imageOnClick === true){
            return <TextResult/>
        }else{
            return null;
        }
    }
    render(){
        // console.log(this.state)
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <div style={{ border:"solid",margin:"100px 0px 0px 0px",padding:"20px",borderRadius:"20px" }}>
                                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                    <Field name="name" component={this.renderInput} label="Upload file" type="file"/>
                                    <button className="ui button primary">Submit</button>
                                </form>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <div style={{paddingTop:"20px"}}> 
                                {this.renderImage()}
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <div>
                                {this.renderResult()}  
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>    
            </div>
        );
    }
}
const validate = (formsValue) => {
    const errors = {};
    return errors;
}
const mapStateToProps = (state) => {
    return {textResult:state.resultText}
}
export default connect(mapStateToProps , {uploadImage})(reduxForm({form:"signUpForm",validate})(ImageUpload));