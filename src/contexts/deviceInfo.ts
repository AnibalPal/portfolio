import { createContext } from "react";

type Devices = "mobile" | "tablet" | "desktop"; 

export const DeviceInfoContext = createContext<Devices>("desktop");
