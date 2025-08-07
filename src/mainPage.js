import React from "react";
import "./index.css";
import Card from "./card";
import img1 from "./images.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

function MainPage() {
    return(
        <>  
        <h1 className="heading">
            Photo Gallery
        </h1>
        <div className="container">
         <Card name="1" img={img1} />
         <Card name="2" img={img2}/>
         <Card name="3" img={img3}/>
         <Card name="4" img={img2}/>
         <Card name="5" img={img2}/>
         <Card name="6" img={img2}/>
         <Card name="7" img={img2}/>
         <Card name="8" img={img2}/>
       </div>
        </>
    );
}
export default MainPage;