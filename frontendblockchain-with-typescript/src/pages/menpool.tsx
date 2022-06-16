
import { useEffect, useState } from "react"
import MempoolS from "../types/mempool.type";
import { registerMempool, getMempoolList, deleteMempool} from "../service/mempoolService"
import {} from "../service/mempoolService"
import { CardsDocumentsComponets } from "../components/cardsDocumentsComponets";
import Navbar from '../components/Navbar';
import { alertMessage } from "../alerts/alerts";
import { ERROR_MESSAGE_INPUT_FILE, ICON_ERROR } from "../alerts/VariablesAlerts";
import '../styles/mempool.css';
import { faL } from "@fortawesome/free-solid-svg-icons";



const Mempool = () => {

    // class Mempool extends React.Component{


    const [isDisabled, setDisabled] = useState(true);
    const [isDisabledEliminar, setDisabledEliminar] = useState(true);
    const [isDisabledDescargar, setDisabledDescargar] = useState(true);

    const [archivos, setArchivos] = useState<FileList | null>()

    const [listArchivos, setAllArchivos] = useState<Array<MempoolS>>([])
    const [reloadData, setReloadData] = useState(false);
    const [arrayIds,setArrayIds]=useState<Array<string>>([]);


    useEffect(() => {

        getMempoolList().then(response => {
            setAllArchivos(response);
        })
       
        return ()=>setReloadData(false);
    },[reloadData])


    const deleteMultiple = (e: React.ChangeEvent<HTMLInputElement>) => {

        var repetido = new Boolean(false);
        const id = e.target.value;


        if (arrayIds.length > 0) { //verificar que el array tiene mas de un elemento


            arrayIds.forEach(function (idMempool, indice, array) {
                if (id == idMempool) {
                    arrayIds.splice(indice, 1)
                    repetido=true;
                }
            })

        } 
        if(repetido==false){
            arrayIds.push(id); //agregar elementos al array
        }

        if(arrayIds.length>=2){
            setDisabledDescargar(false);
            setDisabledEliminar(false);

        }


        console.log("ARRAY FINAL "+arrayIds);

    }


    //Obtiene los archivos y se ingresa al useState trato que inserten varios

    const subirArchivos = function (e: React.ChangeEvent<HTMLInputElement>) {

        const fileList = e.target.files;
        console.log(fileList);
        if (!fileList) return;
        setArchivos(fileList);

        var cont = 0;

        Array.from(fileList).forEach(archivo => {

            var ext = archivo.name.split('.').pop();

            if ((ext != "pdf") && (ext != "png") && ext != "txt" && ext != "docx" && ext != "xlsx" && ext != "pptx"
                && ext != " jpg") {

                cont++;


            }
        })

        if (cont > 0) {
            alertMessage(ERROR_MESSAGE_INPUT_FILE, ICON_ERROR);
        } else {
            setDisabled(false);
            cont = 0;
        }


    };

    const validarExtensionArchivos = (ext: string) => {


    }

    const validationTypeArchive = (type: string) => {
        let numberSlice = 0;
        if (type == "image/jpeg") {
            numberSlice = 23;
        }
        if (type == "application/pdf") {
            numberSlice = 28;
        }
        if (type == "image/png") {
            numberSlice = 22;
        }
        if (type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            numberSlice = 79;
        }
        if (type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {

            numberSlice = 84;

        }
        if (type = "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
            numberSlice = 86;
        }
        if (type = "text/plain") {
            numberSlice = 23;

        }

        return numberSlice;
    }
    //Se supone que este inserta con el boton 
    const insertArchivos = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        let date = new Date();


        if (archivos) {
            Array.from(archivos).forEach(archivo => {

                const reader = new FileReader();
                reader.readAsDataURL(archivo);
                reader.onload = function () {

                    const base64 = reader.result;
                    console.log(base64);

                    const numberS = validationTypeArchive(archivo.type);
                    console.log(numberS);
                    let arc = base64?.toString().slice(numberS);
                    console.log(arc);




                    var document = {
                        archivo: arc,
                        propietario: localStorage.getItem("user"),
                        tipoArchivo: archivo.type,
                        fecha: date.toLocaleDateString(),
                        tamanio: archivo.size.toLocaleString(),
                    }


                    registerMempool(document);
                    setReloadData(true);

                }

            })
        }
    }


    return (
        <div>
            <Navbar />'

            <div className="container">
                <div className="row">
                    <h1 className="font-weight-bold text-uppercase text-center bg-primary text-white">Administración de Archivos </h1>
                    <hr style={{ height: '4px' }} />
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <input id="file" className="input-group-text p-2 border border-primary" style={{ width: '100%' }} type="file" name="files" multiple onChange={subirArchivos} accept="image/jpeg,image/jpg,image/png,.pdf,.txt,.docx,.xlsx,.pptx" />
                    </div>
                    <div className="col-sm-8">

                        <button id="btnMempool" className="btn btn-primary p-2 " onClick={insertArchivos} disabled={isDisabled} >Subir Archivos</button>
                        <button id="btnMempool" className="btn btn-danger p-2 " disabled={isDisabledEliminar}>Eliminar</button>
                        <button id="btnMempool" className="btn btn-info p-2 " disabled={isDisabledDescargar}>Descargar</button>
                    </div>
                    {/* <label><input type="checkbox" id="cbox1" value="first_checkbox" onChange={pruebaFuncion}/> Este es mi primer checkbox</label> */}

                </div>
                <div className="row">
                    <CardsDocumentsComponets listArchivos={listArchivos} deleteM={deleteMultiple} />



                </div>



            </div>

        </div>
    );

}
export default Mempool;



