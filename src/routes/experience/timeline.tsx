import { Dispatch, SetStateAction, useContext } from "react";

import "./timeline.css";
import { DeviceInfoContext } from "../../contexts/deviceInfo";

interface TimelineProps {
    dates: {
        start_date: string,
        end_date: string,
        duration: string
    }[],
    selectedExperience: number,
    setExperience: Dispatch<SetStateAction<number>> // Used this type to pass the setter function from the useState hook directly
    moveLeft: () => void,
    moveRight: () => void
}

const Timeline = ({ dates, selectedExperience, setExperience, moveLeft, moveRight }: TimelineProps) => {

    const deviceType = useContext(DeviceInfoContext);

    return (
        <div className="timeline-container">
            {
                deviceType === "desktop" &&
                <div className="timeline-center-line" />
            }
            <div className="anchor">
                <div className="timeline-multiple-indicators-container">
                    {
                        deviceType === "mobile" &&
                        <div onClick={moveLeft}>
                            <p className="timeline-arrow-mobile">
                                {"<-"}
                            </p>
                        </div>
                    }
                    {dates.map((date, idx) => {
                        return (
                            <div key={"date-" + idx} className="timeline-indicator-container">
                                <div
                                    className={
                                        "timeline-indicator " + (selectedExperience === idx ? "active" : "inactive")
                                    }
                                    onClick={() => setExperience(idx)}
                                />
                                {
                                    selectedExperience === idx &&
                                    <p className="timeline-indicator-date">
                                        {date.duration}
                                    </p>
                                }
                            </div>
                        )
                    })}
                    {
                        deviceType === "mobile" &&
                        <div onClick={moveRight}>
                            <p className="timeline-arrow-mobile">
                                {"->"}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Timeline;
