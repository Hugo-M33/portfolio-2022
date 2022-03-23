import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router";
const inputStyling = "bg-gray-700 border-0 my-2 text-white rounded-lg w-1/4"

const ProjectEditor = ({ data }: { data: { title: string, customID: string, desc: string } }) => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fData = new FormData(e.target);
        const res = await fetch(`http://localhost:3000/api/project/${data.customID}`,
            {
                body: fData,
                method: "post"
            });
        const newData = await res.json();
        router.push(`/dashboard/edit/project/${newData.customID}`)
        

        


    }
    return (
        <>
            <header className="h-32 bg-blue-600 fixed top-0 left-0 right-0 z-3 items-center flex justify-end p-4">
                <button form="project-data-form" className="p-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg h-fit" type="submit">Save</button>
            </header>
            <main className="bg-blue-600 w-screen h-screen p-8 mt-32">

                <form onSubmit={handleSubmit} id="project-data-form" className="w-full flex align-center">
                    <div className="flex flex-col align-center grow">
                        <input name="customID" className={inputStyling} type="text" defaultValue={data.customID}></input>
                        <input name="title" className={inputStyling} type="text" defaultValue={data.title}></input>
                    </div>
                    <textarea name="description" className={`grow ${inputStyling}`} type="text" defaultValue={data.desc}></textarea>
                </form>
            </main>
        </>
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

export default ProjectEditor