import { useEffect, useState } from "react";
import axios from "axios";
import "../css/tracker.css";
import "../css/styles.css";

function Tracker() {
  const [applications, setApplications] = useState([]);
  const [message, setMessage] = useState("");

  const loadApplications = async () => {
    try {
      const res = await axios.get("http://localhost:8080/applications");
      setApplications(res.data);
      setMessage("");
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
  <div className="pageContent">
    <h2 className="pageTitle">My Applications</h2>

    {message && <div id="message">{message}</div>}

    {applications.length === 0 ? (
      <div className="emptyBanner">No applications yet.</div>
    ) : (
      <div className="card trackerCard">
        <div id="applications">
          {applications.map((app) => (
            <div key={app._id} className="application-card">
              <h3>
                {app.position} @ {app.company}
              </h3>
              <p>Date: {app.appDate}</p>
              <p>Status: {app.status}</p>
              <p>Notes: {app.notes || "None"}</p>

              <button onClick={() => deleteApplication(app._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);
}

export default Tracker;