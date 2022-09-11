import { useReducer,useCallback, useContext } from "react";
import AuthContext from "../store/auth-context-new";
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
     const authCtx = useContext(AuthContext);
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
                    const {data} = responseData;
                    if(data.message){
                        dispatchFn({
                            type:'SUCCESS',
                            responseData:responseData.data,
                        });
                    authCtx.onLogin();
                    }else if(responseData.message){
                        // console.log(responseData.message);
                        throw new Error(responseData.message);
                    }
                    
                }catch(error){
                    console.log(error.message)
                    dispatchFn({
                        type:'ERROR',
                        errorMessage: error.message || 'Something Went wrong!'
                    })
                }
          }
      return {
        sendRequest,
        httpState
    }
}
export default useHttp1;

