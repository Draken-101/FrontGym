import Form from "../molecules/Form";
import LogoButon from "../molecules/LogoButtton";
import styled from "styled-components";

const D = styled.div`
    position: relative;
    display: flex;
    z-index: 10;
    padding: 10px;
    text-align: center;
    align-items: center;
    justify-content:space-around;
    height: 100vh;
    @media(max-width : 620px) {
        flex-direction: column-reverse;
        height: 50vh;
    }
`;

export default function FormRegisterU(){
    const inp = ["Nombre","Apellido","Correo","Edad","Peso","Contraseña","Confirmar Contraseña"]
    return(
        <D>
            <Form titulo={"Registrar Usuario"} nameButon={"Registrar"} inputs={inp}/>
            <LogoButon subirImg={"y"} />
        </D>
        
    );
}