import React, { useContext } from 'react'
import styles from '../../styles/Projects.module.scss'
import { useRouter } from 'next/router'
import { InView } from "react-intersection-observer"
import { Transition } from '@headlessui/react'
import SlideSectionTitle from '../SlideSectionTitle'
import { ScrollingContext } from '../../pages'
import { GetServerSidePropsContext } from 'next'

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
        "title": "Juanitor",
        "desc": "Création d'une application de suivi des marchés de la cryptomonnaie, ainsi que de gestion automatique des investissements. Réalisé en binôme, avec un backend Java, une API express.JS et une application web React.JS",
        "customID": "Juanitor"
    },
    {
        "title": "Marianne Alliot",
        "desc": "Création d'un site vitrine pour une artiste de la Rochelle, créé avec gatsbyJS ainsi que le CMS Wordpress pour la gestion des images",
        "customID": "MA"
    },
    {
        "title": "IMDB Symfony",
        "desc": "Création d'une copie allégée du site IMDB, utilisant une base de donnée MariaDB et l'ORM Doctrine.",
        "customID": "Symfony"
    }
];

const Projects: React.FC<{projects: []}> = ({projects}) => {
    const scrolling = useContext(ScrollingContext)
    return (
        <section className={`${!scrolling && "snap-start"} w-screen h-screen relative bg-gradient-to-r from-blue-700 to-indigo-700`} id="projects">
            <SlideSectionTitle>Projects</SlideSectionTitle>
            <div className="w-full px-8 flex flex-col justify-center box-border absolute top-1/2 transform -translate-y-1/2">{projects.map((p, i) => <Project project={p} key={`project${i}`} />)}</div>
        </section>
    )
}



const Project: React.FC<ProjectProps> = ({ project }) => {
    const router = useRouter();
    return (
        <div className="group bg-gray-800 my-6 w-1/2 hover:mx-3 text-white rounded-lg p-4 odd:self-end cursor-pointer hover:shadow-lg transition-[width] transition-[margin] transition-all duration-500 h-[120px] text-ellipsis " onClick={() => router.push(`project/${project.customID}`)}>
            <h1>{project.title}</h1>
            <p className="text-ellipsis overflow-hidden white-space: nowrap;">{project.desc}</p>
        </div>
    )
}

export default Projects
