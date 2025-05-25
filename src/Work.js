import React, {useEffect, useRef} from "react";
import "./Work.css";
import soilImg from "./assets/waterbuddy.png";
import plateImg from "./assets/platecheck.png";
import spineguardImg from "./assets/spineguard.png";
import carImg from "./assets/car.png";
import faceImg from "./assets/face.png";
import interacImg from "./assets/interac.png";

const Work = () => {
    const workItemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            {
                threshold: 0.1 // Trigger when 10% of the element is visible
            }
        );

        workItemRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            workItemRefs.current.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    const addWorkItemRef = (el) => {
        if (el && !workItemRefs.current.includes(el)) {
            workItemRefs.current.push(el);
        }
    };
    return(
        <section id = "work" className = "work-section">
            <h2><span className = "gradient-text">Projects</span></h2>
            <div className = "work-items-container">
            <div ref = {addWorkItemRef}  className = "work-item">
                <div className="work-title-container">
                <h3>Water Buddy</h3>
                <a href = "https://github.com/ashcash63/Soil-Irrigation-System-Project">
                    <i className ="fa-brands fa-github"></i>
                </a>
                </div>
                <div className = "work-info">
                    <p>Designed and tested a low-power, portable prototype to
                        assist individuals with Alzheimer's and Dementia in maintaining gardens</p>
                </div>
                <div className = "work-img">
                    <img src = {soilImg} alt = "soil img"/>
                </div>
                
                <div className = "exp-lang">
                    <span className = "badge">C</span>
                    <span className = "badge">STM32 Microcontroller</span>
               </div>
            </div>

            
            <div ref = {addWorkItemRef}  className = "work-item">
                <div className="work-title-container">
                <h3>PlateCheck</h3> 
                <a href = "https://github.com/ashcash63/Platecheck-Hackathon-Project">
                    <i className ="fa-brands fa-github"></i>
                </a>
                </div>
                <div className = "work-info">
                    <p>Plate Check provides gender-specific, personalized nutritional 
                        insights to address nutrition gaps and improve women's overall health.</p>
                </div>
                <div className = "work-img">
                    <img src = {plateImg} alt = "plate img"/>
                </div>
                
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">Figma</span>
               </div>
            </div>
            
            
            <div ref = {addWorkItemRef}  className = "work-item">
                <div className="work-title-container">
                <h3>Spineguard</h3>
                <a href = "https://github.com/ashcash63/deltahacks25">
                    <i className ="fa-brands fa-github"></i>
                </a>
                </div>
                <div className = "work-info">
                    <p>Wearable device designed to help users maintain good posture. 
                        It attaches to the user's back and provides real-time alerts 
                        when poor posture is detected.</p>
                </div>
                <div className = "work-img">
                    <img src = {spineguardImg} alt = "spineguard img"/>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">Streamlit</span>
               </div>
            </div>

{/*NEXT THREE----------------------------------------------------------------*/ }

            <div ref = {addWorkItemRef}  className = "work-item">
                <div className="work-title-container">
                <h3>Autonomous Robot Navigator</h3>
                <a href = "https://github.com/ashcash63/wato_asd_training_aashi">
                    <i className ="fa-brands fa-github"></i>
                </a>
                </div>
                <div className = "work-info">
                    <p>Responsible for giving a simulated robot the intelligence to
                        navigate from point-to-point while avoiding static objects. </p>
                </div>
                <div className = "work-img">
                    <img src = {carImg} alt = "car img"/>
                </div>
                <div className = "exp-lang">
                    <span className = "badge">C++</span>
                    <span className = "badge">Linux</span>
                    <span className = "badge">ROS2</span>
                    <span className = "badge">Foxglove</span>
               </div>
            </div>

            
            <div ref = {addWorkItemRef}  className = "work-item">
                <div className="work-title-container">
                <h3>Facial Expression Recognition</h3>
                <a href = "https://github.com/ashcash63/Facial-Expression-Recognition">
                    <i className ="fa-brands fa-github"></i>
                </a>
                </div>
                <div className = "work-info">
                    <p>Built a CNN-based model to classify faces into seven emotions using 
                        the FER2013 dataset, which contains 48x48 grayscale images.</p>
                </div>
                <div className = "work-img">
                    <img src = {faceImg} alt = "face img"/>
                </div>
                
                <div className = "exp-lang">
                    <span className = "badge">Python</span>
                    <span className = "badge">Tensorflow</span>
                    <span className = "badge">Keras</span>
               </div>
            </div>
            
            
            <div ref = {addWorkItemRef}  className = "work-item">
                <div className="work-title-container">
                <h3>Automated Category Assignation</h3>
                <a href = "https://colab.research.google.com/drive/1LpVoZaAqPSvUZj-iVxZaA99PPw-kcOyz">
                    <i className ="fa-brands fa-github"></i>
                </a>
                </div>
                <div className = "work-info">
                    <p>Automates category assigning process of emerging trends in 
                        online banking for Interac Corp</p>
                </div>
                <div className = "work-img">
                    <img src = {interacImg} alt = "interac img"/>
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
            </div>
        </section>
    )
}
export default Work;
