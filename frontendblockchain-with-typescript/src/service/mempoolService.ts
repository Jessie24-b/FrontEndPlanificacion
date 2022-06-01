
import axios from "axios";
import Mempool from "../types/mempool.type";
// import httpRoutes from "../routes/httpRoutes"

export  function registerMempool (mempool: Mempool)  {   

    const response=  axios.post<Mempool>('https://localhost:44317/api/Usuario/',mempool).then(response => response.data)  
   // alertMessage(SUCCESS_MESSAGE_REGISTER,ICON_SUCCESS);
  
 return response


}

export  function getMempoolList(){
  const response=  axios.get('https://localhost:44317/api/Mempool').then(response => response.data) 
  
  return response;

}

export function deleteMempool(id:string){
  const response=  axios.delete('https://localhost:44317/api/Mempool/'+id).then(response => response.data) 

  return response;

}
