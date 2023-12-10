export default function Menu() {
    return (
        <div className="flex">
            {/* Bottom left section for the nav panel */}
            <div className="nav-panel">
                <div className="flex-column-container">
                    <button className="nav-button" onClick={() => console.log('Page 1 clicked')}>Page 1</button>
                    <button className="nav-button" onClick={() => console.log('Page 2 clicked')}>Page 2</button>
                    <button className="nav-button" onClick={() => console.log('Page 3 clicked')}>Page 3</button>
                    <button className="nav-button" onClick={() => console.log('Page 4 clicked')}>Page 4</button>
                    <button className="nav-button" onClick={() => console.log('Page 5 clicked')}>Page 5</button>
                    <button className="nav-button" onClick={() => console.log('Page 6 clicked')}>Page 6</button>
                </div>
            </div>

            {/* Right section for the table with filters */}
            <div className="flex-content-container">
                <div className="table-filters">
                    {/* Your table filters go here */}
                </div>
                <table>
                    {/* Your table content goes here */}
                </table>
            </div>
        </div>
    );
}