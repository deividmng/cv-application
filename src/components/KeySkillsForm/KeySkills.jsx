import { useState } from "react";

function KeySkillsForm({ setKeySkills, keySkills }) {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setKeySkills((prevSkills) => [...prevSkills, newSkill]);
      setNewSkill(""); // Limpiar el campo de texto
    }
  };

  const handleDeleteSkill = (index) => {
    setKeySkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Key Skills</h3>
      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Add a key skill"
      />
      <button onClick={handleAddSkill} className="btn btn-primary mt-2">Add Skill</button>

      {keySkills.length > 0 && (
        <ul className="mt-3">
          {keySkills.map((skill, index) => (
            <li key={index}>
              {skill} <button onClick={() => handleDeleteSkill(index)} className="btn btn-danger btn-sm ml-2">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KeySkillsForm;
