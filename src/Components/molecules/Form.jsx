import styled from "styled-components";
import Text from "../atoms/Text";
import Entrada from "../atoms/Entrada";
import Boton from "../atoms/Button";
import { useState } from "react";


const D = styled.form`
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    width: 50%;
    height: fit-content;
    gap: 5px;
    padding: 10px;
    flex-direction: column;
    justify-content:space-around;
    @media(max-width : 620px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
`;

const Div = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
`;

export default function Form({ titulo, inputs, nameButon }) {
    const [error, setError] = useState('');


    return (
        <>
            <D action="submit">
                <Div>
                    <Text text={titulo ? titulo : "Ingresa Titulo"} size={"5vw"} bold={"600"} />
                </Div>

                {inputs.map((input, index) => (
                    <Entrada text={input.name} tipo={input.type}/>
                ))}
                <Div>
                    <Boton clasName=" top-10" text={nameButon} wi={150} color={"black"} bgColor={"white"} />
                </Div>
            </D>
        </>
    );
}