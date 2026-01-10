import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />

            <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
                <Navbar />
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
