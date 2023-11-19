
import Logo from '../atoms/Logo';
import { BiCart } from "react-icons/bi";
import styled from 'styled-components';
import HeaderDiv from '../atoms/HeaderDiv';
import { Link } from 'react-router-dom';


const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5%;
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
    
    @media(min-width: 550px) {
        width: 150px;
    }
`;

export default function HeaderShop() {
    return (
        <HeaderDiv>
            <Logo wxh={"40px"} />
            <Ul>
                <Link to={"/"}>
                    <Li>
                        Perfil
                    </Li>
                </Link>

                <Link to={"/"}>
                    <Li>Home</Li>
                </Link>
                <Link to={"/CarShop"}>
                    <Li className='Btn'>
                        <BiCart style={{
                            position: "absolute",
                            left: "5px",

                        }} />
                        Ver Carrito
                    </Li>
                </Link>
            </Ul>
        </HeaderDiv>


    );
}