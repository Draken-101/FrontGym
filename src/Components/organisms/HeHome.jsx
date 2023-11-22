import styled from "styled-components";
import background from '../../assets/Images/bg-Image.jpg'
import HeaderHome from "../molecules/HeaderHome";
import ContentHome from "../molecules/ContentHome";


const D = styled.div`
    width: 100%;
    position: relative;
    z-index: 10;
`;

const I = styled.img`
    position: absolute;
    width: 100%;
    height: 100vh;
`;

export default function HeHome() {
    return (
        <>
            <D style={{
                boxShadow: "0px 5px rgba(225,0,0,0.4), 0px 10px rgba(225,0,0,0.3),0px 15px rgba(225, 0, 0,0.2), 0px 20px rgba(225, 0, 0, 0.1), 0px 25px rgba(225, 0, 0, 0.05)"
            }}>
                <HeaderHome/>
            </D>
            <div className=" relative z-0" style={{
                position: "relative",
                zIndex: "0"
            }}>
                <I src={background} />
            </div>
            <D className="Content relative z-10 top-3 m-5" style={{
                top: "3%",
                margin: "5%"
            }}>
                <ContentHome/>
            </D>
        </>
    );
}