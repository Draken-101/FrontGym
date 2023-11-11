import styled from "styled-components";
import Logo from "../atoms/Logo";
import { useEffect, useState } from "react";
import Text from "../atoms/Text";

const D = styled.button`
    overflow: hidden;
    display: flex;
    text-align: center;
    align-items: center;
    width: 20vh;
    height: 20vh;
    justify-content:space-around;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px,rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px,rgba(34, 34, 34, 0.4) 5px 5px, rgba(34, 34, 34, 0.3) 10px 10px, rgba(34, 34, 34, 0.2) 15px 15px, rgba(34, 34, 34, 0.1) 20px 20px, rgba(34, 34, 34, 0.05) 25px 25px;
    background: linear-gradient(to right, rgb(255, 255, 255),rgb(98, 98, 98));
`;

const T = styled.span`
    position: absolute;
    overflow:hidden;
    font-size: 30px;
    font-weight:bold;
    top:220px;
    right: 0;
`;

export default function LogoButon({oC, subirImg}){
    const [t, setT] = useState([]);

    useEffect(() => {
        if (subirImg === "y") {
            setT(["Subir Imagen"]);
        } else {
            setT([]);
        }
    }, [subirImg]);
    return(
        <D onClick={oC}>
            <Logo wxh={"80%"} filterHover={"drop-shadow(5px 5px 5px rgba(0,0,0,1))"}/>
            {t.map((te, index) => (
                <T key={index}>{te}</T>
            ))}
        </D>
        
    );
}