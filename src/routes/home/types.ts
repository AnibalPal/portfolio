export type SelectOptions = "about" | "proyects" | "experience";

export type StateOptions = "hovering" | "focused";

export interface Selection {
    about: {
        hovering: boolean,
        focused: boolean
    },
    proyects: {
        hovering: boolean,
        focused: boolean
    },
    experience: {
        hovering: boolean,
        focused: boolean
    },
}
