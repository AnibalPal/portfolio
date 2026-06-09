import ProjectsContextComponent from "./projects-context";
import Projects from "./projects";

const ProjectsBase = () => {
    return (
        <ProjectsContextComponent>
            <Projects />
        </ProjectsContextComponent>
    )
}

export default ProjectsBase;
