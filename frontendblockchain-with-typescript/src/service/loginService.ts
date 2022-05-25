import axios from "axios";
import Swal from 'sweetalert2'




 export default function GetUsers (user: string,password :string)  {   
     
     

        axios.get('https://localhost:44317/api/Usuario/getUsuario/'+user+'/'+password).then(response  => {
           console.log(response.data);
            if(response.data){
                  console.log("perfect");
                   window.location.href  = "/Home";
            }else{
                  console.log("este usuario no existe");

                  Swal.fire({
                        title: 'Usuario no encontrado',
                        text: 'Usuario no registrado o datos incorrectos',
                        icon: 'error',
                        timer: 2000,
                        showConfirmButton: false,
                        position: 'top-end',
                        width: 330,
                        color: '#716add',
                      
                        
                })
            }

           
      });

      return true;
     
}