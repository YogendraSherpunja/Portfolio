import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ComputerImage from "../assets/computer.jpg"
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="home-page">
                <header className="hero-section">
                    <div style={{ flex: 1 }}>
                        <h1>Yogendra Magar</h1>
                        <h2>Java Developer</h2>
                        <p>Aspiring to create impactful software solutions, I am committed to continuous learning and collaboration. I strive to deliver high-quality projects that drive progress and innovation.</p>
                        <Link to="/about" className="btn btn-primary">About Me</Link>
                    </div>
                    <div>
                        <img src={ComputerImage} height={400} width={600}/>
                    </div>
            </header>
          <section className="hero-section">
          <div>
            <h1>Find me on</h1>
            <div className="hero-section-1">
              <p>Feel free to conect with me</p>
              <a href="https://www.linkedin.com/in/yogendra-sherpunja-69b138154/" target="_blank"><FaLinkedin size={30} /></a>
              <a href="https://twitter.com/MagarYogen46192" target="_blank"><FaTwitter size={30} /></a>
              <a href="https://github.com/YogendraSherpunja" target="_blank"><ImGithub size={30} /></a>
            </div>
          </div>
        </section>
          </div>
        
      </div>
      
    )
}


export default HomePage;