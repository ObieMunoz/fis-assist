//styles

const ContactCards = ({about}) => {
  return ( 
    <div className="assignment-list">
    {about.map((a) => (
    <div className="contact-card" key={a.id}>
      <h1>{a.name}</h1>
      <h3>{a.title}</h3>
      <p>{a.email}</p>
      <b/>
      <p>{a.bio}</p>
    </div>
    ))}
  </div>
   );
}
 
export default ContactCards;