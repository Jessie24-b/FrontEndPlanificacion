import axios from "axios";
import React from "react"
import MempoolS from "../types/mempool.type";
import {registerMempool,getMempoolList,deleteMempool} from "../service/mempoolService"
import {MdDeleteForever} from 'react-icons/md'
import {GrDocumentDownload} from 'react-icons/gr'


/* interface MempoolState {
    inputValues: MempoolS
} */


const Mempool = () => {



    const [archivos, setArchivos] = React.useState<FileList | null>()


    //Obtiene los archivos y se ingresa al useState trato que inserten varios

    const subirArchivos = function (e: React.ChangeEvent<HTMLInputElement>) {

        const fileList = e.target.files;
        // console.log(fileList);
        if (!fileList) return;
        setArchivos(fileList);

    };
    //Se supone que este inserta con el boton 
    const insertArchivos = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let date = new Date();

        console.log(archivos?.item(0));
        
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
                    
                   
            
                    //registerMempool(inputValues);

                    axios.post<MempoolS>('https://localhost:44317/api/Mempool', document).then(response => response.data)

                }

            })
        }
    }

    
     
   


    const listMempool=()=>{
        getMempoolList().then(response => {
         console.log(response)
     })  


    }

    const deleteMem=()=>{

        deleteMempool("6296fd03de34e26ff4d44799");
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
                    <div className="card align-items-center" style={{width: '10rem'}}>
                        <img src={"https://thumbs.dreamstime.com/b/carpeta-de-archivos-amarilla-con-los-documentos-34692828.jpg"}
                         className="card-img-top" alt="..." height={'100px'} style={{width: '100px'}}/>
                            <div className="card-body p-0">
                                <h5 className="card-title">Archivo</h5>
                               <div className="row">
                               <div className="col-sm-6">
                                <button className=" btn-danger"> <MdDeleteForever size={30} className="icons"/></button>
                                </div>
                                <div className="col-sm-6">
                                <button className=" btn-primary"> <GrDocumentDownload size={30} className="icons"/></button>
                                </div>
                               </div>                              
                            </div>
                    </div>
                </div>

             {/*    <input type="file" name="files" multiple onChange={subirArchivos} />
                <button onClick={insertArchivos} >Subir Archivos</button>
                

                <button onClick={listMempool}>Listar Mempool</button>
                <button onClick={deleteMem}>Delete Mempool</button> */}

            </div>

        </div>
    );

}
export default Mempool;