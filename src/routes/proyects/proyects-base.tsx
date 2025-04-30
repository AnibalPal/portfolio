import ProyectsContextComponent from "./proyects-context";
import Proyects from "./proyects";

const ProyectsBase = () => {
    return (
        <ProyectsContextComponent>
            <Proyects />
        </ProyectsContextComponent>
    )
}

export default ProyectsBase;
