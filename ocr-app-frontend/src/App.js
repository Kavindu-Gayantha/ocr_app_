import React from 'react';
import {Router,Route} from 'react-router-dom';
import OcrAuth from './component/navigation/OcrAuth';
import SignIn from './component/signIn/SignIn';
import SignUp from './component/signUp/SignUp';
import imageUpload from './component/imageUpload/ImageUpload';
import history from './History';
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <OcrAuth/>
          <div className="ui container">
            <Route path="/" exact component={SignIn}/>
            <Route path="/signUp" exact component={SignUp}/>
            <Route path="/imageUpload" exact component={imageUpload}/>
          </div>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
