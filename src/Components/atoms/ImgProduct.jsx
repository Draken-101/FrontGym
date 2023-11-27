import styled from "styled-components";
import Logo from "../../assets/Images/Logo.png";
import { useEffect, useState } from "react";
import Text from "./Text";

const Img = styled.button`
    cursor: pointer;
    position: relative;
    display:flex;
    text-align:center;
    align-items:center;
    overflow:hidden;
    background-color: rgba(255, 0, 0, 0.427);
    width: 100%;
    padding: 5%;
    border: none;
    border-radius:5px;
    transition:.5s;
    filter:drop-shadow(5px 5px 5px rgba(0,0,0,1));
    &:hover span{
        transform: translateX(0%);
    }
    img{
        transition:.5s;
        filter: blur(0px);
    }
    &:hover img{
        filter: blur(2px) brightness(63%);
        -webkit-filter: blur(2px) brightness(63%);
        -moz-filter: blur(2px) brightness(63%);
    }
`;

const T = styled.span`
    position: absolute;
    width: 100%;
    font-size: 15px;
    font-weight:bold;
    color: #ffffff;
    transform: translateX(100%);
    transition: transform .5s ease-in-out;
    filter:drop-shadow(5px 5px 5px rgba(0,0,0,1));
`;

const Label = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    top: 11px;
    left:-18px;
    background-color:rgb(95, 0, 0);
    width: 75px;
    height: 15px;
    transform:rotate(-45deg);
`;

export default function ImgProduct({etiqueta}){
    const [label, setLabel] = useState(false);
    useEffect(() => {
        if (etiqueta === "Rebaja") {
            setLabel(true);
        } else if(etiqueta === "Promocion"){
            setLabel(true);
        } else {
            setLabel(false);
        }
    }, [etiqueta])
    return(
        <Img>
            {
                label && <Label>
                            <Text size={"10px"} text={etiqueta} color={"rgb(252, 252, 252)"}/>
                        </Label>
            }
            <img src={Logo} style={{
                position:"relative",
                width:"100%",
                height:"100%"
            }}/>
            <T >Comprar</T>
        </Img>
    );
};