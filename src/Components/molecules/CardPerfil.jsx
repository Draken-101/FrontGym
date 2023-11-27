import styled from "styled-components";
import ImgPerfil from "../atoms/ImgPerfil";
import I from '../../assets/Images/PerfilAdmin.png'
import Text from "../atoms/Text";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import RequestsContext from "../../context/RequestContext";

const D = styled.div`
    position: relative;
    display: flex;
    margin-top: 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: fit-content;
    border-radius: 15px;
`;

export default function CardPerfil(){
    const { contextValue, setContextValue } = useContext(AuthContext)
    const info = useContext(RequestsContext);
    return(
        <D>
            <ImgPerfil Imagen={contextValue ? info.server_uri + "/" + contextValue.img : I}/>
            <Text text={"Perfil Admin"} size={"3vw"} color={"white"}/>
        </D>
    );
}