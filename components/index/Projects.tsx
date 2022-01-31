import React from 'react'
import styles from '../../styles/Projects.module.scss'
import { useRouter } from 'next/router'

interface ProjectProps {
    project: ProjectData;
}

interface ProjectData { 
    title: String,
    desc: String,
    customID: String,
}

const projects: ProjectData[] = [
    {
        title: "Juanitor",
        desc: "Création d'une application de suivi des marchés de la cryptomonnaie, ainsi que de gestion automatique des investissements. Réalisé en binôme, avec un backend Java, une API express.JS et une application web React.JS",
        customID: "Juanitor"
    }, 
    {
        title: "Marianne Alliot",
        desc: "Création d'un site vitrine pour une artiste de la Rochelle, créé avec gatsbyJS ainsi que le CMS Wordpress pour la gestion des images",
        customID: "MA"
    }, 
    {
        title: "IMDB Symfony",
        desc: "Création d'une copie allégée du site IMDB, utilisant une base de donnée MariaDB et l'ORM Doctrine.",
        customID: "Symfony"
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
    const router = useRouter();
    return (
        <div className={styles.projectBanner} id={styles[`project${project.customID}`]} onClick={() => router.push(`project/${project.customID}`)}>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
        </div>
    )
}

export default Projects
