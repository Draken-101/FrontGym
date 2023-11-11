import styled from "styled-components";
import Text from "../atoms/Text";
import Entrada from "../atoms/Entrada";
import Boton from "../atoms/Button";


const D = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    background-color: aqua;
    flex-direction: column;
    justify-content:space-around;
    width: 30vh;
    padding: 1vh;
`;

export default function Form({titulo, inputs, nameButon}){
    return(
        <D>
            <Text text={titulo ? titulo : "Ingresa Titulo"} size={"30px"} bold={"600"}/>
            {inputs.map((input, index) => (
                <Entrada key={index} text={input} />
            ))}
            <Boton clasName=" top-10" text={nameButon} wi={150} color={"black"} bgColor={"white"}/>
        </D>
    );
}