import styled from "styled-components";
import HeaderCarShop from "../molecules/HeaderCarShop";
import Boton from "../atoms/Button";
import ContentCarShop from "../molecules/ContentCarShop";

const D = styled.div`
    position: relative;
    justify-content: center;
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    button{
        margin-top:15px;
    }
`;

export default function CarS(){
    return(
        <D>
            <div style={{
                position:"relative",
                width: "100%",
                zIndex: "10",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }} className="">
                <HeaderCarShop />
            </div>
            <ContentCarShop/>
            <Boton text={"Realizar comprar"} wi={"300"} />
        </D>
    );
}