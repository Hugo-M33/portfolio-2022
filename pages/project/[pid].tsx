import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { ReactElement, useContext } from "react";
import BackButton from "../../components/BackButton";
import Layout from "../../components/Layout";
import { NextPageWithLayout, ProjectsContext } from "../_app";



const ProjectPage = ({ data }: { data: { name: string } }) => {
    return (
        <main className="w-screen h-screen bg-red-600 place-items-center grid">
            <h1 className="text-3xl font-bold text-white">{data.name}</h1>
            <BackButton additionalClasses="" />
        </main>
    )
}

ProjectPage.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const pid = context.query.pid
    const res = await fetch(`http://localhost:3000/api/project/${pid}`)
    let data = {}
    if (res.status === 200) {
        data = await res.json();
        return {
            props: {
                data,
            },
        }

    } else {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            },
            props: {
                data
            }
        }
    }
}



export default ProjectPage