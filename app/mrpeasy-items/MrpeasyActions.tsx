import {updateItems} from "@/app/integrations/mrpeasy/mrpeasy.client";

export default function MrpeasyActions() {
    const handleButtonClick = async () => {
        await updateItems();
        window.location.reload();
    };

    return (
        <div className="actions">
            <button className="action-button" onClick={ handleButtonClick }>
                Update MRPeasy items
            </button>
        </div>
    );
}