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
    <div>
      <h3>Education Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="school"
          value={education.school}
          onChange={handleChange}
          placeholder="School"
          required
        />
        <input
          type="text"
          name="degree"
          value={education.degree}
          onChange={handleChange}
          placeholder="Degree"
          required
        />
        <input
          type="text"
          name="graduationYear"
          value={education.graduationYear}
          onChange={handleChange}
          placeholder="Graduation Year"
          required
        />
        <button type="submit">Add Education</button>
      </form>

      {/* Lista de entradas de educación con botón de borrar */}
      <h4>Added Education</h4>
      {educationData.length > 0 ? (
        <ul>
          {educationData.map((edu, index) => (
            <li key={index}>
              <p>
                <strong>School:</strong> {edu.school} | 
                <strong> Degree:</strong> {edu.degree} | 
                <strong> Year:</strong> {edu.graduationYear}
              </p>
              <button onClick={() => deleteEducation(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No education added yet.</p>
      )}
    </div>
  );
}

export default EducationForm;
