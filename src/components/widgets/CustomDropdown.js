import React from 'react';


const CustomDropdown = ({ value, setValue, options, width}) => {
  // const [props,selectedOption, setSelectedOption] = useState('');


  const handleOptionClick = (event) => {
    setValue(event.target.value);

  }

  return (
    <div className="custom-dropdown">
      {/* <button className="dropdown-toggle" onClick={() => setShowOptions(!showOptions)}>
        {props.selectedOption ? props.selectedOption : <span style={{color: 'rgb(178, 178, 180)'}}>Select an option</span>}
        <span className="dropdown-icon">&#9660;</span>
      </button>
      {showOptions && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      */}

      <select
        className="select-css"
        value={value}
        onChange={handleOptionClick}
        style={{ width: width }}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomDropdown;