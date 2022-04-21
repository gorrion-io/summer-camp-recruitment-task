import React from "react";
import {AddressDetailProps} from "./AddressDetailProps";
import styles from './AddressDetail.module.css';

const AddressDetail: React.FC<AddressDetailProps> = (props) => {
    return (
        <>
            <div>
                <h5 className={styles.value}>{props.value}</h5>
                <span className={styles.label}>{props.label}</span>
            </div>
        </>
    );
}

export default AddressDetail;