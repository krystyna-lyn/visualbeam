import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { ClerkProvider } from "@clerk/nextjs"
import { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (

        <main className="relative">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pt-14 sm:px-14">
                    <div className="w-full pb-2">
                        {children}
                    </div>
                </section>
            </div>
            Footer
        </main>
    )
}
export default RootLayout