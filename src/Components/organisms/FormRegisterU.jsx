import { useContext, useState } from "react";
import Form from "../molecules/Form";
import LogoButon from "../molecules/LogoButtton";
import styled from "styled-components";
import RequestsContext from "../../context/RequestContext";
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";

const D = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 70vh;
    z-index: 10;
    padding: 10px;
    text-align: center;
    align-items: center;
    @media(max-width : 620px) {
        flex-direction: column-reverse;
        padding: 10% 0 0 0;
    }
`;

export default function FormRegisterU() {
    const info = useContext(RequestsContext);
    const { contextValue, setContextValue } = useContext(AuthContext)

    const [bodyData, setBodyData] = useState({
        image: null,
        name: "",
        lastname: "",
        age: "",
        weight: "",
        password: "",
        repassword: "",
        role: 'client',
    });
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBodyData((prevData) => ({
                ...prevData,
                image: file,
            }));
        }
    };
    const handleInputChange = () => {
        const { id, value } = event.target;
        setBodyData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form_to_send = new FormData()
        form_to_send.append("name", bodyData.name)
        form_to_send.append("age", bodyData.age)
        form_to_send.append("weight", bodyData.weight)
        form_to_send.append("lastname", bodyData.lastname)
        form_to_send.append("image", bodyData.image)
        form_to_send.append("password", bodyData.password)
        form_to_send.append("email", bodyData.email)
        axios.post(info.server_uri + "/user/register", form_to_send).then((res) => {
            alert("Usuario creado con éxito.")
            setContextValue(res.data.content)
        }).catch((e) => {
            console.error(e)
            alert(e.response.data.message)
        })
    };
    const inp = ["Nombre", "Apellido", "Usuario", "Edad", "Peso", "Contraseña", "Confirmar contraseña"]
    return (
        <D>
            <Form onSubmit={handleSubmit} titulo={"Registrar Usuario"} nameButon={"Registrar"} inputs={inp} onChange={handleInputChange} />
            <LogoButon subirImg={"y"} onChangeImage={handleImageChange} />
        </D>

    );
}