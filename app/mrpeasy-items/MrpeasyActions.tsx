import {updateMrpItems} from "@/app/integrations/mrpeasy/mrpeasy.client";

export default function MrpeasyActions() {
    const handleButtonClick = async () => {
        await updateMrpItems();
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