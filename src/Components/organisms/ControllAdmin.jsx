import styled from "styled-components";
import CardPerfil from "../molecules/CardPerfil";
import { BiCube } from "react-icons/bi";
import { LiaCcDinersClub } from "react-icons/lia";
import { GiMuscularTorso, GiBiceps } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
const D = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1%;
    align-items: end;
    width: 20vw;
    height: 96vh;
    background-color: red;
    border-radius: 15px 0 0 15px;
    margin: 2vh 0 0 4vw;
`;

const Button = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
    width: 100%;
    gap: 5px;
    height: 5vh;
    background-color: red;
    transition: .5s;
    border-radius: 15px 0 0 15px;
    font-weight: bold;
    text-decoration: none;
    border: 1px solid transparent;

    &:hover{
        background-color: rgb(205,0,0);
    }

    &:focus{
        background-color: white;
    }
`;

export default function ControllAdmin() {
    return (
        <D>
            <CardPerfil />

            <Link to={"/Users"} className=" w-4/5">
                <Button><GiBiceps />Miembros</Button>
            </Link>

            <Link to={"/Employees"} className=" w-4/5">
                <Button><GiMuscularTorso />Empleados</Button>
            </Link>

            <Link to={"/Products"} className=" w-4/5">
                <Button><BiCube />Productos</Button>
            </Link>
            <Link to={"/PayMembership"} className=" w-4/5">
                <Button><LiaCcDinersClub />Pagar Membrecia</Button>
            </Link>
            <Link to={"/"} className=" w-4/5">
                <Button><CiLogout /> Salir</Button>
            </Link>
        </D>
    );
}