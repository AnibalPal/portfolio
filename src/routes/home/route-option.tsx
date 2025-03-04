import { useNavigate } from "react-router"

import RightArrowFill from "../../components/icons/right-arrow-fill"
import { Selection, SelectOptions, StateOptions } from "./types"

import "./route-option.css"

interface RouteOptionProps {
    name: string,
    route: SelectOptions,
    handleChange: { (key: SelectOptions, state: StateOptions, value: boolean): void },
    selected: Selection
}

const RouteOption = ({ name, route, handleChange, selected }: RouteOptionProps) => {

    const navigate = useNavigate();

    const optionSelected = selected[route].focused || selected[route].hovering;

    const handleKeyDown = (key: string) => {
        if (key === "Enter" || key === " ") {
            navigate("/" + route)
        }
    }

    return (
        <div>
            {optionSelected &&
                <div className="anchor">
                    <div className="route-option-arrow" >
                        <RightArrowFill />
                    </div>
                </div>
            }
            <p
                tabIndex={1}
                key={route}
                onMouseEnter={() => handleChange(route, "hovering", true)}
                onMouseLeave={() => handleChange(route, "hovering", false)}
                onFocus={() => handleChange(route, "focused", true)}
                onBlur={() => handleChange(route, "focused", false)}
                onClick={() => navigate("/" + route)}
                onKeyDown={(e) => handleKeyDown(e.key)}
                className={
                    "route-option " + (optionSelected ? "selected" : "")
                }
            >
                {name}
            </p>
        </div>
    )
}

export default RouteOption;
