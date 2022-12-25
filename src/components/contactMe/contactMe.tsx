import "./contactMe.css";
import flecha from "./flecha.png";

const Contact = () => {
  return (
    <section className="wholeContact">
      <div className="contact">
        <h1 className="contactWord">CONNECT WITH ME</h1>
        <input type="text" id="EMAIL" name="EMAIL" placeholder="EMAIL"></input>
        <textarea
          className="text-area"
          rows={20}
          cols={20}
          placeholder="ENTER YOUR MESSAGE"
        ></textarea>
        <button className="flecha">
          <span>SEND MESSAGE</span>
          <img src={flecha} alt="Flecha" />
        </button>
      </div>
    </section>
  );
};

export default Contact;
