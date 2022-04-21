import React from "react";
import {ChipStyle} from "./ChipStyle";

export interface ChipProps {
    value: number | "Male" | "Female";
    chipStyle: ChipStyle
}