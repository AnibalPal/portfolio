import { createContext, useState } from "react";

type ContextActions = "all" | "open" | "title" | "desc";

export interface IProyectsState {
    infoModalOpen: boolean
    infoModalTitle: string | null
    infoModalDesc: string | null
}

interface IProyectsContext {
    modalState: IProyectsState
    modalReducer: Function
}

interface IProyectContextComponent {
    children: React.ReactNode
}

export const ProyectsContext = createContext<IProyectsContext>({
    modalState: {
        infoModalOpen: false,
        infoModalTitle: null,
        infoModalDesc: null
    },
    modalReducer: () => { }
});

const ProyectsContextComponent = ({ children }: IProyectContextComponent) => {

    const [modalState, setModalState] = useState<IProyectsState>({
        infoModalOpen: false,
        infoModalTitle: null,
        infoModalDesc: null
    });

    const modalStateReducer = (type: ContextActions, value: IProyectsState | boolean | string) => {
        switch (type) {
            case "all":
                setModalState(value as IProyectsState);
                break;
            case "open":
                setModalState((state) => {
                    return { ...state, infoModalOpen: value as boolean };
                })
                break;
            case "title":
                setModalState((state) => {
                    return { ...state, infoModalTitle: value as string };
                })
                break;
            case "desc":
                setModalState((state) => {
                    return { ...state, infoModalDesc: value as string };
                })
                break;
            default:
                console.log("NON EXISTENT ACTION");
                return;
        }
    }

    return (
        <ProyectsContext.Provider
            value={{
                modalState: modalState,
                modalReducer: modalStateReducer
            }} >
            {children}
        </ProyectsContext.Provider>
    )
}

export default ProyectsContextComponent;
