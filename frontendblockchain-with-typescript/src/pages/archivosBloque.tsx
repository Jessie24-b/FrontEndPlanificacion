import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CardsBlockFileComponents } from '../components/cardsBlockFileComponent';
import { getBloqueList } from '../service/BloqueService';
var saveAs = require('file-saver');
var Zip = require('jszip')();

interface ListBloque {
    id: string
    idBloque: number
    fechaMinado: string
    prueba: number
    milisegundos: string
    archivos: string[]
    hashPrevio: string
    hash: string

}

interface Files {
    archivo: string;
    nombre: string;
    tipoArchivo: string;
   

}


function ArchivosBloque() {

    const params = useParams();

    const [inputFile, setFile] = useState<Array<Files>>([])
    const [inputState, setState] = useState(true);
    const handleTrue = () => {setState(true);}
    const handleFalse = () => {setState(false);}


    useEffect(() => {
       
        
       // if(inputState){
        cargarArchivos();

     
        //}
       
        
    },[inputState])

    const cargarArchivos = async () => {

        var data = await getBloqueList();
        var archivos = getArchivos(data);
        setFile(crearObjetosFile(archivos));
       // decodificarBase64(bloques);

    }


    const getArchivos = (data: Array<ListBloque>) => {


        var binaryFile: any;
        data.forEach(e => {
            if (e.id == params.id) {
                binaryFile = e.archivos;
            }
        });

        return binaryFile;


    }

    const crearObjetosFile = (archivos: Array<string>) =>{
        var arrayTemp: Array<Files>=[];
        archivos.forEach(a =>{
            var temp = a.split(",");
            var objectFile = {
                archivo: temp[3],
                nombre: temp[1],
                tipoArchivo: temp[0],
            }
            arrayTemp.push(objectFile);
        })

        return arrayTemp;
    }

    const donwloadAll = () => {
        
        inputFile.forEach(list => {
          
                Zip.file(list.nombre, list.archivo, { base64: true });
               
            
        })

        Zip.generateAsync({ type: 'blob' }).then(function (content: any) {
            saveAs(content, "archivos.zip")
        });
        Zip = require('jszip')();

    }

   /*  const decodificarBase64 = (bloques: Array<string>) => {
        var arrayTemp: Array<Files>=[];
        let file: any;
        bloques.forEach(async e => {
            var temp = e.split(",");
            file = await urltoFile(temp[2] + "," + temp[3], temp[1], temp[0]);
            var objectFile = {
                archivo: temp[3],
                nombre: file.name,
                tipoArchivo: file.type,
                tamanio: file.size
            }
            arrayTemp.push(objectFile);
            
        });
        setFile(arrayTemp);
       
    } */

    //return a promise that resolves with a File instance
    function urltoFile(url: string, filename: string, mimeType: string) {
        return (fetch(url)
            .then(function (res) { return res.arrayBuffer(); })
            .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
        );
    }



    return (

        <div>
  
            <div className="container">
                <div className="row">
                    <h1 className="font-weight-bold text-uppercase text-center bg-primary text-white">Archivos del bloque </h1>
                    <hr style={{ height: '4px' }} />
                </div>
                <div className="col-sm-8">

                        <button id="btnMempool" className="btn btn-info p-2 " onClick={donwloadAll}>Descargar todos</button>
                        
                    </div>

                <div className="row">
                    <CardsBlockFileComponents listArchivos={inputFile} />

                </div>



            </div>
        </div>
       
            
           
    )     
       
}

export default ArchivosBloque;