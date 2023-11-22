import { Link } from "react-router-dom";
import Form from "../molecules/Form";
import LogoButon from "../molecules/LogoButtton";
import styled from "styled-components";

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

export default function FormLogin(){
    const inp = [
        {
            name: "Usuario",
            type: "text"
        },
        {
            name: "Contraseña",
            type: "password"
        }]
    return(
        <D>
            <Form titulo={"Iniciar Secion"} nameButon={"Ingresar"} inputs={inp}/>
            
            <Link to={"/"}><LogoButon /></Link>
        </D>
        
    );
}