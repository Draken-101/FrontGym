import styled from "styled-components";
import Entrada from "../atoms/Entrada";
import List from "../atoms/List";

const D = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    flex-direction: column;
    flex-wrap: wrap;
`;

export default function ControllerShop(){
    return(
        <D>
            <Entrada text={"Buscar"} color={"rgb(197, 197, 197)"} wi={"75%"}/>
            <List/>
        </D>
    );
}