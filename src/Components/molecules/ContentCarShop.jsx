import styled from "styled-components";
import Logo from "../atoms/Logo";
import '../../assets/Styles/ContentCarShop.css'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import RequestsContext from "../../context/RequestContext";
import { AuthContext } from "../../context/AuthContext";

const Count = styled.input`
    width: 50%;
    height: 2.5vh;
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
    position: relative;
    max-height:75vh;
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
    border:0;
    border-top: 1px solid black;
    border-style: dashed;
    &:first-child{
        border-top:0;
    }

`;

const Th = styled.div`
    display: flex;
    width: 30%;
    height:20px;
    font-size: 2vw;
    align-items: center;
    text-align: left;
    font-weight: bolder;
    padding: 5px 0 5px 5px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,.5));
`;

const Td = styled.div`
    align-items: center;
    display: flex;
    width: 30%;
    height: 100%;
    padding: 5px;
    font-size: 3vw;
`;

const D = styled.div`
    border-radius: 5px;
    background-color: transparent;
    box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.7);
`;
const Total = styled.div`
    align-items: center;
    display: flex;
    position: relative;
    width: 100%;
    border:0;
    height: fit-content;
    border-bottom: 1px solid black;
    border-style: dashed;

`;

export default function ContentCarShop() {
    const pre = 100
    const [precio, setPrecio] = useState(pre)
    const calcularPrecio = (p) => {
        setPrecio(pre * p.target.value);
    }

    const info = useContext(RequestsContext)
    const { contextValue, setContextValue } = useContext(AuthContext)
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(info.server_uri + "/cart/", { headers: { Authorization: `Bearer ${contextValue.token}` } }).then((res) => {
            setProduct(res.data.content)
            console.log(product)
        }).catch((e) => {
            console.error(e)
            alert(e.response.data.message)
        })
    }, [])

    return (
        <div style={{
            backgroundColor: "gray"
        }}>
            <Table>
                <Tr className="">
                    <Th>Producto</Th>
                    <Th>Nombre</Th>
                    <Th>Cantidad</Th>
                    <Th>Precio</Th>
                </Tr>

                {
                    product.map((item, index) => {
                        return (
                            <Tr key={index}>
                                <Td>
                                    <D>
                                        <Logo wxh={"15vw"} newImg={info.server_uri + "/" + item.img} />
                                    </D>
                                </Td>
                                <Td>
                                    {item.name}
                                </Td>
                                <Td style={{
                                    padding: "0 0 0 10px"
                                }}>
                                    <Count type="number" min={1} onChange={calcularPrecio} />
                                </Td>
                                <Td>
                                    {item.price}
                                </Td>
                            </Tr>
                        )
                    })
                }


            </Table>
            <Total>
                <Th></Th>
                <Th></Th>
                <Th>Total</Th>
                <Th>${precio}</Th>
            </Total>
        </div>
    );
}