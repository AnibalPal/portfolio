import { createContext, useState } from "react";

type ContextActions = "all" | "open" | "title" | "desc";

export interface IProjectsState {
    infoModalOpen: boolean
    infoModalTitle: string | null
    infoModalDesc: string | null
}

interface IProjectsContext {
    modalState: IProjectsState
    modalReducer: Function
}

interface IProjectContextComponent {
    children: React.ReactNode
}

export const ProjectsContext = createContext<IProjectsContext>({
    modalState: {
        infoModalOpen: false,
        infoModalTitle: null,
        infoModalDesc: null
    },
    modalReducer: () => { }
});

const ProjectsContextComponent = ({ children }: IProjectContextComponent) => {

    const [modalState, setModalState] = useState<IProjectsState>({
        infoModalOpen: false,
        infoModalTitle: null,
        infoModalDesc: null
    });

    const modalStateReducer = (type: ContextActions, value: IProjectsState | boolean | string) => {
        switch (type) {
            case "all":
                setModalState(value as IProjectsState);
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
        <ProjectsContext.Provider
            value={{
                modalState: modalState,
                modalReducer: modalStateReducer
            }} >
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContextComponent;
