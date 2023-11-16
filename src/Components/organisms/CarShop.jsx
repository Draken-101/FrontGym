import styled from "styled-components";
import HeaderCarShop from "../molecules/HeaderCarShop";
import Logo from "../atoms/Logo";
import { useState } from "react";
import Entrada from "../atoms/Entrada";
import Boton from "../atoms/Button";

const D = styled.div`
    position: relative;
    justify-content: center;
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    button{
        margin-top:15px;
    }
`;

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
    width:100%;
    height:75vh;
    flex-direction:column;
    background-color:rgb(174, 174, 174);
    overflow-y:scroll;
    overflow-x:hidden;
    &::-webkit-scrollbar{
    width: 0px;
}
`;

const Tr = styled.div`
    align-items: center;
    display: flex;
    position:relative;
    width: 100vw;
    height: 50px;
`;

const Th = styled.div`
    width:30%;
    height: 50px;
    font-size:10px;
    text-align:left;
    padding: 0 0 0 5px;
    border-bottom:1px solid black;
    border-style:dashed;
`;

const Td = styled.div`
    width: 30%;
    font-size:10px;
`;

export default function CarS(){
    const pre = 100
    const [precio, setPrecio] = useState(pre)
    const calcularPrecio = (p) => {
        setPrecio(pre*p.target.value);
    }
    return(
        <D>
            <div style={{
                position:"relative",
                width: "100%",
                zIndex: "10",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }} className="">
                <HeaderCarShop />
            </div>
            <Table>
                <Tr>
                    <Th>Producto</Th>
                    <Th>Nombre</Th>
                    <Th>Precio</Th>
                    <Th>Cantidad</Th>
                </Tr>

                <Tr>
                    <Td>
                        <Logo wxh={"50px"}/>
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
                        <Count type="number" min={1} on onChange={calcularPrecio}/>
                    </Td>
                </Tr>
                
            </Table>
            <Boton text={"Realizar comprar"} wi={"300"} />
        </D>
    );
}