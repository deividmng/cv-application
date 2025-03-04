function CVForm({ cvData, setCvData }) {
  // Function to update state on input change
  const handleChange = (e) => {
    setCvData({
      ...cvData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={cvData.name}
        onChange={handleChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={cvData.email}
        onChange={handleChange}
      />

      <label>Phone:</label>
      <input
        type="text"
        name="phone"
        value={cvData.phone}
        onChange={handleChange}
      />
     <label>GitHub:</label>
<input
  type="url"
  name="github"
  value={cvData.github}
  onChange={handleChange}
/>

<label>LinkedIn:</label>
<input
  type="url"
  name="linkedin"
  value={cvData.linkedin}
  onChange={handleChange}
/>

<label>Portfolio:</label>
<input
  type="url"
  name="portfolio"
  value={cvData.portfolio}
  onChange={handleChange}
/>

    </form>
  );
}

export default CVForm;
