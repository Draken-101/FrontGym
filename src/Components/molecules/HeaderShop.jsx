import '../../assets/Styles/HeaderShop.css';
import HeaderDiv from '../atoms/HeaderDiv'
import Logo from '../atoms/Logo';
import { BiCart } from "react-icons/bi";

export default function HeaderShop() {
    return (
        <HeaderDiv>
            <Logo/>
            <ul className="C">
                <li>
                    Coaching
                </li>
                <li className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                    <BiCart/>
                    <span>Ver Carrito</span>
                </li>
            </ul>
        </HeaderDiv>


    );
}