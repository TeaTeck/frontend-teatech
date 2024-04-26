import { Navbar } from "@/components/navbar"
import { ProfileNav } from "@/components/profilenav"


export default function Avaliacao() {

    return (
        <>
            <Navbar />
            <main className=" flex md:ml-12 h-screen">
                <ProfileNav/>
            </main>
        </>
    )
}