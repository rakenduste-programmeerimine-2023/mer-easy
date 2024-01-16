import { useState, useEffect } from 'react';
import { Routes } from '@/app/routes/routes';
import { useRouter } from 'next/navigation';
import '@/app/styles/menu.scss';
import '@/app/styles/layout.scss';

export default function Menu() {
    const router = useRouter();
    const [activeRoute, setActiveRoute] = useState<Routes | null>(null);

    const changePage = async (route: Routes) => {
        await router.push(route);
        setActiveRoute(route);
    };

    useEffect(() => {
        console.log('Active route changed:', activeRoute);
    }, [activeRoute]);

    return (
        <div className="nav-panel">
            <div className="flex-column-container">
                {Object.values(Routes).map((route) => (
                    <button
                        key={route}
                        className={`nav-button ${activeRoute === route ? 'active-button' : ''}`}
                        onClick={() => changePage(route)}
                    >
                        {route}
                    </button>
                ))}
            </div>
        </div>
    );
}