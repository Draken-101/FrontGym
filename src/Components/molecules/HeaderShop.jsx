import '../../assets/Styles/HeaderShop.css';
import HeaderDiv from '../atoms/HeaderDiv'
import Logo from '../atoms/Logo';
import { BiCart } from "react-icons/bi";

export default function HeaderShop() {
    return (
        <HeaderDiv>
            <Logo wxh={"50px"}/>
            <ul className="C">
                <li>
                    Coaching
                </li>
                <li>
                    Perfil
                </li>
                <li>
                    Home
                </li>
                <li>
                    <BiCart/>
                    <span>Ver Carrito</span>
                </li>
            </ul>
        </HeaderDiv>


    );
}