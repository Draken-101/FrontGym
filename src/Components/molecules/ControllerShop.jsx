import styled from "styled-components";
import Entrada from "../atoms/Entrada";
import List from "../atoms/List";

const D = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export default function ControllerShop(){
    return(
        <D>
            <Entrada text={"Buscar"} color={"rgb(197, 197, 197)"} wi={"80%"}/>
            <List/>
        </D>
    );
}