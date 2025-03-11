import { useState } from "react";

function EducationForm({ setEducationData, educationData, deleteEducation }) {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    graduationYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationData(education);
    setEducation({
      school: "",
      degree: "",
      graduationYear: "",
    });
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Education Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="school" className="form-label">School</label>
          <input
            type="text"
            className="form-control"
            id="school"
            name="school"
            value={education.school}
            onChange={handleChange}
            placeholder="Enter School Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="degree" className="form-label">Degree</label>
          <input
            type="text"
            className="form-control"
            id="degree"
            name="degree"
            value={education.degree}
            onChange={handleChange}
            placeholder="Enter Degree"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="graduationYear" className="form-label">Graduation Year</label>
          <input
            type="text"
            className="form-control"
            id="graduationYear"
            name="graduationYear"
            value={education.graduationYear}
            onChange={handleChange}
            placeholder="Enter Graduation Year"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Education</button>
      </form>

      {/* Lista de entradas de educación con botón de borrar */}
      <h4 className="mt-5">Added Education</h4>
      {educationData.length > 0 ? (
        <ul className="list-group mt-3">
          {educationData.map((edu, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <p><strong>School:</strong> {edu.school}</p>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Year:</strong> {edu.graduationYear}</p>
              </div>
              <button
                onClick={() => deleteEducation(index)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3">No education added yet.</p>
      )}
    </div>
  );
}

export default EducationForm;
