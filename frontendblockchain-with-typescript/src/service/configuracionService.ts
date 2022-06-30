import axios from "axios";
import { BASEURL, CONFIGURACION_CONTROLLER } from "../routes/httpRoutes"


export   function getNumberBlockofConfig() {
    
    const response =  axios.get(BASEURL + CONFIGURACION_CONTROLLER + 
      '/getConfig/' + '62bcaf555a4c5856c43e23dc').then(response => response.data);
  
  return response;
}