import styled from "styled-components";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import HeadAdmin from "../molecules/HeadAdmin";

const D = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 65vw;
    gap: 5%;
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
    height: 50%;
    gap: 2%;
    background-color: #4e0000;
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
    height: 6%;
    display: flex;
`;

const Th = styled.th`
    position: relative;
    text-align: start;
    width: 33%;
    font-size: 2vw;
    color: white;
`;

const Td = styled.td`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    font-size: 1.5vw;
    color: white;
`;

const E = styled.input`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    padding-left: 5%;
    padding-right: 5%;
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
    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
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
const Select = styled.select`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    padding-left: 5%;
    padding-right: 5%;
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

export default function Membership() {
    return (
        <D>
            <HeadAdmin nombre={"Vender Membresia"} />
            <Table>
                <Tr>
                    <Td style={{
                        width: "100%"
                    }}>
                        <E 
                        type="number"
                        placeholder="Nombre/ID" />
                    </Td>
                </Tr>
                <Tr>
                    <Td style={{
                        width: "50%"
                    }}>
                        <E 
                        type="number"
                        style={{
                            width: "70%"
                        }}
                        placeholder="Cantidad" />
                    </Td>
                    <Td style={{
                        width: "20%"
                    }}>
                        <Select >
                            <option>Tiempo</option>
                            <option>Dia</option>
                            <option>Mes</option>
                            <option>Año</option>
                        </Select>
                    </Td>
                    <Td style={{
                        width: "50%"
                    }}>
                        <E 
                        type="number"
                        style={{
                            width: "70%"
                        }}
                        placeholder="Precio" />
                    </Td>
                </Tr>
            </Table>
        </D>
    );
}