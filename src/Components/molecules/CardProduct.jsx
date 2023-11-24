import styled from "styled-components";
import ImgProduct from "../atoms/imgProduct";
import Text from "../atoms/Text";
import '../../assets/Styles/Stars.css'

const D = styled.div`
    position: relative;
    display: flex;
    text-align: center;
    border: none;
    align-items: center;
    width: 20vw;
    height: fit-content;
    padding: 2vw;
    gap: .5vh;
    flex-direction: column;
    justify-content:center;
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
    width: 100%;
`;

export default function CardProtuct() {
    return (
        <D>
            <ImgProduct  etiqueta={"Rebaja"} />
            <Text size={"1.5vw"} color={"rgb(13, 212, 199)"} bold={"600"} text={"Nombre Empresa"} />
            <Text size={"2.5vw"} bold={"600"} text={"Nombre Producto"} />
            {/* <div className="valoracion">

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

            </div> */}
            <Price className=" flex items-center justify-between">
                <Text text={"$1500" } size={"2vw"} color={"rgb(72, 72, 72)"} tachado={true} bold={"600"}/>
                <Text text={"$1000"} size={"2.5vw"} bold={"600"}/>
            </Price>
        </D>
    );
}