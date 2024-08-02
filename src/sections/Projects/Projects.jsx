import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import e_notes from "../../assets/e-notes.jpeg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={e_notes}
          link={
            "https://github.com/VictorEliasG/FreeCodeCamp_ResponsiveWebDesign_Projects"
          }
          h3="E-Notes"
          p="Notes Manager"
        />
      </div>
    </section>
  );
}

export default Projects;
