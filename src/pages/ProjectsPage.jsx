import Navbar from "../components/Navbar";
import IELTS from "../assets/ielts.jpg";
import DSN from "../assets/dsn-logo.png"
import Cotiviti from "../assets/cotiviti.jpg"
import Tripplanner from "../assets/tripplanner.jpg"


const ProjectsPage = () => {
    
  const projects = [
    {
      id: 1,
      title: 'English Proficiency Test',
      year: '2018',
      technologies: 'Vue.js, Ruby on Rails',
      description: `A web application allowing students to take PTE mock tests. This project has two front-end apps: one for students and another for admin/manager responsibilities.`,
      responsibilities: [
        'Worked on recording and playing audio and videos.',
        'Developed an algorithm for automatic answer checking.',
        'Built the website as a progressive web app.'
      ],
      imageUrl: IELTS
    },
    {
      id: 2,
      title: 'DSN',
      year: '2019',
      technologies: 'React JS',
      description: `Edugate is a platform that helps students across Nepal for Entrance Preparation. It has features such as Playing Quiz, Discussion Forum, News and so fourth.`,
      responsibilities: [
        'Mainly worked on admin panel for edugate Saas platform.',
        'Worked on a feature for posting news on the app.',
        'Worked on adding question for quiz, subjects and its content form admin dashboard.'
      ],
      imageUrl: DSN
    },
    {
      id: 3,
      title: 'Cotiviti',
      year: '2018',
      technologies: 'Python',
      description: `It is an AI project which detects handwritten characters. The character consists of 0-9 and A-Z (both uppercase and lowercase).`,
      responsibilities: [
        'Worked on image pre-processing task to remove noise from the captured image',
        'Used different algorithms for image processing such as inverting image, Gray scale conversion, image thinning.',
        'Worked with an EMNIST dataset to train the neural network'
      ],
      imageUrl: Cotiviti
    },
    {
      id: 4,
      title: 'Trip-Planner',
      year: '2018',
      technologies: 'Ruby on Rails',
      description: `This website is used to track the investors everyday profit obtained from the share market.`,
      responsibilities: [],
      imageUrl: Tripplanner
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