
import axios from "axios";
import Mempool from "../types/mempool.type";

export default function registerMempool (mempool: Mempool)  {   

    const response=  axios.post<Mempool>('https://localhost:44317/api/Usuario/',mempool).then(response => response.data)  
   // alertMessage(SUCCESS_MESSAGE_REGISTER,ICON_SUCCESS);
  
 return response


}
