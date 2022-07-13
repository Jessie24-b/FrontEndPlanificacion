
import '../styles/cards.css'

import { CardBlockFileComponent } from './cardBlockFileComponent';

interface props{
    listArchivos: Array <{
    archivo: string;
    nombre: string;
    tipoArchivo: string;
   
    }>
    
}

export const CardsBlockFileComponents = ({listArchivos}: props) => {


   
   
  return (

    <div >
              
         <ul className='cards'>
            {
                listArchivos.map( arch =>{
                        return (
                            <li className='card-item' key={arch.archivo}>
                                <CardBlockFileComponent document ={{                                              
                                    archivo:arch.archivo,
                                    nombre: arch.nombre,                                   
                                    tipo: arch.tipoArchivo,                                   
                                                                 
                                }} 
                                    />
                            </li>
                        )
                })
            }
         </ul>
    </div>
  )

}