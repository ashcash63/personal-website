import React from "react";
import "./Work.css";
import soilImg from "./assets/waterbuddy.png";
import plateImg from "./assets/platecheck.png";
import spineguardImg from "./assets/spineguard.png";
const Work = () => {
    return(
        <section className = "work-section">
        
            <div className = "work-item">
                <h3>Water Buddy - Soil Irrigation System</h3>
                <div className = "work-img">
                    <img src = {soilImg} alt = "soil img"/>
                </div>
                <div className = "work-info">
                    <p>Designed and tested a low-power, portable prototype to
                        assist individuals with Alzheimer’s and Dementia in maintaining gardens</p>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">C</span>
                    <span className = "badge">STM32 Microcontroller</span>
               </div>
            </div>

            
            <div className = "work-item">
                <h3>PlateCheck - AI Powered Nutrition App</h3>
                <div className = "work-img">
                    <img src = {plateImg} alt = "plate img"/>
                </div>
                <div className = "work-info">
                    <p>Plate Check provides gender-specific, personalized nutritional 
                        insights to address nutrition gaps and improve women’s overall health.</p>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">um idk</span>
               </div>
            </div>
            
            
            <div className = "work-item">
                <h3>Spineguard - Wearable Posture Tracker</h3>
                <div className = "work-img">
                    <img src = {spineguardImg} alt = "spineguard img"/>
                </div>
                <div className = "work-info">
                    <p>Wearable device designed to help users maintain good posture. 
                        It attaches to the user's back and provides real-time alerts 
                        when poor posture is detected.</p>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">Streamlit</span>
               </div>
            </div>
            {/* <div className = "work-item">
                <h3>Spineguard - Wearable Posture Tracker</h3>
                <div className = "work-img">
                    <img src = {spineguardImg} alt = "spineguard img"/>
                </div>
                <div className = "work-info">
                    <p>Wearable device designed to help users maintain good posture. 
                        It attaches to the user's back and provides real-time alerts 
                        when poor posture is detected.</p>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">Streamlit</span>
               </div>
            </div> */}
        </section>
    )
}
export default Work;
