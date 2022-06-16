
import axios from "axios";

import { alertMessage } from "../alerts/alerts";
import User from "../types/user.type";
import {SUCCESS_MESSAGE_REGISTER,ICON_SUCCESS} from "../alerts/VariablesAlerts";




 export default function registerUser (user: User)  {   

      const response=  axios.post<User>('https://localhost:44317/api/Usuario/',user).then(response => response.data)  
      alertMessage(SUCCESS_MESSAGE_REGISTER,ICON_SUCCESS);
      
     // alertQuestion(QUESTION_MESSAGE_DELETE+user.user,CONFIRM_BUTTON_TEXT_DELETE,ACTION_SUCCESS_DELETE);
     
    

   return response

  
     
}

