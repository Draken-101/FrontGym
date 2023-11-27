import { Link } from "react-router-dom";
import Form from "../molecules/Form";
import LogoButon from "../molecules/LogoButtton";
import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import RequestsContext from "../../context/RequestContext";
import { AuthContext } from "../../context/AuthContext";

const D = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    width: 100vw;
    height: fit-content;
    z-index: 10;
    text-align: center;
    align-items: center;
    padding:5%;
    @media(max-width : 620px) {
        flex-direction: column-reverse;
        height: 70vh;
    }
    @media(max-width : 985px) {
        padding:5%;
    }
    @media(max-width : 755px) {
        padding:0%;
    }
`;

export default function FormLogin() {
    const inp = ["Usuario", "Contraseña"]
    const info = useContext(RequestsContext)
    const { contextValue, setContextValue } = useContext(AuthContext)
    const [bodyData, setBodyData] = useState({
        email: null,
        password: null
    });
    const handleInputChange = () => {
        const { id, value } = event.target;
        setBodyData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(info.server_uri + "/user/login", bodyData).then((res) => {
            alert("Usuario creado con éxito.")
            setContextValue(res.data.content.token)
        }).catch((e) => {
            console.error(e)
            alert(e.response.data.message)
        })
    };
    return (
        <D>
            <Form onSubmit={handleSubmit} onChange={handleInputChange} titulo={"Iniciar Sesion"} nameButon={"Ingresar"} inputs={inp} />
            <Link to={"/"}><LogoButon /></Link>
        </D>

    );
}