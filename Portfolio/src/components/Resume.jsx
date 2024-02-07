import '../resume.css';

const Resume = () => {

  const experience = [
    {
      role: "Inventory Quality Control & Assurance",
      company: "Target Distribution Center",
      duration: "September 2021 - Present",
      responsibilities: [
        "Support the operational teams and ICQA Leader in defect resolution, audit and resolve defects, within an assigned Service Level Agreement (SLA) and then research and document root cause for follow-up to address the issue moving forward to ultimately improve inventory accuracy.",
        "Perform weekly audits, collaborate, and communicate the findings of those audits and resolution steps.",
        "Correct any inventory record inaccuracies in the warehouse and conduct follow up audits.e application for maximum speed and scalability.",
        "Responsible for addressing inaccuracies impeding operational teams from picking product, helping to prevent downstream order cancellations."
      ],
    },
    {
        role: "Warehouse Worker",
        company: "Target Distribution Center",
        duration: "July 2021 - September 2021",
        responsibilities: [
            "Worked quickly, safely and efficiently and handled products within the warehouse to ensure the accurate processing of merchandise.",
            "Required to maintain a work area that is organized, neat and clean in order to safely receive and process freight, manage and move inventory, and load and ship items.",
            "Required to you safely operate equipment such as a pallet jack and/or electric forklift.",
            "Updated the Warehouse Management System, other computer systems and/or manifests appropriately as work is performed to ensure accurate carton count and quality of product being moved to, from, and throughout the warehouse."
        ],
    },
    {
        role: "Laborer",
        company: "Astro Insulation",
        duration: " February 2018- July 2021",
        responsibilities: [
            "Served as a driver to and from jobsites.",
            "Cleaned spray foam insulation.",
            "Installed batts of fiberglass insulation.",
            "Helped with deliveries and organization of insulation at the warehouse."
        ],
    },
    {
        role: "Laborer",
        company: "Soto Foam Insulation",
        duration: " January 2017 - February 2018",
        responsibilities: [
            "Served as a driver to and from jobsites.",
            "Cleaned spray foam insulation.",
            "Installed batts of fiberglass.",
            "Installed cellulose insulation."
        ],
    },
    {
        role: "IT intern",
        company: " Silver Lake College",
        duration: " May 2017 - December 2017",
        responsibilities: [
            "Assisted in help desk support.",
            "Assisted faculty, students, and staff with technological needs, such as computer issues, presentation setups, etc.",
            "Updated phone system campus-wide.",
            "Fixed issues with computers as well as necessary repairs or updates."
        ],

    },
    {
        role: "Tech Assistant",
        company: "Silver Lake College",
        duration: " August 2016 - May 2017",
        responsibilities: [
            "Assisted Manager of Event Services in day-to-day operations of the Franciscan Music Center for SLC Works Program.",
            "Working with sound and lights to ensure a smooth event.",
            "Performed routine rounds to ensure safety of students, employees, guests, and the building.",
            "Served as a front desk assistant answering questions for students, faculty, staff, and guests.",
            "Responsible for set up and take down for events."
        ],
    },
    
  ];

  const education = [
    {
        degree: "Full-Stack Developer Certificate",
        school: "University of Minnesota",
        year: "2023 - present"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Silver Lake College",
      year: "2016 - 2017",
    },
    {
        degree: "High School Diploma",
        school: "Solorio High School",
        year: "2012 - 2016"
    },
    
  ];

  const skills = ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS", "Bilingual", "Excel"];

  return (
    <div className="resume">
      <section className="experience">
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div key={index}>
            <h3>{job.role} - {job.company}</h3>
            <p>{job.duration}</p>
            <ul>
              {job.responsibilities.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="education">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.school}, {edu.year}</p>
          </div>
        ))}
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="download">
        <h2>Download My Resume</h2>
        <a href="Portfolio\src\assets\Resume.pdf" download>Download</a>
      </section>
    </div>
  );
};

export default Resume;
