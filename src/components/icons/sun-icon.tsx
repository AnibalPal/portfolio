import "./sun-icon.css";

const SunIcon = () => {
    return (
        <div className="sun-icon-container">
            <div style={{ position: "relative", width: 0, height: 0 }}>
                <div className="line left" />
                <div className="line top-left" />
                <div className="line top" />
                <div className="line top-right" />
                <div className="line right" />
                <div className="line bottom-right" />
                <div className="line bottom" />
                <div className="line bottom-left" />
                <div className="center" />
            </div>
        </div>
    )
}

export default SunIcon;
