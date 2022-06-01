
import axios from "axios";
// import httpRoutes from "../routes/httpRoutes"
import MempoolS from "../types/mempool.type";

export function registerMempool (mempool: MempoolS)  {   

    console.log(mempool);
    const response=  axios.post<MempoolS>('https://localhost:44317/api/Mempool',mempool).then(response => response.data)  
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
