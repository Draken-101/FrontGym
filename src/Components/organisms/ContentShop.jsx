import styled from "styled-components";
import CardProtuct from "../molecules/CardProduct";
import HeaderShop from "../molecules/HeaderShop";
import ControllerShop from "../molecules/ControllerShop";


const D = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export default function ContentShop() {
    return (
        <D>
            <div style={{
                width: "100%",
                zIndex: "1",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }} className="">
                <HeaderShop/>
            </div>
            <div className=" bg-red-600" style={{
                display: "flex",
                position:"relative",
                flexWrap: "wrap",
                width: "30%",
                borderRight: "2px solid rgb(141, 2, 2)",
                height:"100vh",
                boxShadow: "0px 0px 66px 6px rgba(0,0,0,0.89) inset,#5e0000 0px 30px 60px -12px inset, rgba(0, 0, 0, 1) 0px 18px 36px -18px inset",
                justifyContent: "center",
            }}>
                <ControllerShop/>
            </div>
            <div style={{
                overflow:"scroll",
                display: "flex",
                position:"relative",
                flexWrap: "wrap",
                width: "70%",
                height:"100vh",
                justifyContent: "center",
                gap: "12px",
            }}>
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
            </div>

        </D>
    );
}