import React, { useState } from 'react';

export function Content() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(text);
  };

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
    setDisplayText('');
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextAreaChange} />
      <br /><br />
      <button onClick={handleButtonClick}>Update Text</button>
      <br /><br /><br />
      {displayText && <div>{displayText}</div>}

      <hr />
    </div>
  );
}


export default Content;