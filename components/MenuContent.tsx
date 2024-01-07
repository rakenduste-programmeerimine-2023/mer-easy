import { Routes } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import '@/app/styles/menu.scss';

export default function MenuContent() {
    const router = useRouter();

    const changePage = async (route: Routes) => {
        await router.push(route);
    };

    return (
        <div className="menu-content">
            <div className="picture-container">
                {/* First Picture and Button */}
                <img src="meritaktiva.png" alt="First Image" className="medium-sized-image" />
                <button className="nav-button" onClick={() => changePage(Routes.MERIT_ITEMS)}>
                    Update Merit and view table
                </button>
            </div>

            <div className="picture-container">
                {/* Second Picture and Button */}
                <img src="MRPeasy.png" alt="Second Image" className="medium-sized-image" />
                <button className="nav-button" onClick={() => console.log('MRP pressed')}>
                    Update MRPeasy and view table
                </button>
            </div>
        </div>
    );
}
