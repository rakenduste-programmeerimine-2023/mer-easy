export default function MrpeasyActions() {
    const handleButtonClick = () => {
        console.log('Button clicked!');
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