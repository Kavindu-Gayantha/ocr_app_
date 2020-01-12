import streamApi from './../api/ocrSystem';
export const signIn = (formValue) => async (dispatch) => {
    const response = await streamApi.post('/singIn' , formValue);
    dispatch({type:"SIGN_IN" , payload:response.data});
}
export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}
export const signUp = (formValue) =>async (dispatch)=> {
    const response = await streamApi.post('/singUp' , formValue);
    dispatch({type: "SIGN_UP" , payload:response.data});
}
export const uploadImage = (data) =>async (dispatch,getState)=> {
    data.append("token", getState().auth.token);
    const response = await streamApi.post('/image' , data);
    dispatch({type: "OCR_TEXT" , payload:response.data});
}
