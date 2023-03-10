
import { COLORS } from "../../constants/colors";

export const styles = {
    title: {
        color: COLORS.secondary,
        fontWeight: '700',
        zIndex: '1',
    },
    subTitle: {
        zIndex: '2',
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
        maxHeight: '90%',
        maxWidth: '90%',
        zIndex: '2',
    },
    circle: {
        //send the circle to back of the page
        zIndex: '1',
        position: 'absolute',
        // width: '500px',
        // height: '340px',
        margin: 'auto',
        // to left
        transform: 'translateX(30%)',
        // top: '20%',
        right: '350px',
        bottom: '50vh',

    },
    element: {
        position: "absolute",
        width: "10rem",
        height: "10rem",
        borderRadius: "50%",
        top: "50 %",
        left: "50 %",
        transform: "translate(-50 %, -50 %)",
    },
    backgroundCircle: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignitems: 'center',
        // justifyContent: 'ends',
        width: "30rem",
        height: "30rem",

        // position: "absolute",
        zIndex: '0',
        // transform: 'translateX(-15%)',
        borderRadius: "50%",
        background: "radial-gradient(circle, white 0%, #D9C0DE 100%)",
        // if is laptopn then 7vw else 4vw



        // right: WindowSize().width > 1200 ? '7vw' : '4vw',

    },






}