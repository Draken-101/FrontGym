import { Link } from "react-router-dom";
import Boton from "../atoms/Button";
import Text from "../atoms/Text";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function ContentHome() {
    const { contextValue, setContextValue } = useContext(AuthContext)
    return (
        <>
            <Text text={"¡Comienza una mejor forma de ti!"} size={"3.5vw"} color={"white"} bold={"600"} />
            <Text text={"¡Ven y únete a nosotros!"} size={"3vw"} color={"white"} bold={"600"} />
            <div className="Content top-2 relative">
                {
                    contextValue !== "" ?
                        <></>
                        
                        :

                        <Link to={"/Register"}>
                            <Boton bgColor={"gray"} text={"Unirse"} wi={200} he={40} bgColorHover={"rgb(80, 80, 80)"} />
                        </Link>
                }
            </div>
        </>

    );
}