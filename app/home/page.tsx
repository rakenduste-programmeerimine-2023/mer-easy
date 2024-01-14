"use client"
import Menu from "@/components/Menu";
import '@/app/styles/layout.scss';
import Dashboard from "@/components/Dashboard";

const Home = () => {
    return (
        <div className="content">
            <Menu />
            <Dashboard />
        </div>
    );
}

export default Home;
