import { useReducer,useCallback } from "react";

function httpReducer(state, action){
        if(action.type==='SEND'){
            return {
                data: null,
                error: null,
                status: 'pending'
            }
        }
        if(action.type === 'SUCCESS'){
            return {
                data: action.responseData,
                error: null,
                status: 'completed'
            }
        }
        if(action.type === 'ERROR'){
            return {
                data:null,
                error: action.errorMessage,
                status: 'completed'
            }
        }
        return state;
}

function useHttp1(requestFunction, startWithPending= false){
        const [httpState, dispatchFn] = useReducer(httpReducer, {
            data:null,
            error: null,
            status: startWithPending? 'PENDING': null
        });
        const sendRequest = async (requestData)=>{
                dispatchFn({
                    type:'SEND'
                });
                try{
                    const responseData = await requestFunction(requestData);
                    if(!responseData.message){
                        dispatchFn({
                            type:'SUCCESS',
                            responseData:responseData.data,
                        });
                    }else{
                        throw new Error(responseData.message);
                    }
                    
                }catch(error){
                    // console.log(error);
                    dispatchFn({
                        type:'ERROR',
                        errorMessage: error.message || 'Something Went wrong!'
                    })
                }
          }
        //   console.log(httpState);
      return {
        sendRequest,
        httpState
    }
}
export default useHttp1;

