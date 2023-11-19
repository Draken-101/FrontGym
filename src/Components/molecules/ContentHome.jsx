import { Link } from "react-router-dom";
import Boton from "../atoms/Button";
import Text from "../atoms/Text";

export default function ContentHome() {
    return (
        <>
            <Text text={"¡Comienza una mejor forma de ti!"} size={"3.5vw"} color={"white"} bold={"600"} />
            <Text text={"¡Ven y únete a nosotros!"} size={"3vw"} color={"white"} bold={"600"} />
            <div className="Content top-2 relative">
                <Link to={"/Register"}>
                    <Boton bgColor={"gray"} text={"Unirse"} wi={200} he={40} bgColorHover={"rgb(80, 80, 80)"}/>
                </Link>
            </div>
        </>

    );
}