
import '../styles/cards.css'

import { CardDocumentComponent } from './cardDocumentComponent';

interface props{
    listArchivos: Array <{
    id: string;
    archivo: string;
    propietario: string;
    tipoArchivo: string;
    fecha: string;
    tamanio: string;
    }>,
    deleteCard: any
    deleteM: any;
    
}

export const CardsDocumentsComponets = ({listArchivos, deleteM, deleteCard }: props) => {
   
  return (

    <div >
                
         <ul className='cards'>
            {
                listArchivos.map( arch =>{
                        return (
                            <li className='card-item' key={arch.id}>
                                <CardDocumentComponent document ={{
                                    id: arch.id,
                                    archivo:arch.archivo,
                                    propietario: arch.propietario,
                                    tipo: arch.tipoArchivo,
                                    fecha: arch.fecha,
                                    tamanio: arch.tamanio,
                                    deleteMultiple: deleteM,
                                    deleteCard: deleteCard
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
