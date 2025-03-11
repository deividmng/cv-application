function PersonalInfo({ personalInfo, setPersonalInfo }) {
    return (
      <div>
        <h3>Personal Information</h3>
        <textarea
          value={personalInfo}
          onChange={(e) => setPersonalInfo(e.target.value)}
          placeholder="Write about yourself..."
          rows="5"
          cols="40"
        />
      </div>
    );
  }
  
  export default PersonalInfo;
  