import styled from "styled-components";
import HeadAdmin from "../molecules/HeadAdmin";
import Entrada from "../atoms/Entrada";
import Text from "../atoms/Text";
import { useState } from "react";
import AddEmployees from "../molecules/AddEmployees";
import EditEmployees from "../molecules/EditEmployees";

const D = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 65vw;
    margin: 2vh 4vw 2vh 0;
    padding: 0 5% 0 5%;
    border-radius: 0 15px 15px 0;
    left: 24vw;
    height: 96vh;
    background-color: white;
`;

const Table = styled.table`
    position: relative;
    display: flex;
    padding: 2vw;
    width: 100%;
    flex-direction: column;
    height: 85%;
    background-color: red;
    border-radius: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        width: 0px;
        height: 0px;
    }
`;

const Tr = styled.tr`
    position: relative;
    width: 100%;
    display: flex;
    height: 5%;
    align-items: center;
`;

const Th = styled.th`
    display: flex;
    position: relative;
    text-align: start;
    align-items: center;
    width: 45%;
    font-size: 15px;
    color: white;
`;

const E = styled.input`
    position: relative;
    width: 90%;
    height: 100%;
    background-color: white;
    padding-left: 5%;
    border-radius: 10px;
    border: 0px;
    font-size: 20px;

    &::placeholder{
        color: rgb(110,110,110);
        font-size: 20px;
        font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    }

    &:focus{
        outline: none;
        text-decoration: none;
    }
    @media(max-width : 620px){
        font-size: 10px;
        &::placeholder{
            font-size: 10px;
        }
    }
    @media(max-width : 320px){
        font-size: 5px;
        &::placeholder{
            font-size: 5px;
        }
    }
`;

const Td = styled.td`
    display: flex;
    border-top: 1px solid white;
    width: 45%;
    height: 100%;
    font-size: 20px;
    color: white;
    align-items: center;
    &:last-child{
        justify-content: center;
    }
    @media(max-width : 620px){
        font-size: 8px;
    }
    @media(max-width : 320px){
        font-size: 5px;
    }

`;

const B = styled.button`
    cursor:pointer;
    position:relative;
    width: 80%;
    height: 60%;
    background:white;
    font-size:18px;
    border-top-right-radius:10px;
    border-bottom-left-radius:10px;
    border: 0px;
    transition:all 1s;
    &:after,&:before{
        content:" ";
        width:10px;
        height:10px;
        position:absolute;
        border :0px solid #fff;
        transition:all 1s;
        }
    &:after{
        top:-1px;
        left:-1px;
        border-top:5px solid rgb(94, 0, 0);
        border-left:5px solid rgb(94, 0, 0);
    }
    &:before{
        bottom:-1px;
        right:-1px;
        border-bottom:5px solid rgb(94, 0, 0);
        border-right:5px solid rgb(94, 0, 0);
    }
    &:hover{
        border-top-right-radius:0px;
    border-bottom-left-radius:0px;
        // background:rgba(77, 0, 0, 0.5);
        // color:white;
        &:before,&:after{
        
        width:100%;
        height:100%;
        // border-color:white;
        }
    }
    @media(max-width : 620px){
        font-size: 10px;
    }
    @media(max-width : 320px){
        font-size: 5px;
    }
`;

export default function AdminEmployees() {
    const [mostrarAdd, setMostrarAdd] = useState('none');
    const [turnAdd, setTurnAdd] = useState(true);

    
    const [mostrarEdit, setMostrarEdit] = useState('none');
    const [turnEdit, setTurnEdit] = useState(true);

    const mAdd = ()=>{
        if(turnAdd){
            setTurnAdd(false);
            setMostrarAdd('block');
        } else {
            setTurnAdd(true);
            setMostrarAdd('none');
        } 
    }

    const mEdit = ()=>{
        if(turnEdit){
            setTurnEdit(false);
            setMostrarEdit('block');
        } else {
            setTurnEdit(true);
            setMostrarEdit('none');
        } 
    }

    return ( 
        <D>
            <AddEmployees d={mostrarAdd} oc={mAdd}/>
            <EditEmployees d={mostrarEdit} oc={mEdit}/>
            <HeadAdmin nombre={"Empleados"}/>
            <Table>
                <Tr style={{
                    height: "8%",
                    alignItems: "center"
                }}>
                    <Th style={{
                        width:"100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <B style={{
                            width:"50%"
                        }}
                        onClick={mAdd}
                        >Agregar empleado</B>
                    </Th>
                </Tr>
                <Tr>
                    <E placeholder="Buscar empleado" />
                </Tr>
                <Tr>
                    <Th>Nombre</Th>
                    <Th style={{
                        justifyContent: "center"
                    }}>
                        ID
                    </Th>
                    <Th>

                    </Th>
                </Tr>
                <Tr>
                    <Td>
                        Leonardo Favio Najera Morales
                    </Td>
                    <Td style={{
                        justifyContent: "center"
                    }}>
                        1
                    </Td>
                    <Td>
                        <B onClick={mEdit}>Editar</B>
                    </Td>
                </Tr>
            </Table>

        </D>
    );
}