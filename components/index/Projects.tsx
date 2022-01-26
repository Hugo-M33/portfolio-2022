import React from 'react'
import styles from '../../styles/Projects.module.css'

interface ProjectProps {
    project: ProjectData;
}

interface ProjectData { 
    title: String,
    desc: String
}

const projects: ProjectData[] = [
    {
        title: "Juanitor",
        desc: "Création d'une application de suivi des marchés de la cryptomonnaie, ainsi que de gestion automatique des investissements. Réalisé en binôme, avec un backend Java, une API express.JS et une application web React.JS"
    }, 
    {
        title: "Marianne Alliot",
        desc: "Création d'un site vitrine pour une artiste de la Rochelle, créé avec gatsbyJS ainsi que le CMS Wordpress pour la gestion des images"
    }, 
    {
        title: "IMDB Symfony",
        desc: "Création d'une copie allégée du site IMDB, utilisant une base de donnée MariaDB et l'ORM Doctrine."
    }
];

const Projects: React.FC = () => {
    return (
        <section className={styles.projectsSection} id="projects">
            <h1 className="sectionTitle">Projets</h1>
            {projects.map((p,i) => <Project project={p} key={`project${i}`}/>)}
        </section>
    )
}

const Project: React.FC<ProjectProps> = ({project}) => {
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
        </div>
    )
}

export default Projects
