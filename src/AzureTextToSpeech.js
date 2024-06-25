import React, { useState } from 'react';

const AzureTextToSpeech = () => {
  const [audioUrl, setAudioUrl] = useState('');
  const [textToSpeech, setTextToSpeech] = useState('హలో, ఈ టెక్స్ట్-టు-స్పీచ్ పరీక్ష.');

  const handleConvertTextToSpeech = async () => {
    try {
        // https://centralindia.api.cognitive.microsoft.com/
      const response = await fetch(`https://centralindia.api.cognitive.microsoft.com/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ssml+xml',
          // 'Authorization': 'Bearer 64d696680c7d492a9202ab7aac2ec80f',
        },
        body: `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="te-IN">
                <voice name="te-IN-NarayanaNeural">${textToSpeech}</voice>
              </speak>`,
      });

      if (response.ok) {
        // Assuming the response is an audio file in WAV format
        const audioBlob = await response.blob();
        const audioObjectUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioObjectUrl);
      } else {
        console.error('Failed to convert text to speech:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={textToSpeech}
        onChange={(e) => setTextToSpeech(e.target.value)}
      />
      <br />
      <button onClick={handleConvertTextToSpeech}>Convert to Speech</button>
      <br />
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  );
};

export default AzureTextToSpeech;
