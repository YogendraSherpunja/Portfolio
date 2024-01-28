import Navbar from "../components/Navbar";
import IELTS from "../assets/ielts.jpg";
import DSN from "../assets/dsn-logo.png"
import NextWord from "../assets/nextword.png"
import Tripplanner from "../assets/tripplanner.jpg"
import HeartDisease from "../assets/heartdisease.png"


const ProjectsPage = () => {
    
  const projects = [
    {
      id: 1,
      title: 'English Proficiency Test',
      year: '2018',
      technologies: 'Vue.js, Ruby on Rails',
      description: `Developed a web-based platform for users to simulate IELTS mock exams, featuring dual front-end applications catering to both student and administrative functions.`,
      responsibilities: [
        'Implementation of audio and video recording/playback features.',
        'Implemented an algorithm for automated evaluation of responses.',
        'Constructed the website with progressive web app capabilities.'
      ],
      imageUrl: IELTS
    },
    {
      id: 2,
      title: 'DSN',
      year: '2019',
      technologies: 'React JS',
      description: `Dropshipping Nepal is a platform that lets you start your own ecommerce business without investing in products, inventory, or delivery. `,
      responsibilities: [
        'Primarily focused on the administrative panel of the DNS platform.',
        'Contributed to a feature enabling news posting within the application.',
        'Worked on products, vendor and customer end functionality. App helped the vendor to deliver their products successfully. '
      ],
      imageUrl: DSN
    },
    {
      id: 3,
      title: 'Next Word Prediction',
      year: '2018',
      technologies: 'Python',
      description: `It is an AI project which predicts the next word in a sentence fragment.`,
      responsibilities: [
        'Worked on to write rapidly and without making spelling mistakes.',
        'Worked on typing accurately and fast is easy on a desktop computer, but when it comes to small devices like mobile phones, it can be tricky and frustrating for many people.',
        'You won’t have to type complete sentences because the algorithms will predict the next word for you, and typos will be much reduced.'
      ],
      imageUrl: NextWord
    },
    {
      id: 4,
      title: 'Trip-Planner',
      year: '2018',
      technologies: 'React and Node js',
      description: `A trip planner is a tool or application that assists individuals in organizing and coordinating various aspects of their travel arrangements. It typically includes features for scheduling activities, managing accommodations, tracking transportation, and creating itineraries, helping users efficiently plan and navigate their trips.`,
      responsibilities: [],
      imageUrl: Tripplanner
    },
    {
      id: 5,
      title: 'Heart Disease Prediction',
      year: '2020',
      technologies: 'Python',
      description: `This system uses artificial intelligence (AI) approaches to predict the most accurate disease that might be linked to the information provided by a patient. Users can then seek medical advice from specialists based on the system diagnosis. `,
      responsibilities: [],
      imageUrl: HeartDisease
    },


  ];


    return (

    <div>
    <Navbar />
    <div className="projects-page">
        <h1>Projects</h1>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h2>{project.title} ({project.year})</h2>
              <h3>Technologies Used: {project.technologies}</h3>
              <p>{project.description}</p>
              <ul>
                {project.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
        
    )
}


export default ProjectsPage;