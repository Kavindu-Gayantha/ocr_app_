import React from 'react';
import { connect } from 'react-redux';
import { signIn , signOut } from '../../actions'
import {Link , Redirect} from 'react-router-dom'
import {Segment , Grid} from 'semantic-ui-react'
class OcrAuth extends React.Component{
    state={singOutButtonPress:false}
    renderAuthButton(){
        if(!this.props.isSignedIn){
            return (
                <div>
                    <Link to="/signUp" className="ui inverted primary basic button">New to us? Sign Up</Link>
                    <Redirect to="/" className="ui blue google button"></Redirect>
                </div>
            );
        }else{
            return (
                <div>
                    <button onClick={this.onSingOutClick} className="ui blue google button">Sign Out</button>
                </div>
            );
        }
    }
    onSingOutClick = () => {
        this.props.signOut();
    }
    render(){
        return(
            <div>
                <Segment inverted>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <div className="ui left aligned container">
                                    <h2>Optical Character Recognition (OCR)</h2>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <div className="ui right aligned container">
                                    {this.renderAuthButton()}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(OcrAuth);