import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/styles.css";
import "../css/tracker.css";

function Tracker() {
  const [applications, setApplications] = useState([]);
  const [message, setMessage] = useState("");

  const loadApplications = async () => {
    try {
      const res = await axios.get("http://localhost:8080/applications");
      setApplications(res.data);
    } catch {
      setMessage("Error loading applications");
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const deleteApplication = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/applications/${id}`);
      setMessage("Application deleted!");
      loadApplications();
    } catch {
      setMessage("Error deleting application");
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="navInner">
          <div className="brand">Job Application Tracker</div>
          <div className="navLinks">
            <Link to="/" className="navButton">Home</Link>
            <Link to="/apply" className="navButton">Apply</Link>
            <Link to="/tracker" className="navButton active">Tracker</Link>
          </div>
        </div>
      </nav>

      <h2>My Applications</h2>
      {message && <div>{message}</div>}

      <div id="applications">
        {applications.length === 0 && (
          <div className="navButton">No applications yet.</div>
        )}

        {applications.map(app => (
          <div key={app._id} className="application-card">
            <h3>{app.position} @ {app.company}</h3>
            <p>Date: {app.appDate}</p>
            <p>Status: {app.status}</p>
            <p>Notes: {app.notes || "None"}</p>
            <button onClick={() => deleteApplication(app._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tracker;
