// import React, { useState, useEffect } from 'react';
// import translate from 'translate-google-api';

// function GoogleTranslate() {
//   const [inputSentence, setInputSentence] = useState('where do you play cricket');
//   const [outputSentence, setOutputSentence] = useState('');

//   useEffect(() => {
//     async function translateText() {
//       try {
//         const translatedText = await translate(inputSentence, { to: 'te' });
//         setOutputSentence(translatedText);
//       } catch (error) {
//         console.error('Translation error:', error);
//       }
//     }

//     translateText();
//   }, [inputSentence]);

//   return (
//     <div>
//       <p>Input: {inputSentence}</p>
//       <p>Output: {outputSentence}</p>
//     </div>
//   );
// }

// export default GoogleTranslate;

// translationService.js
// Your React component
import React, { useState } from 'react';
import translateText from './translationService';

const YourComponent = () => {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const targetLanguage = 'te'; // Change to your desired target language code

  const handleTranslate = async () => {
    try {
      const translationResult = await translateText(originalText, targetLanguage);
      setTranslatedText(translationResult);
    } catch (error) {
      // Handle translation error
    }
  };

  return (
    <div>
      <textarea value={originalText} onChange={(e) => setOriginalText(e.target.value)} />
      <button onClick={handleTranslate}>Translate</button>
      <div>
        <p>Translated Text:</p>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default YourComponent;


