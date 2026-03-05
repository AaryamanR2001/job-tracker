import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/styles.css";
import "../css/apply.css";

function Apply() {
  const [form, setForm] = useState({
    company: "",
    position: "",
    appDate: "",
    status: "Applied",
    notes: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/applications", form);
      setMessage("Application added!");
      setForm({
        company: "",
        position: "",
        appDate: "",
        status: "Applied",
        notes: ""
      });
    } catch {
      setMessage("Error adding application :(");
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="navInner">
          <div className="brand">Job Application Tracker</div>
          <div className="navLinks">
            <Link to="/" className="navButton">Home</Link>
            <Link to="/apply" className="navButton active">Apply</Link>
            <Link to="/tracker" className="navButton">Tracker</Link>
          </div>
        </div>
      </nav>

      <div className="page">
        <h2 className="pageTitle">Add a new application!</h2>

        <main>
          <div className="formCard">
            <form onSubmit={handleSubmit}>
              <label>Company Name</label>
              <input type="text" name="company" value={form.company} onChange={handleChange} required />

              <label>Position</label>
              <input type="text" name="position" value={form.position} onChange={handleChange} required />

              <label>Application Date</label>
              <input type="date" name="appDate" value={form.appDate} onChange={handleChange} required />

              <label>Status</label>
              <select name="status" value={form.status} onChange={handleChange} required>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer Received">Offer Received</option>
              </select>

              <label>Notes</label>
              <textarea name="notes" rows="3" value={form.notes} onChange={handleChange}></textarea>

              <button type="submit">Submit Application</button>
            </form>

            {message && <p>{message}</p>}
          </div>
        </main>
      </div>
    </>
  );
}

export default Apply;
