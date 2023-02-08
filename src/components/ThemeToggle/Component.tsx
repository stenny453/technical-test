import React from 'react';
import { ThemeContext, ThemeValue } from '../contexts/ThemeContext';
import './styles.css';

export default function Component() {
  const [checked, setChecked] = React.useState(true);

  const { setTheme } = React.useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    // setTheme(e.target.checked); // can use for boolean

    setTheme(checked ? 'light' : 'dark');

    setChecked(e.target.checked);
  };

  return (
    <div className="theme-toggle-container">
      <input className="theme-toggle" type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
}
