import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";


const Dashboard: React.FC<{data: {projects: [{customID: String, title: String}]}}> = ({data}) => {
    const router = useRouter();
    return (
        <>
            <main className="bg-red-600 w-screen h-screen p-8 grid grid-cols-2 grid-rows-2 place-items-center gap-8">
                <div className="h-full w-full flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-white">Projects</h2>
                    {data.projects.map(p => {
                        return (
                            <div className="w-3/4 flex items-center justify-center bg-gray-200 rounded-lg my-2 py-2 cursor-pointer hover:shadow-lg" onClick={() => router.push(`/dashboard/edit/project/${p.customID}`)} key={`${p.customID}-link`}>
                                <h3>{p.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const res = await fetch(`http://localhost:3000/api/projects`)
    const projects = await res.json();
    let data = {projects}
    if (res.status === 200) {
        return {
            props: {
                data,
            },
        }
  
    } else {
        console.log
        return {
            props: {
                data,
            },
        }
    }
  }

export default Dashboard;