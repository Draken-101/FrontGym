import HeaderDiv from "../atoms/HeaderDiv";
import '../../assets/Styles/HeaderCarShop.css'
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";

export default function HeaderCarShop(){
    return(
        <HeaderDiv>
            <Logo wxh={"35px"}/>
            <Text text={"Carrito de compras"} color={"white"}/>
            <ul>
                
                <li className="C">
                    Salir
                </li>
            </ul>
        </HeaderDiv>
    );
}