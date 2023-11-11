import styled from "styled-components";
import Text from "../atoms/Text";
import Entrada from "../atoms/Entrada";
import Boton from "../atoms/Button";


const D = styled.div`
    display: inline-block;
    text-align: center;
    align-items: center;
    background-color: aqua;

    width: 50%;
    height: 50vh;
`;

export default function FormLogin(){
    return(
        <D>
            <Text text={"Iniciar Seción"} size={"30px"} bold={"600"}/>
            <Entrada text={"Usuario"} />
            <Entrada text={"Correo"} />
            <Entrada text={"Contraseña"} />
            <Boton text={"Iniciar Seción"} wi={"150px"} color={"black"} bgColor={"white"}/>
        </D>
    );
}