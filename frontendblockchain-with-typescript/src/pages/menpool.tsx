import axios from "axios";
import  {useEffect, useState} from "react"
import MempoolS from "../types/mempool.type";
import {registerMempool,getMempoolList} from "../service/mempoolService"
import { CardsDocumentsComponets } from "../components/cardsDocumentsComponets";



const Mempool = () => {


    const [archivos, setArchivos] = useState<FileList | null>()

    const [listArchivos, setAllArchivos] = useState<Array<MempoolS>>([])

    
    useEffect(() =>{
        getMempoolList().then(response => {     
            setAllArchivos(response);
        })  
      
    }, [])
   


    //Obtiene los archivos y se ingresa al useState trato que inserten varios

    const subirArchivos = function (e: React.ChangeEvent<HTMLInputElement>) {

        const fileList = e.target.files;
        
        if (!fileList) return;
        setArchivos(fileList);

    };
    //Se supone que este inserta con el boton 
    const insertArchivos = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let date = new Date();

       
        if (archivos) {
            Array.from(archivos).forEach(archivo => {
                const reader = new FileReader();
                reader.readAsDataURL(archivo);
                reader.onload = function () {

                    const base64 = reader.result;

                    var document = {
                        archivo: base64,
                        propietario: 'Abigail',
                        tipoArchivo: archivo.type,
                        fecha: date.toLocaleDateString() ,
                        tamanio: archivo.size.toLocaleString(),
                   }
                    
                   
            
                    registerMempool(document);

                    // axios.post<MempoolS>('https://localhost:44317/api/Mempool', document)
                    // .then(response => response.data)

                }

            })
        }
    }

    
  

   

   

    return (
        <div>

            <div className="container">
                <div className="row">
                    <h1 className="font-weight-bold text-uppercase text-center bg-primary text-white">Administración de Archivos </h1>
                    <hr style={{ height: '4px' }} />
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <input className="input-group-text p-3 border border-primary" style={{ width: '100%' }} type="file" name="files" multiple onChange={subirArchivos} />
                    </div>
                    <div className="col-sm-4">
                        <button className="btn btn-primary p-3" onClick={insertArchivos} >Subir Archivos</button>
                    </div>
                </div>
                <div className="row">
                   <CardsDocumentsComponets listArchivos= {listArchivos}/>
                </div>

             

            </div>

        </div>
    );

}
export default Mempool;