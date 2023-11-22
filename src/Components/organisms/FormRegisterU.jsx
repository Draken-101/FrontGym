import Form from "../molecules/Form";
import LogoButon from "../molecules/LogoButtton";
import styled from "styled-components";

const D = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    z-index: 10;
    padding: 10px;
    text-align: center;
    align-items: center;
    justify-content:space-around;
    @media(max-width : 620px) {
        flex-direction: column-reverse;
        padding: 10% 0 0 0;
    }
`;

export default function FormRegisterU(){  
    const inp = [
        {
            name: "Nombre",
            type: "text"
        },
        {
            name: "Apellido",
            type: "text"
        },
        {
            name: "Edad",
            type: "number"
        },
        {
            name: "Peso",
            type: "number"
        },
        {
            name: "Contraseña",
            type: "password"
        },
        {
            name: "Confirmar Contraseña",
            type: "password"
        }
    ]
    return(
        <D>
            <Form titulo={"Registrar Usuario"} nameButon={"Registrar"} inputs={inp}/>
            <LogoButon subirImg={"y"} />
        </D>
        
    );
}