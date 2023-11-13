import styled from "styled-components";
import Text from "../atoms/Text";
import Entrada from "../atoms/Entrada";
import Boton from "../atoms/Button";


const D = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    padding:30px;
    justify-content:space-around;
    @media(min-width : 620px) {
        flex-direction: row;
    }
`;

export default function Form({titulo, inputs, nameButon}){
    return(
        <>
            <D className=" w-max relative">
                <div>
                    <Text text={titulo ? titulo : "Ingresa Titulo"} size={"1px"} bold={"600"}/>
                </div>
                
                {inputs.map((input, index) => (
                    <Entrada key={index} text={input} />
                ))}
                <Boton clasName=" top-10" text={nameButon} wi={150} color={"black"} bgColorHover={"rgb(98, 98, 98)"} bgColor={"white"}/>
            </D>
        </>
    );
}