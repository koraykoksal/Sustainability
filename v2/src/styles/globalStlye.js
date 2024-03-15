import pattern1 from "../assets/img/bg1.png"
import pattern2 from "../assets/img/bg2.png"
import pattern3 from "../assets/img/bg3.png"
import pattern4 from "../assets/img/bg4.png"
import img1 from "../assets/pics/world.svg"
import img2 from "../assets/pics/modalimg1.svg"
import greenLine from "../assets/pics/greenLine.svg"


export const modalStyles = {

    overflow:'auto',
    // backgroundImage: `url(${img1})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '90%',
    overflow: 'scroll',
    // bgcolor: 'background.paper',
    background: `linear-gradient(150deg, rgba(71, 44, 232, 0.1) 0%, rgba(56, 236, 161, 1) 100%)`,
    bgcolor:'#d1b3ff',
    // border: '2px solid #000',
    borderRadius:3,
    boxShadow: 24,
    p: 5,
}


export const reportPageStyle={
    width: "100%",
    height: "100vh",
    overflow:'auto',
    backgroundImage: `url(${pattern2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

export const homePageStyle={
    width: "100%",
    height: "100vh",
    overflow:'auto',
    backgroundColor:'#F5F5FF',
    paddingTop:'80px',
    // paddingBottom:'50px',
    // backgroundImage: `url(${greenLine})`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
}

export const loginPageStyle={
    width: "100%",
    height: "100vh",
    overflow:'auto',
    backgroundImage: `url(${pattern1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

