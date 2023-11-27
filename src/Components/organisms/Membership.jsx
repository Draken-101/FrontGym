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

const Table = styled.div`
    position: relative;
    display: flex;
    padding: 2vw;
    width: 94%;
    flex-direction: column;
    height: 50%;
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
    width: 100%;
`;

const Th = styled.th`
    text-align: start;
    width: 30%;
    font-size: 2vw;
    color: white;
`;

const Td = styled.td`
    border-top: 1px solid white;
    width: 27.5%;
    font-size: 1.5vw;
    color: white;
`;
export default function Membership(){
    return(
        <D>
            <HeadAdmin nombre={"Vender Membresia"}/>
            <Table>

            </Table>
        </D>
    );
}