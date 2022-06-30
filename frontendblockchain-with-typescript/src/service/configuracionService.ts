import axios from "axios";
import { BASEURL, CONFIGURACION_CONTROLLER } from "../routes/httpRoutes"


export   function getNumberBlockofConfig() {
    
    const response =  axios.get(BASEURL + CONFIGURACION_CONTROLLER + 
      '/getConfig/' + '62bd32f2ea21487a3467f572').then(response => response.data);
  
  return response;
}