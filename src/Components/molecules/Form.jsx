import styled from "styled-components";
import Text from "../atoms/Text";
import Entrada from "../atoms/Entrada";
import Boton from "../atoms/Button";


const D = styled.div`
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 10px;
    flex-direction: column;
    justify-content:space-around;
    @media(max-width : 620px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: 40%;
        :first-child{
            width: 100%;
        }
    }
    :last-child{
        width: 50vw;
    }
`;

export default function Form({titulo, inputs, nameButon}){
    return(
        <>
            <D>
                <Text text={titulo ? titulo : "Ingresa Titulo"} size={"5vw"} bold={"600"}/>
                {inputs.map((input, index) => (
                    <Entrada key={index} text={input} />
                ))}
                <Boton clasName=" top-10" text={nameButon} wi={150} color={"black"} bgColorHover={"rgb(98, 98, 98)"} bgColor={"white"}/>
            </D>
        </>
    );
}