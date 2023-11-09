import styled from "styled-components";

const T = styled.p`
    color: ${props => props.C ? props.C : "black"};
    font-size: ${props => props.S ? props.S : "20px"};
    font-weight: ${props => props.B ? props.B : "500"};
`;

export default function Text({text, size, bold, color}){
    return(
        <T C={color} S={size} B={bold}>{text ? text : "Ingresar Texto"}</T>
    );
}