import React from "react"
import registerMempool from "../service/mempoolService"


interface Documents {
    lastModified: number,
    lastModifiedDate: Date,
    name: string
    size: number
    type: string
    webkitRelativePath: string
}

const Mempool = () => {

    const [archivos, setArchivos] = React.useState<FileList | null>()

    //Obtiene los archivos y se ingresa al useState trato que inserten varios

    const subirArchivos = function (e: React.ChangeEvent<HTMLInputElement>) {

        const fileList = e.target.files;
        console.log(fileList);
        if (!fileList) return;
        setArchivos(fileList);

    };
    //Se supone que este inserta con el boton 
    const insertArchivos = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        console.log(archivos?.item(0));
        if (archivos) {

            Array.from(archivos).forEach(archivo => {
                const reader = new FileReader();
                reader.readAsDataURL(archivo);
                reader.onload = function () {
                    
                    const base64 = reader.result;
                    //registerMempool();
                }

            })
        }
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