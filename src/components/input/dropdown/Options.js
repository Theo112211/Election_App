import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>Select an option:</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">-- Select --</option>
        <option value="srcPresident">SRC President</option>
        <option value="nugsPresident">Nugs President</option>
        <option value="nugsSecretary">Option 3</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default Dropdown;
