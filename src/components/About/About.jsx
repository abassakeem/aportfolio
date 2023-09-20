import "./About.css";
import SectionHeader from "./SectionHeader/SectionHeader";
import SplitText from "../../utils/Split3.min.js"
import useOnScreen from "../../Hooks/UseOnScreen";
import gsap from "gsap"
import cn from "classnames"
import { useEffect, useRef, useState } from "react";

const About = () => {
    const ref = useRef()
    const [reveal,setReveal] = useState(false)
    const onScreen = useOnScreen(ref)

    useEffect(()=>{
            if (onScreen) setReveal(onScreen)
    },[onScreen])
    useEffect(()=>{
        if(reveal){

      
        const split= new SplitText("#headline",{
          type: "lines",
        
        })
      
    
        gsap.to(split.lines, {
          duration: 1,
          y:-20,
          opacity:1,
          stagger:0.1,
          ease: "power2",
        })
    }
      },[reveal])

    return ( 
        <div className={cn("about-container vh-100", {"is-reveal":reveal})} data-scroll-section>
            <div className={"about-section"} >
                <SectionHeader title="about " />
                <p ref={(ref)} id="headline"
                className={cn({"is-reveal":reveal})}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias recusandae, vel, impedit officia dolore dolor inventore consectetur sed ullam assumenda, voluptatum sequi tempora odit quidem 
                </p>
            </div>

        </div>
     );
}
 
export default About;