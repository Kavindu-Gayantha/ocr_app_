export default (state={} , action) => {
    switch(action.type){
        case 'OCR_TEXT':
            if(action.payload.TextResult === undefined){
                return {...state , result:null, resultError:action.payload.StatusDetails}
            }else{
                return {...state , result:action.payload.TextResult, resultError:null}
            }
        default:
            return state;
    }
}