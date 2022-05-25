import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import  '../styles/config.css';
import IConfiguracion from "../types/user.type"

export default class Configuracion extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            key: "",
            value: ""
        };
      }

      

        handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        console.log(this.state);
        const response=  axios.post('https://localhost:44317/api/Config/',this.state)
        .then(response => response.data)  
        return response
                 
        }

         handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

            
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            })   
                  
        }

render(){

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
                        onChange={this.handleChange}
                        className='input-Config' 
                        placeholder='Ingrese el nombre de la configuración' type="text" />
                    </div>
                    <div className='col-5'>
                        <input 
                        name='value'
                        onChange={this.handleChange}
                        className='input-Config'
                         placeholder='Ingrese el valor de la configuración'
                          type="text" />
                    </div>
                    <div className='col-2'>
                        <button onClick={this.handleSubmit} className='btn-Config'> Registrar</button>
                    </div>
              </div>
            </div>
            <div className='row'>
              
            </div>

          

        </div>
        <Footer /></>

    );
}

   
}
  
                        