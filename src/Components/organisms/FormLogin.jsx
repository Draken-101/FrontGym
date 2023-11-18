import { Link } from "react-router-dom";
import Form from "../molecules/Form";
import LogoButon from "../molecules/LogoButtton";
import styled from "styled-components";

const D = styled.div`
    position: relative;
    display: flex;
    z-index: 10;
    text-align: center;
    align-items: center;
    justify-content:space-around;
    padding:10%;
    @media(max-width : 620px) {
        flex-direction: column-reverse;
        height: 70vh;
    }
    @media(max-width : 985px) {
        padding:10%;
    }
    @media(max-width : 755px) {
        padding:0%;
    }
`;

export default function FormLogin(){
    const inp = ["Usuario","Contrasena"]
    return(
        <D>
            <Form titulo={"Iniciar Secion"} nameButon={"Ingresar"} inputs={inp}/>
            
            <Link to={"/"}><LogoButon /></Link>
        </D>
        
    );
}