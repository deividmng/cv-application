import { useState } from "react";
import Header from "./components/Header/Header";
import CVForm from "./components/CvGeneralInfo/General";
import CVPreview from "./components/CvPreview/CVPreview";
import EducationForm from "./components/Education/Education";
import ExperienceForm from "./components/Experience/Experience";
import PersonalInfo from "./components/PersonalInfo/Personal";
import KeySkillsForm from "./components/KeySkillsForm/KeySkills"; // Importamos el nuevo componente
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [personalInfo, setPersonalInfo] = useState("");
  const [keySkills, setKeySkills] = useState([]); // Asegúrate de inicializar keySkills como un array vacío

  const [activeTab, setActiveTab] = useState("cvForm"); // Estado para controlar la vista activa

  const addEducation = (newEducation) => {
    setEducationData((prevData) => [...prevData, newEducation]);
  };

  const addExperience = (newExperience) => {
    setExperienceData((prevData) => [...prevData, newExperience]);
  };

  const deleteEducation = (index) => {
    setEducationData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const deleteExperience = (index) => {
    setExperienceData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <Header />

      {/* Botones para cambiar de sección */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("cvForm")}>Personal Details</button>
        <button onClick={() => setActiveTab("personalInfo")}>Summary</button>
        <button onClick={() => setActiveTab("education")}>Education</button>
        <button onClick={() => setActiveTab("experience")}>Experience</button>
        <button onClick={() => setActiveTab("keySkills")}>Key Skills</button>
      </div>

      <div className="row">
        {/* Sección de formularios */}
        <div className="col-md-6">
          {activeTab === "cvForm" && <CVForm cvData={cvData} setCvData={setCvData} />}
          {activeTab === "personalInfo" && <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />}
          {activeTab === "education" && <EducationForm setEducationData={addEducation} educationData={educationData} deleteEducation={deleteEducation} />}
          {activeTab === "experience" && <ExperienceForm setExperienceData={addExperience} experienceData={experienceData} deleteExperience={deleteExperience} />}
          {activeTab === "keySkills" && <KeySkillsForm setKeySkills={setKeySkills} keySkills={keySkills} />}
        </div>

        {/* Sección de vista previa */}
        <div className="col-md-6">
          <CVPreview
            cvData={cvData}
            educationData={educationData}
            experienceData={experienceData}
            personalInfo={personalInfo}
            keySkills={keySkills}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
