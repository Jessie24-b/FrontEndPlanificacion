import axios from "axios";
import { BASEURL, BLOQUE_CONTROLLER } from "../routes/httpRoutes"

export  function getBloqueList(){
    
    const response
    = axios.get(BASEURL+BLOQUE_CONTROLLER).then(response => response.data) 
    
    return response;
  
  }