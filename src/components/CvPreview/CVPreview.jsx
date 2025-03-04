function CVPreview({ cvData, educationData, experienceData, deleteExperience,deleteEducation }) {
  return (
    <div>
      <h2>CV Preview</h2>
      <p><strong></strong> {cvData.name}</p>
      <p><strong>Email:</strong> {cvData.email}</p>
      <p><strong>Phone:</strong> {cvData.phone}</p>

      {/* GitHub */}
      {cvData.github && (
        <p>
          <strong>GitHub:</strong>{" "}
          <a href={cvData.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      )}

      {/* LinkedIn */}
      {cvData.linkedin && (
        <p>
          <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      )}

      {/* Portfolio */}
      {cvData.portfolio && (
        <p>
          <strong>Portfolio:</strong>{" "}
          <a href={cvData.portfolio} target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </p>
        
      )
      }
      

      {/* Education Section */}
      <h3>Education</h3>
      {educationData.length > 0 ? (
        <ul>
          {educationData.map((education, index) => (
            <li key={index}>
              <p><strong>School:</strong> {education.school}</p>
              <p><strong>Degree:</strong> {education.degree}</p>
              <p><strong>Graduation Year:</strong> {education.graduationYear}</p>
              <button onClick={() => deleteEducation(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No education data available.</p>
      )}

      {/* Experience Section */}
      <h3>Work Experience</h3>
      {experienceData.length > 0 ? (
        <ul>
          {experienceData.map((exp, index) => (
            <li key={index}>
              <p><strong>Job Title:</strong> {exp.jobTitle}</p>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Start Date:</strong> {exp.startDate}</p>
              <p><strong>End Date:</strong> {exp.endDate}</p>
              <p><strong>Description:</strong> {exp.description}</p>
              <button onClick={() => deleteExperience(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No work experience available.</p>
      )}
    </div>
  );
}

export default CVPreview;
