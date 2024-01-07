export default function Actions() {
    const handleButtonClick = () => {
        console.log('Button clicked!');
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