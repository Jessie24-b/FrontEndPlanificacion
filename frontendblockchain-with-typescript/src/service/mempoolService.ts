
import axios from "axios";
import {BASEURL,MEMPOOL_CONTROLLER} from "../routes/httpRoutes"
import { alertMessage } from "../alerts/alerts";


export async function registerMempool (mempool:any)  {   

  
    const response= await axios.post(BASEURL+MEMPOOL_CONTROLLER,mempool).then(response => response.data)  
   
 return response


}


export function getCheckFile (file:any)  {   

  
  const response=  axios.post(BASEURL+MEMPOOL_CONTROLLER,file).then(response => response.data)  
  

return response


}

export  async function getMempoolList(){
  const response= await axios.get(BASEURL+MEMPOOL_CONTROLLER).then(response => response.data) 
  
  return response;

}

export function deleteMempool(id:string){
  const response=  axios.delete(BASEURL+MEMPOOL_CONTROLLER+'/'+id).then(response => response.data) 

  
  return response;

}
