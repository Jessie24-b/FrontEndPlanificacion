import { useState } from "react"
import { User } from '../types'
import GetUsers from '../service/loginService'
import { Link } from "react-router-dom"

interface LoginState {
    inputValues: User
}



export default function Login() {

    localStorage.setItem("user", '');

    const [inputValues, setInputValues] = useState<LoginState["inputValues"]>({
        user: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        GetUsers(inputValues.user, inputValues.password);

        e.currentTarget.reset();
        refreshForm();

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
            user: '',
            password: ''

        })

    }

    return (
        <div className="login-box">

            <h1>Inicio de sesión</h1>
            <form onSubmit={handleSubmit}>
                <label >Nombre de usuario</label>
                <input type="text" onChange={handleChange} name="user" placeholder="Ingrese su nombre" />

                <label >Contraseña</label>
                <input type="password" onChange={handleChange} name="password" placeholder="Ingrese su contraseña" />
                <input type="submit" value="Ingresar" />
                <a href="#">Olvidó su contraseña?</a><br />
                <Link to="/Register">No tienes una cuenta aún?</Link>
            </form>
        </div>
    )
}