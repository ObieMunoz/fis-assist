//components
import ContactCards from "./ContactCards";
import "./About.css";

const About = () => {
  const about = [
    {
      id: 1,
      name: "Obie Munoz",
      title: "Software Engineer",
      email: "obiemunozjr@gmail.com",
      bio: "code sensei (Obie Wan)",
    },
    {
      id: 2,
      name: "Rodrigo Alba",
      title: "Software Engineer",
      email: "rodrigoqalba@gmail.com",
      bio: "lifestyle blogger and data wizard",
    },
    {
      id: 3,
      name: "Joshua Hawks",
      title: "Software Engineer",
      email: "jdhawks@gmail.com",
      bio: "enjoys making things shiny",
    },
  ];
  return (
    <div className="container">
      <h3>
        The FIS Assistance Program was developed by members of the 101121-East
        cohort as part of our Phase 3 Project. We wish you luck on your Flatiron
        Journey - please don't hesitate to reach out to us with questions!{" "}
      </h3>
      <ContactCards about={about} />
    </div>
  );
};

export default About;
