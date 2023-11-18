
import Logo from '../atoms/Logo';
import { BiCart } from "react-icons/bi";
import styled from 'styled-components';
import HeaderDiv from '../atoms/HeaderDiv';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Li = styled.li`
    padding: 2px;
    position: relative;
    display: flex;
    width: 70px;
    color: white;
    cursor: pointer;
    align-items: center;
    transition: .5s;
    justify-content: center;
    font-size: 2vw;
    border-radius: 5px 15px 5px 15px;
    &:hover{
        background-color: rgb(116, 0, 0);
        border-radius: 15px 5px 15px 5px;
    }
    &:last-child{
        width: 100px;
        border-bottom: 1px solid transparent;
        border-top: 1px solid transparent;
        background-color: rgb(124, 124, 124);
    }
    &:last-child:hover{
        background-color: rgb(117, 117, 117);
        border-radius: 15px 5px 15px 5px;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }
    @media(min-width: 550px) {
        width: 150px;
        &:last-child{
            width: 250px;
            background-color: rgb(124, 124, 124);
        }
    }
`;

export default function HeaderShop() {
    return (
        <HeaderDiv>
            <Logo wxh={"40px"}/>
            <Ul>
                <Li>
                    Coaching
                </Li>
                <Li>
                    Perfil
                </Li>
                
                <Li>
                    <Link to={"/"}>Home</Link>
                </Li>
                <Li>
                    <BiCart style={{
                        position:"absolute",
                        left:"5px",

                    }}/>
                    <Link to={"/CarShop"}>Ver Carrito</Link>
                    
                </Li>
            </Ul>
        </HeaderDiv>


    );
}