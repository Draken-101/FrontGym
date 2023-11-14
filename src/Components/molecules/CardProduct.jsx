import styled from "styled-components";
import ImgProduct from "../atoms/imgProduct";
import Text from "../atoms/Text";
import '../../assets/Styles/Stars.css'

const D = styled.div`
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    width: 100px;
    padding: 10px;
    flex-direction: column;
    justify-content:space-around;
`;

const Price = styled.div`
    width: 100%;
`;

export default function CardProtuct() {
    return (
        <D>
            <ImgProduct  etiqueta={"Rebaja"} />
            <Text size={".4rem"} color={"rgb(13, 212, 199)"} bold={"600"} text={"Nombre Empresa"} />
            <Text size={".6rem"} bold={"600"} text={"Nombre Producto"} />
            <div className="valoracion">

                <button>
                    <i className="fas fa-star"></i>
                </button>

                <button>
                    <i className="fas fa-star"></i>
                </button>

                <button>
                    <i className="fas fa-star"></i>
                </button>

                <button>
                    <i className="fas fa-star"></i>
                </button>

                <button>
                    <i className="fas fa-star"></i>
                </button>

            </div>
            <Price className=" flex items-center justify-between">
                <Text text={"$1500" } size={".5rem"} color={"rgb(72, 72, 72)"} tachado={true} bold={"600"}/>
                <Text text={"$1000"} size={".8rem"} bold={"600"}/>
            </Price>
        </D>
    );
}