import {updateItems} from "@/app/integrations/merit/merit.client";

export default function MeritActions() {
    const handleButtonClick = async () => {
        await updateItems();
        window.location.reload();
    };

    return (
        <div className="actions">
            <button className="action-button" onClick={ handleButtonClick }>
                Update Merit items
            </button>
        </div>
    );
}