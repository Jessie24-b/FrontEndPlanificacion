
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import  '../styles/bloque.css';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css'
import { information } from "../alerts/alerts";


import { getBloqueList } from '../service/BloqueService';


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

function BloqueComponent() {

    const [bloques, setBloques] = useState<Array<ListBloque>>([])

    useEffect(() => {
        axios.get('https://localhost:44317/api/Bloque/')
            .then(response => {

                setBloques(response.data);
            })

    }, [])

 const verHashPrevio=(hashPrevio:string,hash:string,idBloque:number)=>{
    information(hashPrevio,hash,idBloque);
}

    return (
        <div className='container-fluid '>

            <table className='table'>

                <thead>
                    <tr>

                        <th className="sizeTh">Id bloque</th>
                        <th>Fecha minado</th>
                        <th>Prueba</th>
                        <th>Milisegundos</th>
                        <th>Ver hash</th>
                        <th>Ver documentos</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        bloques.map(b => {
                            return (
                                <tr key={b.idBloque}>
                                    <td>{b.idBloque}</td>
                                    <td>{b.fechaMinado}</td>
                                    <td>{b.prueba}</td>
                                    <td>{b.milisegundos}</td>
                                    <td ><button className="btn btn-danger" onClick={() => verHashPrevio(b.hashPrevio,b.hash,b.idBloque)}>Detalles</button></td>
                                    <td ><button className="btn btn-danger">Ver</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>


            </table>
        </div>
    );



}

export default BloqueComponent;