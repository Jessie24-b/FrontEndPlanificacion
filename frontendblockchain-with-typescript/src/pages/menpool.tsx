import axios from "axios";
import React from "react"
import registerMempool from "../service/mempoolService"
import MempoolS from "../types/mempool.type";


interface Documents {
    lastModified: number,
    lastModifiedDate: Date,
    name: string
    size: number
    type: string
    webkitRelativePath: string
}

interface MempoolState {
    inputValues: MempoolS
}


const Mempool = () => {

   

    const [archivos, setArchivos] = React.useState<FileList | null>()

    const [inputValues, setInputValues] = React.useState<Array<MempoolState["inputValues"]>>([])

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

                    var document =  {
                        archivo: base64,
                        propietario: 'Abigail',
                        tipoArchivo: archivo.type,
                        fecha: date.toLocaleDateString() ,
                        tamanio: archivo.size.toLocaleString(),
                   }
                    
                   
                    //registerMempool(inputValues);

                    axios.post<MempoolS>('https://localhost:44317/api/Mempool',document).then(response => response.data)  
                   
                }

            })
        }
    }

    const nuevaF=(archivo: File, base64: any)=>{
     

      return 
       
    }


    return (
        <div>

            <div>

                <input type="file" name="files" multiple onChange={subirArchivos} />
                <button onClick={insertArchivos} >Subir Archivos</button>
                
            </div>

        </div>
    );

}

export default Mempool;