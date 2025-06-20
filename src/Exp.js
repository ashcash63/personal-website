import React, { useEffect,useRef } from "react";
import "./Exp.css";


const Exp = () => {
    const expItemRefs = useRef([]); // ref stores an array of DOM elements

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); //stop observering so it doesn't trigger again on future scrolls (item only animates once)
                    }
                });
            },
            {
                threshold: 0.1 // Trigger when 10% of the element is visible
            }
        );

        expItemRefs.current.forEach(item => { // loops over arrat of elements
            if (item) observer.observe(item); // starts watching each individually
        });

        return () => {
            expItemRefs.current.forEach(item => {
                if (item) observer.unobserve(item); //cleanup
            });
        };
    },[]);

    const addExpItemRef = (el) => { // push into into the array everytime a new DOM element is rendered
        if (el && !expItemRefs.current.includes(el)) {
            expItemRefs.current.push(el);
        }
    };
    return (
        <section id = "exp" className = "experience">
            <h1><span className = "gradient-text">Experience</span></h1>
            {/* <div className = "exp-item">
              <div className = "exp-date">May 2025 - Aug 2025</div>
              <div className = "exp-info">
                <h3>Software Developer Intern · Motorola Solutions</h3>
               <ul>
                <li>In progress</li>
               </ul>
               <div className = "exp-lang">
                <span className = "badge">Java</span>
                <span className = "badge">C++</span>
               </div>

               </div>
            </div> */}
            
            <div ref = {addExpItemRef} className = "exp-item">
              <div className = "exp-date">Jan 2025 - Apr 2025</div>
              <div className = "exp-info">
                <h3>Autonomous Software Developer · WATonomous</h3>
               <ul>
                <li>Developed a memory-based mapping system in ROS2 to integrate 
                    sensor data over time, enabling a robot to build and update a
                    global costmap for autonomous navigation and obstacle avoidance</li>
                <li>Processed LiDAR and camera data in a Linux + Docker environment,
                    optimizing sensor fusion and map updates, with visualization in
                    Foxglove and version control in Git</li>
               </ul>
               <div className = "exp-lang">
                <span className = "badge">ROS2</span>
                <span className = "badge">C++</span>
                <span className = "badge">Linux</span>
                <span className = "badge">Docker</span>
               </div>
               </div>
               </div>
            <div ref = {addExpItemRef} className = "exp-item">
                <div className = "exp-date">Jul 2022 - Aug 2022</div>
                <div className = "exp-info">
                 <h3>Software Developer Intern · Interac Corp</h3>
                 <ul>
                    <li>Implemented NLP techniques and clustering algorithms
                         (HDBSCAN, PCA, Bag of Words) using Python, TensorFlow, 
                         and Gensim to analyze 20TB of text data, identifying emerging 
                         trends in online banking
                    </li>
                    <li>
                    Documented the full ML pipeline in Figma, detailing data preprocessing,
                     feature extraction, model selection, and evaluation, reducing 
                     onboarding time for the Research and Foresight Team by 20%
                    </li>
                 </ul>
                <div className = "exp-lang">
                <span className = "badge">Tensorflow</span>
                <span className = "badge">Python</span>
                <span className = "badge">Figma</span>
                <span className = "badge">Gensim</span>
               </div>
                </div>
            </div>
        </section>
    )
}
export default Exp;
