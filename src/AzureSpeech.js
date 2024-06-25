// React component that uses speech synthesis
import React, { useEffect, useState } from "react";
import { SpeechSynthesisOutputFormat, SpeechConfig, AudioConfig, SpeechSynthesizer } from "microsoft-cognitiveservices-speech-sdk";

function SpeechSynthesis() {
  // State variable to store the result of the speech synthesis
  const [result, setResult] = useState(null);

  // Function to synthesize speech using the package
  function synthesizeSpeech() {
    // Replace "YourSubscriptionKey" and "YourServiceRegion" with your Azure key and region
    // e.g. const speechConfig = SpeechConfig.fromSubscription("29f3f317abe376fd3b2a9b773112646d", "westeurope");
    const speechConfig = SpeechConfig.fromSubscription(
      "64d696680c7d492a9202ab7aac2ec80f",
      "centralindia"
    );
    speechConfig.speechSynthesisOutputFormat =
      SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3;

    // Set Telugu voice name, replace "YourTeluguVoiceName" with the actual Telugu voice name from your Azure region
    // Male te-IN-MohanNeural
    // Female te-IN-ShrutiNeural
    speechConfig.speechSynthesisVoiceName = "te-IN-MohanNeural";

    const audioConfig = AudioConfig.fromAudioFileOutput("output.mp3");

    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
      "తెలుగు కవితలు, తెలుగు పద్యాలు, తెలుగు మాటలు, పాటలు, తెలుగుతనం అంటేనే అమృతం తాగినంత అనుభూతి మన తెలుగువారికి",
      (result) => {
        if (result) {
          console.log("Success");
          console.log(JSON.stringify(result));
          // Set the result state with the result of the speech synthesis
          setResult(result);
        }
        synthesizer.close();
      },
      (error) => {
        console.log("Error");
        console.log(error);
        synthesizer.close();
      }
    );
  }

  // Use the useEffect hook to call the synthesizeSpeech function when the component mounts
  useEffect(() => {
    synthesizeSpeech();
  }, []);

  // Return the JSX code to render the component
  return (
    <div>
      <h1>Speech Synthesis Example</h1>
      {result ? (
        <p>The speech synthesis was successful. Check the output.mp3 file.</p>
      ) : (
        <p>The speech synthesis is in progress...</p>
      )}
    </div>
  );
}

export default SpeechSynthesis;
