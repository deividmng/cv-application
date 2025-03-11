import React from "react";
import { jsPDF } from "jspdf";

function CVPreview({ cvData, educationData, experienceData, personalInfo, keySkills }) {
  // Función para descargar el CV en formato PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.text(`CV Preview`, 10, 10);
    doc.text(`Name: ${cvData.name}`, 10, 20);
    doc.text(`Email: ${cvData.email}`, 10, 30);
    doc.text(`Phone: ${cvData.phone}`, 10, 40);

    if (cvData.github) {
      doc.text(`GitHub: ${cvData.github}`, 10, 50);
    }

    if (cvData.linkedin) {
      doc.text(`LinkedIn: ${cvData.linkedin}`, 10, 60);
    }

    if (cvData.portfolio) {
      doc.text(`Portfolio: ${cvData.portfolio}`, 10, 70);
    }

    doc.text(`Personal Information: ${personalInfo}`, 10, 80);

    // Agregar Key Skills
    doc.text('Key Skills:', 10, 100);
    keySkills.forEach((skill, index) => {
      doc.text(`${index + 1}. ${skill}`, 10, 110 + index * 10);
    });

    // Agregar Educación
    doc.text(`Education:`, 10, 150);
    educationData.forEach((education, index) => {
      doc.text(`${education.school}, ${education.degree} (${education.graduationYear})`, 10, 160 + index * 10);
    });

    // Agregar Experiencia
    doc.text(`Work Experience:`, 10, 200);
    experienceData.forEach((exp, index) => {
      doc.text(`${exp.jobTitle} at ${exp.company} (${exp.startDate} - ${exp.endDate})`, 10, 210 + index * 10);
      doc.text(`Description: ${exp.description}`, 10, 220 + index * 10);
    });

    // Guardar el archivo PDF
    doc.save("cv-preview.pdf");
  };

  return (
    <div>
      <h2>CV Preview</h2>
      <p><strong>Name:</strong> {cvData.name}</p>
      <p><strong>Email:</strong> {cvData.email}</p>
      <p><strong>Phone:</strong> {cvData.phone}</p>

      {cvData.github && (
        <p><strong>GitHub:</strong> <a href={cvData.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      )}

      {cvData.linkedin && (
        <p><strong>LinkedIn:</strong> <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      )}

      {cvData.portfolio && (
        <p><strong>Portfolio:</strong> <a href={cvData.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a></p>
      )}

      <h3>Personal Information</h3>
      <p>{personalInfo}</p>

      <h3>Key Skills</h3>
      {Array.isArray(keySkills) && keySkills.length > 0 ? (
        <ul>
          {keySkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No key skills added yet.</p>
      )}

      <h3>Education</h3>
      {educationData.length > 0 ? (
        <ul>
          {educationData.map((education, index) => (
            <li key={index}>
              <p><strong>School:</strong> {education.school}</p>
              <p><strong>Degree:</strong> {education.degree}</p>
              <p><strong>Graduation Year:</strong> {education.graduationYear}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No education data available.</p>
      )}

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
            </li>
          ))}
        </ul>
      ) : (
        <p>No work experience available.</p>
      )}

      <button onClick={downloadPDF}>Download CV as PDF</button>
    </div>
  );
}

export default CVPreview;
