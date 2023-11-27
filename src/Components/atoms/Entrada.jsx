import styled from "styled-components";

const E = styled.input`
    position: relative;
    outline: none;
    overflow: ${props => props.D ? "hidden" : ""};
    text-overflow: ${props => props.D ? "hidden" : ""};
    text-decoration: none;
    background-color: ${props => props.bgC ? props.bgC : "transparent"};
    padding: 0 10% 0 10%;
    margin: 10px;
    width: ${props => props.W ? props.W : "250px"};
    height: ${props => props.H ? props.H : "28px"};
    transition: 1s;
    color: ${props => props.C ? props.C : "rgb(110,110,110)"};
    border-bottom: 1px solid ${props => props.B ? props.B : "black"};
    border-left: 1px solid transparent;
    border-top: 0px solid transparent;
    border-right: 1px solid transparent;
    color: ${props => props.CF ? props.CF : "rgb(0, 0, 0)"};
    font-size: 20px;

    &::placeholder{
    overflow: ${props => props.D ? "" : "hidden"};
    text-overflow: ${props => props.D ? "" : "hidden"};
        color: ${props => props.C ? props.C : "rgb(110,110,110)"};
        font-size: 20px;
        font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    }

    &:focus{
        outline: none;
        text-decoration: none;
        border-radius: 1.5rem .5rem 1.5rem .5rem;
        border-left: 1px solid ${props => props.B ? props.B : "black"};
        border-right: 1px solid ${props => props.B ? props.B : "black"}; 
        border-top: 0px solid transparent;
        border-bottom: 1px solid ${props => props.B ? props.B : "black"};
    }
    @media(max-width : 620px){
        width: ${props => props.W ? props.W / 2 + "px" : "125px"};
        height: ${props => props.H ? props.H / 2 + "px" : "20px"};
            font-size: 10px;
        &::placeholder{
            font-size: 10px;
        }
    }
    @media(max-width : 320px){
            font-size: 5px;
        &::placeholder{
            font-size: 5px;
        }
    }

    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
`;
const TexTarea = styled.textarea`
    position: relative;
    outline: none;
    resize: none;
    overflow: ${props => props.D ? "hidden" : ""};
    text-overflow: ${props => props.D ? "hidden" : ""};
    text-decoration: none;
    background-color: ${props => props.bgC ? props.bgC : "transparent"};
    padding: 0 10% 0 10%;
    margin: 10px;
    width: ${props => props.W ? props.W : "250px"};
    height: ${props => props.H ? props.H : "28px"};
    transition: 1s;
    color: ${props => props.C ? props.C : "rgb(110,110,110)"};
    border-bottom: 1px solid ${props => props.B ? props.B : "black"};
    border-left: 1px solid transparent;
    border-top: 0px solid transparent;
    border-right: 1px solid transparent;
    color: ${props => props.CF ? props.CF : "rgb(0, 0, 0)"};
    font-size: 20px;

    &::placeholder{
        overflow: ${props => props.D ? "" : "hidden"};
        text-overflow: ${props => props.D ? "" : "hidden"};
        color: ${props => props.C ? props.C : "rgb(110,110,110)"};
        font-size: 20px;
        font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    }

    &:focus{
        outline: none;
        text-decoration: none;
        border-radius: 1.5rem .5rem 1.5rem .5rem;
        border-left: 1px solid ${props => props.B ? props.B : "black"};
        border-right: 1px solid ${props => props.B ? props.B : "black"}; 
        border-top: 0px solid transparent;
        border-bottom: 1px solid ${props => props.B ? props.B : "black"};
    }
    @media(max-width : 620px){
        width: ${props => props.W ? props.W / 2 + "px" : "125px"};
        height: ${props => props.H ? props.H / 2 + "px" : "20px"};
            font-size: 10px;
        &::placeholder{
            font-size: 10px;
        }
    }
    @media(max-width : 320px){
            font-size: 5px;
        &::placeholder{
            font-size: 5px;
        }
    }

    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
`;


const Select = styled.select`
    position: relative;
    outline: none;
    display: flex;
    text-align:center;
    overflow: ${props => props.D ? "hidden" : ""};
    text-overflow: ${props => props.D ? "hidden" : ""};
    text-decoration: none;
    background-color: ${props => props.bgC ? props.bgC : "transparent"};
    padding: 0;
    margin: 10px;
    width: ${props => props.W ? props.W : "250px"};
    height: ${props => props.H ? props.H : "28px"};
    transition: 1s;
    color: ${props => props.C ? props.C : "rgb(110,110,110)"};
    border-radius: 0px;
    border-bottom: 1px solid ${props => props.B ? props.B : "black"};
    border-left: 1px solid #4e0000;
    border-top: 1px solid #4e0000;
    border-right: 1px solid #4e0000;
    color: ${props => props.CF ? props.CF : "rgb(0, 0, 0)"};
    font-size: 20px;
    &::placeholder{
    overflow: ${props => props.D ? "" : "hidden"};
    text-overflow: ${props => props.D ? "" : "hidden"};
        color: ${props => props.C ? props.C : "rgb(110,110,110)"};
        font-size: 20px;
        font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    }
    &:focus{
        outline: none;
        text-decoration: none;
        border-radius: 1.5rem .5rem 1.5rem .5rem;
        border-left: 1px solid ${props => props.B ? props.B : "black"};
        border-right: 1px solid ${props => props.B ? props.B : "black"}; 
        border-top: 0px solid #4e0000;
        border-bottom: 1px solid ${props => props.B ? props.B : "black"};
    }
    & option{
        background: rgb(85, 0, 0);
        
    }
    
    @media(max-width : 620px){
        width: ${props => props.W ? props.W / 2 + "px" : "125px"};
        height: ${props => props.H ? props.H / 2 + "px" : "20px"};
            font-size: 10px;
    }
    @media(max-width : 320px){
            font-size: 5px;
    }
`;

export default function Entrada({ text, bgColor, color, wi, he, tipo, change, blur, bColor, colorFont, Des, id }) {
    return (
        <>
            {
                text === "Tiempo" ?

                    <Select
                        id={id}
                        D={Des}
                        CF={colorFont}
                        B={bColor}
                        onBlur={blur}
                        onChange={change}
                        W={wi}
                        H={he}
                        C={color}
                        bgC={bgColor}
                        type={tipo}
                    >
                        <option value={""}>{text}</option>
                        <option value={"Dia"}>Dia</option>
                        <option value={"Mes"}>Mes</option>
                        <option value={"Año"}>Año</option>
                    </Select>

                    :

                    Des ?
                        <TexTarea
                            D={Des}
                            CF={colorFont}
                            B={bColor}
                            onBlur={blur}
                            onChange={change}
                            W={wi}
                            H={he}
                            C={color}
                            bgC={bgColor}
                            type={tipo}
                            rows={10}
                            cols={50}
                            placeholder={text ? text : "Ingresa placeHolder"}
                            id={id}
                        />
                        :
                        <E
                            D={Des}
                            CF={colorFont}
                            B={bColor}
                            onBlur={blur}
                            onChange={change}
                            W={wi}
                            H={he}
                            C={color}
                            bgC={bgColor}
                            type={tipo}
                            placeholder={text ? text : "Ingresa placeHolder"}
                            id={id}
                        ></E>
            }

        </>
    );
}