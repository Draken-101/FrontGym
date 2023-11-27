import styled from 'styled-components';
import HeaderDiv from '../atoms/HeaderDiv'
import Logo from '../atoms/Logo';
import '../../assets/Styles/HeaderBtn.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


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
    a {
        text-decoration: none;
    }
    @media(min-width: 550px) {
        width: 150px;
    }
`;

export default function HeaderHome() {
    const { contextValue, setContextValue } = useContext(AuthContext)
    return (
        <HeaderDiv>
            <Logo wxh={"40px"} />
            <Ul>
                {
                    contextValue !== "" ? <Link to={'/admin'}>Panel</Link> : <></>
                }
                <Link to={"/Shop"}>
                    <Li >
                        Tienda
                    </Li>
                </Link>
                <Link to={"/Login"}>
                    <Li className="Btn shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                        Iniciar Secion
                    </Li>
                </Link>
            </Ul>
        </HeaderDiv>
    );
}