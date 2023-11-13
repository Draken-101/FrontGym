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
    padding:20%;
        height: 80vh;
    @media(max-width : 620px) {
        flex-direction: column-reverse;
    }
    @media(max-width : 985px) {
        padding:10%;
    }
    @media(max-width : 755px) {
        padding:0%;
    }
`;

export default function FormRegisterU(){
    const inp = ["Nombre","Apellido","Correo","Edad","Peso","","Contrasena","Confirmar Contrasena"]
    return(
        <D>
            <Form titulo={"Registrar Usuario"} nameButon={"Registrar"} inputs={inp}/>
            <LogoButon />
        </D>
        
    );
}