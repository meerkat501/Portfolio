import '../portfolio.css'; 

const Portfolio = () => {

  const projects = [
    {
      title: "Employee-Tracker",
      description: "This is an Employee Management System hat uses  a command-line application that allows users to view, add, update, and delete employee data in a company. It's built with Node.js and uses MySQL for data storage.",
      imageUrl: "src/assets/Employee-Tracker.png",
      liveUrl: " ",
      codeUrl: "https://github.com/meerkat501/Employee-Tracker",
    },
    {
      title:"Scheduler",
      description:"A simple planner for your current workday of 9AM - 5PM",
      imageUrl: "src/assets/WorkDayScheduler.png",
      liveUrl: "https://meerkat501.github.io/Scheduler/",
      codeUrl: "https://github.com/meerkat501/Scheduler",
    },
    {
      title:"Password Generator",
      description:"Creates a password for the user, on the requirments they choose when pronpted.",
      imageUrl: "src/assets/PasswordGen.png",
      liveUrl: "https://meerkat501.github.io/PasswordGen/",
      codeUrl: "https://github.com/meerkat501/PasswordGen",
    },
    
  ];

  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
