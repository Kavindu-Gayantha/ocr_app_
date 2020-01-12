const INIT_STATE = {
    success:false,
    error:null
}
export default (state = INIT_STATE , action) => {
    switch(action.type){
        case "SIGN_UP":
            console.log(action.payload)
            if(action.payload.Status === "success"){
                return {...state , success:true , error:null};
            }else{
                return {...state , success:false , error:action.payload.StatusDetails};
            }
        default:
            return state;
    }
}