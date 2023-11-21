import styled from "styled-components";
import ImgPerfil from "../atoms/ImgPerfil";
import I from '../../assets/Images/PerfilAdmin.png'
import Text from "../atoms/Text";

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
    return(
        <D>
            <ImgPerfil Imagen={I}/>
            <Text text={"Perfil Admin"} size={"3vw"} color={"white"}/>
        </D>
    );
}