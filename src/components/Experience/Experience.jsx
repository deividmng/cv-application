import { useState } from "react";

function ExperienceForm({ setExperienceData, experienceData, deleteExperience }) {
  const [experience, setExperience] = useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceData(experience);
    setExperience({
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <div>
      <h3>Work Experience</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={experience.jobTitle}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={experience.company}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={experience.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Experience</button>
      </form>

      {/* Lista de experiencias con botón de eliminar */}
      <h4>Added Experience</h4>
      {experienceData.length > 0 ? (
        <ul>
          {experienceData.map((exp, index) => (
            <li key={index}>
              <p>
                <strong>Job:</strong> {exp.jobTitle} | 
                <strong> Company:</strong> {exp.company} | 
                <strong> Start:</strong> {exp.startDate} | 
                <strong> End:</strong> {exp.endDate}
              </p>
              <p><strong>Description:</strong> {exp.description}</p>
              <button onClick={() => deleteExperience(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No experience added yet.</p>
      )}
    </div>
  );
}

export default ExperienceForm;
