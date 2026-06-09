export type SelectOptions = "about" | "projects" | "experience";

export type StateOptions = "hovering" | "focused";

export interface Selection {
    about: {
        hovering: boolean,
        focused: boolean
    },
    projects: {
        hovering: boolean,
        focused: boolean
    },
    experience: {
        hovering: boolean,
        focused: boolean
    },
}
