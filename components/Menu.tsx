import { Routes } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import MenuContent from "@/components/MenuContent";
import '@/app/styles/menu.scss';
import '@/app/styles/layout.scss';
import {useEffect, useState} from "react";

export default function Menu() {
    const router = useRouter();

    const changePage = async (route: Routes) => {
        await router.push(route);
    };

    const isHomeRoute = () => {
        const currentPath = window.location.pathname;
        const homePath = `/${Routes.HOME.toLowerCase()}`;
        return currentPath === homePath;
    };
    const [showMenuContent, setShowMenuContent] = useState(isHomeRoute());

    useEffect(() => {
        if (isHomeRoute()) {
            setShowMenuContent(true);
        } else {
            setShowMenuContent(false);
        }
    }, [showMenuContent]);

    return (
        <div className="content">
            <div className="nav-panel">
                <div className="flex-column-container">
                    <button className="nav-button" onClick={() => changePage(Routes.HOME)}>Home</button>
                    <button className="nav-button" onClick={() => changePage(Routes.MERIT_ITEMS)}>Merit Items</button>
                    <button className="nav-button" onClick={() => console.log('Page 3 clicked')}>Page 3</button>
                    <button className="nav-button" onClick={() => console.log('Page 4 clicked')}>Page 4</button>
                    <button className="nav-button" onClick={() => console.log('Page 5 clicked')}>Page 5</button>
                    <button className="nav-button" onClick={() => console.log('Page 6 clicked')}>Page 6</button>
                </div>
            </div>

            {showMenuContent ? <MenuContent /> : null}
        </div>
    );
}
