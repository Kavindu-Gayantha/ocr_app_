import React from 'react'
import { uploadImage  } from '../../actions'
import { connect } from 'react-redux';

class TextResult extends React.Component{
    
    renderResult(){
        if(this.props.textResult.result === undefined){
            return (
                <div className="ui active">
                    <div className="ui active inverted dimmer">
                        <div className="ui medium text loader">Loading ...</div>
                    </div>
                </div>
                );
        }else if(this.props.textResult.result !== null){
            return (
                <div style={{backgroundColor:"lavender"}}>
                    <h1 style={{color:"blue",textAlign:"center",fontSize:"40px"}}>Result</h1>
                    <pre style={{fontSize:"20px",padding:"30px"}}>{this.props.textResult.result}</pre>
                </div>
            );
        }else if(this.props.textResult.resultError !== null){
            return (
            <div className="ui red message">
                <p>{this.props.textResult.resultError}</p>
            </div>);
        }
    }



    render(){
        return (
            <div>
                {this.renderResult()}
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {textResult:state.resultText}
}
export default connect(mapStatetoProps ,{uploadImage})(TextResult);