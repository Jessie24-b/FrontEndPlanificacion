import { useState } from "react";
import User from "../types/user.type";
import { Link } from "react-router-dom"
import registerUser from "../service/usuarioService"
import { FaBeer } from 'react-icons/fa';



interface FormRegisterState {
    inputValues: User
}

function FormRegister() {

    const [inputValues, setInputValues] = useState<FormRegisterState["inputValues"]>({
        user: '',
        nombre: '',
        apellido: '',
        correo: '',
        fechaNacimiento: '',
        contrasena: ''
    })

    const [validated, setValidated] = useState(false);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        registerUser(inputValues);
        ///  console.log(inputValues)

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
    }



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    return (
       
        <form className='form' onSubmit={handleSubmit}>
            <div className="container">


                <div className="row">

                    <div className="col-1">
                        <label className="label" htmlFor="username">Username</label>
                    </div>

                    <div className="col-5">
                        <input className='form-control' onChange={handleChange} type="text" id="username" name="user" required />
                        <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                        <div className="valid-feedback">* Correcto * </div>

                    </div>


                    <div className="col-1">
                        <label className="label" htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="col-5">
                        <input className='form-control' onChange={handleChange} type="text" id="name" name="nombre" required />
                        <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                        <div className="valid-feedback">* Correcto * </div>
                    </div>
                </div>




                <div className="row">
                    <div className="col-1">
                        <label htmlFor="apellido">Apellido</label>
                    </div>
                    <div className="col-5">
                        <input className='form-control' onChange={handleChange} type="text" id="lastName" name="apellido" placeholder="Apellido" required />
                        <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                        <div className="valid-feedback">* Correcto * </div>
                    </div>

                    <div className="col-1">
                        <label htmlFor="email">Correo</label>
                    </div>
                    <div className="col-5">
                        <input className='form-control' onChange={handleChange} type="email" id="email" name="correo" placeholder="exameple@gmail.com" required />
                        <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                        <div className="valid-feedback">* Correcto * </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-1">
                        <label htmlFor="fechaNacimiento">Fecha nacimiento</label>
                    </div>
                    <div className="col-5">
                        <input className='form-control' onChange={handleChange} type="date" id="birthday" name="fechaNacimiento" required />
                        <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                        <div className="valid-feedback">* Correcto * </div>
                    </div>

                    <div className="col-1">
                        <label htmlFor="contrasenia">Contraseña</label>
                    </div>
                    <div className="col-5">
                        <input className='form-control' onChange={handleChange} type="password" id="password" name="contrasena" required />
                        <div className="invalid-feedback" id="errorCode">*Campo requerido*</div>
                        <div className="valid-feedback">* Correcto * </div>
                    </div>

                </div>

                
                        <button className='btn btn-primary' type="submit">Registrar</button>
                    
                  
                        <Link className=" btn btn-secondary Link" to="/">Cancelar </Link>
                    
                

            </div>
        </form>

    );

}

export default FormRegister



