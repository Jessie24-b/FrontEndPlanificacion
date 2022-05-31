
import axios from "axios";
import MempoolS from "../types/mempool.type";

export default function registerMempool (mempool: MempoolS)  {   

    console.log(mempool);
    const response=  axios.post<MempoolS>('https://localhost:44317/api/Mempool',mempool).then(response => response.data)  
   // alertMessage(SUCCESS_MESSAGE_REGISTER,ICON_SUCCESS);

 return response


}
