import axios from "axios";
import { alertMessage, alertQuestion } from "../alerts/alerts";
import {ERROR_MESSAGE_LOGIN,ICON_ERROR} from "../alerts/VariablesAlerts";




 export default function GetUsers (user: string,password :string)  {   
     
        axios.get('https://localhost:44317/api/Usuario/getUsuario/'+user+'/'+password).then(response  => {
         
            if(response.data){
                  localStorage.setItem("user", user);
                  
                   window.location.href  = "/Home";
            }else{
                  alertMessage(ERROR_MESSAGE_LOGIN,ICON_ERROR);

                  
            }

           
      });

      return true;
     
}