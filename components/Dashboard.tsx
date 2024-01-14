import {Routes} from "@/app/routes/routes";
import {useRouter} from "next/navigation";
import '@/app/styles/menu.scss';
import {useEffect} from "react";

export default function Dashboard() {
    const router = useRouter();

    const changePage = async (route: Routes) => {
        await router.push(route);
    };

    return (
        <div className="dashboard-content">
            <div className="picture-container">
                <img src="meritaktiva.png" alt="First Image" className="medium-sized-image" />
                <button className="nav-button" onClick={() => {changePage(Routes.MERIT_ITEMS);}}>
                    Update Merit and view table
                </button>
            </div>

            <div className="picture-container">
                <img src="MRPeasy.png" alt="Second Image" className="medium-sized-image" />
                <button className="nav-button" onClick={() => {changePage(Routes.MRPEASY_ITEMS);}}>
                    Update MRPeasy and view table
                </button>
            </div>
        </div>
    );
}
