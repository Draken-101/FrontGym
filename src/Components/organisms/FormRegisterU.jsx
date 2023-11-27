import Form from "../molecules/Form";
import LogoButon from "../molecules/LogoButtton";
import styled from "styled-components";

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

export default function FormRegisterU(){  
    const inp = ["Nombre", "Apellido","Edad","Peso","Contraseña","Confirmar contraseña"]
    return(
        <D>
            <Form titulo={"Registrar Usuario"} nameButon={"Registrar"} inputs={inp}/>
            <LogoButon subirImg={"y"} />
        </D>
        
    );
}