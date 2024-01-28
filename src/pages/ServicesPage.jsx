import Navbar from "../components/Navbar";
import { MdOutlineWebAssetOff } from "react-icons/md";
import { FaFreeCodeCamp } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { SiElementor } from "react-icons/si";


const ServicesPage = () => {
    return (
       <div>
        <Navbar />
        <div className="services-page">
        <h1>Services I Offer</h1>
        <div className="services-container">
          <div className="service">
            <FaFreeCodeCamp size={70} />
            <h2>General Programming</h2>
            <p>Possessing extensive expertise in a variety of programming languages such as JavaScript, TypeScript, Ruby, C++, and Java, I provide adaptable programming solutions.</p>
          </div>

          <div className="service">
            <MdOutlineWebAssetOff size={70} />
            <h2>Full-Stack Web Development</h2>
            <p>Expertise in both front-end and back-end technologies, able to design, implement, and maintain complete web applications.</p>
            {/* <img src="/path-to-full-stack-web-development-image.jpg" alt="Full-Stack Web Development" /> */}
          </div>

          <div className="service">
            < HiMiniDevicePhoneMobile size={70} />
            <h2>Mobile App Development</h2>
            <p>Expertise in creating software applications specifically designed for smartphones and other mobile devices to provide a diverse range of functionalities and services.</p>
            {/* <img src="/path-to-mobile-app-development-image.jpg" alt="Mobile App Development" /> */}
          </div>

          <div className="service">
            <SiElementor size={70} />
            <h2>Mentorship and Training</h2>
            <p>Leveraging my expertise as a seasoned mentor, I offer support and training to budding developers, aiding them in accomplishing success in their projects and professional journeys.</p>
            {/* <img src="/path-to-mentorship-image.jpg" alt="Mentorship and Training" /> */}
          </div>
        </div>
      </div>
       </div>
        
    )
}


export default ServicesPage;