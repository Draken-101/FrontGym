import styled from "styled-components";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";

const D = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 72vw;
    padding: 5%;
    border-radius: 0 15px 15px 0;
    left: 24vw;
    margin-top: 2vh;
    height: 96vh;
    background-color: white;
`;

const Table = styled.table`
    position: relative;
    display: flex;
    padding: 2vw;
    width: 100%;
    flex-direction: column;
    height: 80%;
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

export default function AdminUsers(){
    return(
        <D>
            <Logo/>
            <Text text={"Extravagym"} size={"5vw"}/>
            <Table>
                <Tr>
                    <Th><Text text={"Miembros de Gym"} size={"25px"} color={"white"}/></Th>
                </Tr>
                <Tr>
                    <Th>Nombre</Th>
                    <Th>ID</Th>
                    <Th>Fecha de inscripcion</Th>
                    <Th>Fecha de expiracion</Th>
                </Tr>
                <Tr>
                    <Td>Leonardo Favio Najera Morales</Td>
                    <Td>1</Td>
                    <Td>01/11/2023</Td>
                    <Td>01/12/2023</Td>
                </Tr>
            </Table>
        </D>
    );
}