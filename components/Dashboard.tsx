import {Routes} from "@/app/routes/routes";
import {useRouter} from "next/navigation";
import '@/app/styles/menu.scss';
import {updateMeritItems} from "@/app/integrations/merit/merit.client";
import {updateMrpItems} from "@/app/integrations/mrpeasy/mrpeasy.client";

export default function Dashboard() {
    const router = useRouter();

    const changePage = async (route: Routes) => {
        await router.push(route);
    };

    const handleMeritButtonClick = async () => {
        changePage(Routes.MERIT_ITEMS);
        await updateMeritItems();
    };
    const handleMrpButtonClick = async () => {
        changePage(Routes.MRPEASY_ITEMS);
        await updateMrpItems();
    };


    return (
        <div className="dashboard-content">
            <div className="picture-container">
                <img src="meritaktiva.png" alt="First Image" className="medium-sized-image" />
                <button className="nav-button" onClick={handleMeritButtonClick}>
                    Update Merit and view table
                </button>
            </div>

            <div className="picture-container">
                <img src="MRPeasy.png" alt="Second Image" className="medium-sized-image" />
                <button className="nav-button" onClick={handleMrpButtonClick}>
                    Update MRPeasy and view table
                </button>
            </div>
        </div>
    );
}
