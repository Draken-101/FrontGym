import styled from "styled-components";
import L from '../../assets/Images/Logo.png'
const I = styled.img`
    z-index: ${props => props.Z ? props.Z : "0"};
    position: ${props => props.P ? props.P : "relative"};
    width: ${props => props.WxH ? props.WxH : "80px"};
    height: ${props => props.WxH ? props.WxH : "80px"};
    transition-duration:1s;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,.5));

    &:hover{
        filter: ${props => props.F ? props.F : "drop-shadow(5px 5px 5px rgba(0,0,0,.5))"};
    }
`;

export default function Logo({wxh, filterHover, newImg, position, z}){
    return(
        <I F={filterHover} Z={z} P={position} WxH={wxh} src={newImg ? newImg : L}/>
    );
}