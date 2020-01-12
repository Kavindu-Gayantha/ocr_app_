const INIT_STATE = {
    isSignedIn:false,
    token:null,
    error:null
}
export default (state = INIT_STATE , action) => {
    switch(action.type){
        case "SIGN_IN":
            if(action.payload.token === undefined){
                return {...state , isSignedIn:false , token:null , error:action.payload.StatusDetails };
            }else{
                return {...state , isSignedIn:true , token:action.payload.token , error:null};
            }
        case "SIGN_OUT":
            return {...state , isSignedIn:false , token:null , error : null};
        default:
            return state;
    }
}