import styled from "styled-components";
import Form from "./Form";
import Boton from "../atoms/Button";
import LogoButon from "./LogoButtton";
import RequestsContext from "../../context/RequestContext";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const D = styled.div`
    position: fixed;
    display: ${props => props.D ? props.D : "block"};
    width: 100vw;
    height: 100vh;
    z-index: 11;
    left: 0vw;
    top: 0vh;
    background-color: #000000e4;
`;
const Div = styled.div`
    position: relative;
    display:flex;
    width:100%;
    flex-direction: column;
    gap: 5%;
    flex-wrap: wrap;
    height:100%;
    align-items: center;
    justify-content:center;
`;

export default function AddProducts({ d, oc }) {
    const info = useContext(RequestsContext);
    const { contextValue, setContextValue } = useContext(AuthContext)
    const [bodyData, setBodyData] = useState({})
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
        console.log(bodyData)
        const form_to_send = new FormData()
        form_to_send.append("name", bodyData.name)
        form_to_send.append("price", bodyData.price)
        form_to_send.append("amount", bodyData.amount)
        form_to_send.append("description", bodyData.description)
        form_to_send.append("image", bodyData.image)
        axios.post(info.server_uri + "/product/", form_to_send,{ headers: { Authorization: `Bearer ${contextValue.token}` } }).then((res) => {
            alert("Producto creado.")
        }).catch((e) => {
            console.error(e)
            alert(e.response.data.message)
        })
    };
    const inp = ["Nombre", "Precio", "Cantidad", "Descripcion"]
    return (
        <D D={d}>
            <Div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    width: "100%"
                }}>
                    <Form onChange={handleInputChange} onSubmit={handleSubmit} wi={"40%"} c={"white"} inputs={inp} titulo={"Agregar Producto"} nameButon={"Agregar"} />
                    <LogoButon subirImg={"y"} onChangeImage={handleImageChange} />
                </div>
                <Boton text={"Cancelar"} color={"black"} bgColor={"white"} onCl={oc} />
            </Div>
        </D>
    );
}