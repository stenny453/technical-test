import React from 'react';
import './styles.css';

export default function Component() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Oops!, doesn't work, check /challenges/06-switch-theme to solve this issue");
    setChecked(e.target.checked);
  };

  return (
    <div className="theme-toggle-container">
      <input className="theme-toggle" type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
}
