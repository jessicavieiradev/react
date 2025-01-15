import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div>
      <h1>Contacts Page</h1>
      <p className="space-x-5">
        <Link to="/contact/1">contato 1</Link>
        <Link to="/contact/2">contato 2</Link>
        <Link to="/contact/3">contato 3</Link>
      </p>
    </div>
  );
}

export default Contact
