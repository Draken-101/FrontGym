import styled from "styled-components";
import CardProtuct from "../molecules/CardProduct";
import HeaderShop from "../molecules/HeaderShop";


const D = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export default function ContentShop() {
    return (
        <D>
            <HeaderShop/>
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
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
                <CardProtuct />
            </div>

        </D>
    );
}