//styles

const ContactCards = ({ about }) => {
  return (
    <div className="assignment-list">
      {about.map((about) => (
        <a
          href={about.link}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          key={about.id}
        >
          <h1>{about.name}</h1>
          <h3>{about.title}</h3>
          <p>{about.email}</p>
          <b />
          <p>{about.bio}</p>
        </a>
      ))}
    </div>
  );
};

export default ContactCards;

/* <div className="contact-card" key={about.id}>
  <h1>{about.name}</h1>
  <h3>{about.title}</h3>
  <p>{about.email}</p>
  <b />
  <p>{about.bio}</p>
</div> */
