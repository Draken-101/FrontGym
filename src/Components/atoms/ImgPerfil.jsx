import styled from "styled-components";

const D = styled.img`
    position: relative;
    display: flex;
    width: 80%;
    height: auto;
    border-radius: 50px;
    border: 2px solid white;
    background-color: gray;
`;

export default function ImgPerfil({Imagen}){
    return(
        <D src={Imagen}/>
    );
}