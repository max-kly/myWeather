const Preloader = () => {
    return (
        <div className="loader">
            <div className="background night"></div>
            <h1>Loading weather</h1>
            <div className="hour base"></div>
            <div className="data">
                <div className="days base"></div>
                <div className="additional">
                    <div className="additional-item base"></div>
                    <div className="additional-item base"></div>
                    <div className="additional-item base"></div>
                    <div className="additional-item base"></div>
                    <div className="additional-item base"></div>
                    <div className="additional-item base"></div>
                    <div className="additional-item base"></div>
                </div>
            </div>
        </div>
    )
}
export default Preloader