import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const handleSynthesize = async () => {
    try {
      const response = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=YOUR_GOOGLE_CLOUD_API_KEY`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            input: {
              text,
            },
            voice: {
              languageCode: 'te-IN',
              name: 'te-IN-Wavenet-D',
              ssmlGender: 'NEUTRAL',
            },
            audioConfig: {
              audioEncoding: 'LINEAR16',
            },
          }),
        }
      );

      const data = await response.json();

      if (data.audioContent) {
        const audioBlob = new Blob([Buffer.from(data.audioContent, 'base64')], {
          type: 'audio/wav',
        });
        const audioUrl = URL.createObjectURL(audioBlob);

        const audio = new Audio(audioUrl);
        audio.play();
      } else {
        console.error('Error synthesizing speech:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSynthesize}>Synthesize</button>
    </div>
  );
};

export default App;
