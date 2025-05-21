import "./Conbar.css";

const Conbar = () =>{
    return(
        <div className="conbar">
            <div className="conbar-content">
                <ul className = "conbar-icons">
                    <li><a href= "https://github.com/ashcash63"><i className="fa-brands fa-github"></i></a></li>
                    <li><a href= "https://www.linkedin.com/in/aashi-c-1b4165222/"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href= "mailto:aashic63@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                    <li><a href= ""><i className="fa-solid fa-paperclip"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Conbar;
