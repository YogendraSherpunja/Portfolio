import Navbar from "../components/Navbar";
import MyImage from "../assets/photo.jpg"
import MyResume from "../assets/yogendra_magar_cv.pdf"

const AboutPage = () => {
    return (
        <div>
        <Navbar />
        <div className="about-page">
        <h1>Yogendra Magar</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img src={MyImage} alt="Yogendra" height={"100px"} width={"100px"} />
          <div style={{ marginTop: "20px" }}>
            <a href={MyResume} className="btn btn-primary" download >Download Resume</a>
          </div>
        </div>
        <p>Hello 👋🏻, I'm Yogendra, a Java Developer with a 4-year background in the computer software industry. I am a committed professional who actively contributes to the success of the company and collaborates effectively within a team.
          <br />
          <br />
          I’m experienced in
          <br />
          - Java - 4 years<br />
          - ReactJS - 2 years<br />
          - Mob App development - 1 year
          <br />
          <br />
          Some things I love (outside of work)
          <br />
          - Burger 🍔 <br />
          - Pizza 🍕 <br />
        </p>

        <div class="skills">
          <h2>Professional Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="card">C++</div>
            <div className="card">C#</div>
            <div className="card">JavaScript (JS)</div>
            <div className="card">Node.js</div>
            <div className="card">React</div>
            <div className="card">Ruby</div>
            <div className="card">Git</div>
            <div className="card">Java</div>
          </div>
        </div>
        <div className="tools">
          <h2>Tools I Use</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="card">macOS</div>
            <div className="card">Visual Studio</div>
            <div className="card">Android Studio</div>
            <div className="card">JetBrains</div>
          </div>
        </div>
      </div>
        </div>
    )
}


export default AboutPage;