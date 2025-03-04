import { useState } from "react";
import Header from "./components/Header/Header";
import CVForm from "./components/CvGeneralInfo/General";
import CVPreview from "./components/CvPreview/CVPreview";
import EducationForm from "./components/Education/Education";
import ExperienceForm from "./components/Experience/Experience";

function App() {
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    portfolio: "",
  });

  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const addEducation = (newEducation) => {
    setEducationData((prevData) => [...prevData, newEducation]);
  };

  const addExperience = (newExperience) => {
    setExperienceData((prevData) => [...prevData, newExperience]);
  };

  // 🔴 Nueva función para eliminar una educación
  const deleteEducation = (index) => {
    setEducationData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // 🔴 Nueva función para eliminar una experiencia
  const deleteExperience = (index) => {
    setExperienceData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <CVForm cvData={cvData} setCvData={setCvData} />
      <CVPreview
        cvData={cvData}
        educationData={educationData}
        experienceData={experienceData}
      />
      <EducationForm 
        setEducationData={addEducation} 
        educationData={educationData} 
        deleteEducation={deleteEducation}
      />
      <ExperienceForm 
        setExperienceData={addExperience} 
        experienceData={experienceData} 
        deleteExperience={deleteExperience} 
      />
    </div>
  );
}

export default App;
