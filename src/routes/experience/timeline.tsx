import { Dispatch, SetStateAction } from "react";

import "./timeline.css";

interface TimelineProps {
    dates: {
        start_date: string,
        end_date: string
    }[],
    selectedExperience: number,
    setExperience: Dispatch<SetStateAction<number>> // Used this type to pass the setter function from the useState hook directly
}

const Timeline = ({ dates, selectedExperience, setExperience }: TimelineProps) => {

    return (
        <div className="timeline-container">
            <div className="timeline-center-line" />
            <div className="anchor">
                <div className="timeline-multiple-indicators-container">
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
                                    <p className="timeline-indicator-date">{date.start_date} - {date.end_date}</p>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline;
