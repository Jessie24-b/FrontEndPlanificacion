
import axios from "axios";
import {BASEURL,MEMPOOL_CONTROLLER} from "../routes/httpRoutes"
import { alertMessage, alertQuestion } from "../alerts/alerts";
import {ACTION_SUCCESS_DELETE,ICON_SUCCESS,QUESTION_MESSAGE_DELETE,CONFIRM_BUTTON_TEXT_DELETE,SUCCESS_MESSAGE_REGISTER} from "../alerts/VariablesAlerts";


export function registerMempool (mempool:any)  {   

  
    const response=  axios.post(BASEURL+MEMPOOL_CONTROLLER,mempool).then(response => response.data)  
    alertMessage(SUCCESS_MESSAGE_REGISTER,ICON_SUCCESS);

 return response


}

export  function getMempoolList(){
  const response=  axios.get(BASEURL+MEMPOOL_CONTROLLER).then(response => response.data) 
  
  return response;

}

export function deleteMempool(id:string){
  const response=  axios.delete(BASEURL+MEMPOOL_CONTROLLER+'/'+id).then(response => response.data) 

  alertMessage(ACTION_SUCCESS_DELETE,ICON_SUCCESS);

  return response;

}
