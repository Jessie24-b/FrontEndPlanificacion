import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import  '../styles/config.css';
import {Configuracion} from "../types"
import ListConfiguration from "../components/listConfigComponent";
import { alertMessage } from "../alerts/alerts";
import {SUCCESS_MESSAGE_REGISTER,ICON_SUCCESS} from "../alerts/VariablesAlerts";

interface ConfiguracionState {
    inputValues: Configuracion 
}

interface ListConfig {
    id: string
    key: string
    value: string 
}

export default function ConfiguracionComponent() {


      const [inputValues, setInputValues] = useState<ConfiguracionState["inputValues"]>({
        key: '',
        value: ''
    })

    
    
    const [configs, setConfigs] = useState<Array<ListConfig>>([])

    useEffect(() =>{
        axios.get('https://localhost:44317/api/Config/')
        .then(response => {
           
            setConfigs(response.data);
        })  
       
    }, [])

    useEffect(() => {
         axios.get('https://localhost:44317/api/Config/')
        .then(response => {
           
            setConfigs(response.data);
        })  
      });
      

      const  handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        console.log(inputValues);
        const response=  axios.post('https://localhost:44317/api/Config/',inputValues)
        .then(response => response.data)  

        alertMessage(SUCCESS_MESSAGE_REGISTER,ICON_SUCCESS);

        refreshForm();

        return response

                 
        }

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

            
                setInputValues({
                ...inputValues,
                [e.target.name]: e.target.value
            })   
                  
        }

        const refreshForm = () => {
            setInputValues({
                ...inputValues,
                key: '',
                value: ''
        
            })
        
        }

        


    return(
        <><Navbar />'
        <div className='container'>
           
           
            <div className='row'>
              <div className='row'>
                   <label htmlFor="">Registro de configuraciones</label>
              </div>
              <div className='row'>
                    <div className='col-5'>
                        <input 
                        name='key'
                        onChange={handleChange}
                        className='input-Config' 
                        placeholder='Ingrese el nombre de la configuración' type="text" />
                    </div>
                    <div className='col-5'>
                        <input 
                        name='value'
                        onChange={handleChange}
                        className='input-Config'
                         placeholder='Ingrese el valor de la configuración'
                          type="text" />
                    </div>
                    <div className='col-2'>
                        <button onClick={handleSubmit} className='btn-Config'> Registrar</button>
                    </div>
              </div>
            </div>
            <div className='row'>
                <ListConfiguration configs = {configs}/>
              
            </div>

          

        </div>
        </>

    );
}

   

  
                        