import { CircularProgress } from "@mui/material";
import React from "react";

const styles = {
    popupStyle: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        zIndex: "9999",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    textContainerStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        fontSize: "18px",
        color: "#333",
        fontWeight: 500,
    },

    textStyle: {
        marginLeft: "10px",
    },
};

const Popup = ({ isLoading }) => {
    return isLoading ? (
        <div style={styles.popupStyle}>
            <CircularProgress size={50} />
            <div style={styles.textContainerStyle}>
                <span>
                    Hang on... We are uploading your project on Project Gallery
                </span>
            </div>
        </div>
    ) : null;
};

export default Popup;
