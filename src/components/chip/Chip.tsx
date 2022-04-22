import React from 'react';
import {ChipProps} from "./ChipProps";
import styles from './Chip.module.css';


const Chip: React.FC<ChipProps> = (props) => {
    return (
        <div className={styles.container} style={props.chipStyle}>
            <span>{props.value}</span>
        </div>
    );
}

export default Chip;