import React, { useState } from 'react';

const TransliterateComponent = () => {
  const [englishText, setEnglishText] = useState('');
  const [teluguText, setTeluguText] = useState('');

  const handleInputChange = (event) => {
    setEnglishText(event.target.value);
  };

  const transliterateText = () => {
    // Replace 'YOUR_API_KEY' with your actual Google Input Tools API key
    // const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://inputtools.google.com/request?text=${encodeURIComponent(
      englishText
    )}&ime=transliteration_en_te`;

    // &key=${apiKey}

    fetch(apiUrl, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        const teluguResult = data[1]?.[0]?.[1]?.[0] || '';
        // console.log(data[1]?.[0]?.[1]?.[0])
        setTeluguText(teluguResult);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <label>
        English Text:
        <input type="text" value={englishText} onChange={handleInputChange} />
      </label>
      <button onClick={transliterateText}>Transliterate</button>
      <div>
        <label>Telugu Text:</label>
        <div>{teluguText}</div>
      </div>
    </div>
  );
};

export default TransliterateComponent;
