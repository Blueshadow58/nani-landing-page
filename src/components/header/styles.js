import { COLORS } from "../../constants/colors";

export const styles = {
    title: {
        color: COLORS.secondary,
        fontWeight: '700',
    },
    shineText: {
        color: '#9747FF',
    },
    btnContacto: {
        backgroundColor: '#F298C0',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontWeight: '500',
    },
    header: {
        background: 'linear-gradient(90deg, rgba(251,249,239,1) 0%, rgba(245,224,236,1) 100%)',
        height: '90vh',
    },
    nani: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
    circle: {

        position: 'absolute',
        // width: '500px',
        // height: '340px',
        margin: 'auto',
        // to left
        transform: 'translateX(30%)',
        // top: '20%',
        right: '350px',
        bottom: '340px',
    },
    element: {
        position: "absolute",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        top: "50 %",
        left: "50 %",
        transform: "translate(-50 %, -50 %)",
    }





}