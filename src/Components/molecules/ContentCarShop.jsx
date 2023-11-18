import styled from "styled-components";
import Logo from "../atoms/Logo";
import { useState } from "react";

const Count = styled.input`
    width: 30px;
    height:10px;
    padding:0 0 0 5px;
    font-size: 5px;
    font-weight:bold;
    border:0;
    text-decoration:none;
    text-align: center;
    border-radius: 5px 15px 5px 15px;
    outline: none;
    border-bottom:1px solid black;
`;

const Table = styled.div`
    display:flex;
    width:90vw;
    height:75vh;
    align-items: center;
    flex-direction:column;
    overflow-y:scroll;
    overflow-x:hidden;
    border: 1px solid black;
    margin: 5px 0 0 0;
    border-style: dashed;
    border-radius: 10px 10px 0 0;

    &::-webkit-scrollbar{
        width: 0px;
    }
`;

const Tr = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    width: 100%;
    height: fit-content;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid black;
    border-style: dashed;
`;

const Th = styled.div`
    display: flex;
    width: 30%;
    height:20px;
    font-size: 10px;
    align-items: center;
    text-align: left;
    padding: 0 0 0 5px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,.5));
`;

const Td = styled.div`
    align-items: center;
    display: flex;
    width: 30%;
    height: 100%;
    padding: 5px;
    font-size: 10px;
`;

const D = styled.div`
    border-radius: 5px;
    background-color: transparent;
    box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.7);
`;

export default function ContentCarShop(){
    const pre = 100
    const [precio, setPrecio] = useState(pre)
    const calcularPrecio = (p) => {
        setPrecio(pre*p.target.value);
    }
    return(
        <Table>
            <Tr>
                <Th>Producto</Th>
                <Th>Nombre</Th>
                <Th>Precio</Th>
                <Th>Cantidad</Th>
            </Tr>
            <Tr>
                <Td>
                    <D>
                        <Logo wxh={"50px"} newImg={""}/>
                    </D>
                </Td>
                <Td>
                    C4-600mg
                </Td>
                <Td>
                    ${precio}
                </Td>
                <Td style={{
                    padding:"0 0 0 10px"
                }}>
                    <Count type="number" min={1} onChange={calcularPrecio}/>
                </Td>
            </Tr>
        </Table>
    );
}