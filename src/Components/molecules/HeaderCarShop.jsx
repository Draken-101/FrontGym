import styled from "styled-components";
import HeaderDiv from "../atoms/HeaderDiv";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import { Link } from "react-router-dom";

const Ul = styled.ul`
    display: flex;
    width: 60vw;
    align-items: center;
    justify-content: center;
    gap: 10%;
`;

const Li = styled.li`
    position: relative;
    display: flex;
    color: white;
    width: 10vw;
    cursor: pointer;
    align-items: center;
    transition: .5s;
    justify-content: center;
    font-size: 2vw;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    border-radius: 5px 15px 5px 15px;
    background-color: rgb(124, 124, 124);
    &:hover{
        background-color: rgb(117, 117, 117);
        border-radius: 15px 5px 15px 5px;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }
    @media(min-width: 550px) {
        width: 15vw;
    }
`;

export default function HeaderCarShop() {
    return (
        <HeaderDiv>
            <Logo wxh={"35px"} />
            <Ul>
                <Text text={"Carrito de compras"} color={"white"} size={"2vw"} />
                <Link to={"/Shop"}>
                    <Li>
                        Salir
                    </Li>
                </Link>
            </Ul>
        </HeaderDiv>
    );
}