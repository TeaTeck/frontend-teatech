import { Navbar, ProfileNav } from "@/components/navbar"

export default function Principal() {

    return (
        <>
            <Navbar />
            <main className=" flex md:ml-12">
                <ProfileNav />
                as
            </main>
        </>
    )
}