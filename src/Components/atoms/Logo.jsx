import styled from "styled-components";
import L from '../../assets/Images/Logo.png'
const I = styled.img`
    width: ${props => props.WxH ? props.WxH : "80px"};
    height: ${props => props.WxH ? props.WxH : "80px"};
`;

export default function Logo({wxh}){
    return(
        <I WxH={wxh} src={L}/>
    );
}