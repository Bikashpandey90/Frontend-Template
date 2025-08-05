import Bottombar from "@/components/BottomBar/bottombar"
import LeftSidebar from "@/components/LeftSideBar/leftsidebar"
import Topbar from "@/components/TopBar/topbar"
import { Outlet } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <div className="w-full md:flex">
                {/* <Topbar /> */}
                <LeftSidebar  />

                <section className="flex flex-1  h-full">
                    <Outlet />
                </section>

                {/* <Bottombar /> */}
            </div>
        </>
    )
}
export default HomePage
