import Form from "../molecules/Form";
import LogoButon from "../molecules/LogoButtton";
import styled from "styled-components";

const D = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    background-color: #5d5d5d;
    justify-content:space-around;
`;

export default function FormLogin(){
    const inp = ["Usuario","Contrasena"]
    return(
        <D>
            <Form titulo={"Iniciar Secion"} nameButon={"Ingresar"} inputs={inp}/>
            <LogoButon subirImg={"y"}/>
        </D>
        
    );
}