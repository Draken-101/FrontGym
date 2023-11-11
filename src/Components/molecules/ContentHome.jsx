import Boton from "../atoms/Button";
import Text from "../atoms/Text";

export default function ContentHome() {
    return (
        <>
            <Text text={"¡Comienza una mejor forma de ti!"} size={"30px"} color={"white"} bold={"600"} />
            <Text text={"¡Ven y únete a nosotros!"} size={"30px"} color={"white"} bold={"600"} />
            <div className="Content top-10 relative">
                <Boton bgColor={"gray"} text={"Conocer mas"} wi={"200px"} he={"40px"} bgColorHover={"rgb(80, 80, 80)"}/>
            </div>
        </>

    );
}