import React from "react";
import "./Work.css";
import soilImg from "./assets/waterbuddy.png";
import plateImg from "./assets/platecheck.png";
import spineguardImg from "./assets/spineguard.png";
import carImg from "./assets/car.png";
import faceImg from "./assets/face.png";
import interacImg from "./assets/interac.png";

const Work = () => {
    return(
        <section id = "work" className = "work-section">
        
            <div className = "work-item">
                <h3>Water Buddy - Soil Irrigation System</h3>
                <i class="fa-brands fa-github"></i>
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
                <i class="fa-brands fa-github"></i>
                <div className = "work-img">
                    <img src = {plateImg} alt = "plate img"/>
                </div>
                <div className = "work-info">
                    <p>Plate Check provides gender-specific, personalized nutritional 
                        insights to address nutrition gaps and improve women’s overall health.</p>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">Figma</span>
               </div>
            </div>
            
            
            <div className = "work-item">
                <h3>Spineguard - Wearable Posture Tracker</h3>
                <i class="fa-brands fa-github"></i>
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

{/*NEXT THREE----------------------------------------------------------------*/ }

            <div className = "work-item">
                <h3>Autonomous Robot Navigator</h3>
                <i class="fa-brands fa-github"></i>
                <div className = "work-img">
                    <img src = {carImg} alt = "car img"/>
                </div>
                <div className = "work-info">
                    <p>Responsible for giving a simulated robot the intelligence to
                        navigate from point-to-point while avoiding static objects. </p>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">C++</span>
                    <span className = "badge">Linux</span>
                    <span className = "badge">ROS2</span>
                    <span className = "badge">Foxglove</span>
               </div>
            </div>

            
            <div className = "work-item">
                <h3>Facial Expression Recognition</h3>
                <i class="fa-brands fa-github"></i>
                <div className = "work-img">
                    <img src = {faceImg} alt = "face img"/>
                </div>
                <div className = "work-info">
                    <p>Built a CNN-based model to classify faces into seven emotions using 
                        the FER2013 dataset, which contains 48x48 grayscale images.</p>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">Tensorflow</span>
                    <span className = "badge">Keras</span>
               </div>
            </div>
            
            
            <div className = "work-item">
                <h3>Automated Category Assignation</h3>
                <i class="fa-brands fa-github"></i>
                <div className = "work-img">
                    <img src = {interacImg} alt = "interac img"/>
                </div>
                <div className = "work-info">
                    <p>Automates category assigning process of emerging trends in 
                        online banking for Interac Corp</p>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">Tensorflow</span>
                    <span className = "badge">Numpy</span>
                    <span className = "badge">Pandas</span>
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
