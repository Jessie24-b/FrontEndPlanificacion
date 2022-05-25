import axios from "axios";
import { CLIENT_RENEG_LIMIT } from "tls";
import User from "../types/user.type"


//let user : User
 export default function registerUser (user: User)  {   

      const response=  axios.post<User>('https://localhost:44317/api/Usuario/',user).then(response => response.data)  
      return response
}