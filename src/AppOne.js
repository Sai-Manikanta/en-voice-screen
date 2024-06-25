import React, { useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaPlay, FaStop } from 'react-icons/fa';
import audioSrc from "./voice-clips/which-movie-did-you-see.m4a";
import watchingMovie from "./images/watching-movie.jpg";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [answer, setAnswer] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const data = {
    // audioSrc: audioSrc,
    teluguText: 'మీరు ఏ మూవీ చూసారు?',
    englishText: 'which movie did you see'
  }

  const { teluguText, englishText } = data;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(englishText === transcript.toLowerCase()){
      alert('Correct')
    } else {
      alert('Wrong')
    }
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <p style={{ fontFamily: 'Noto Sans Telugu' }}>
        {teluguText}
      </p> */}
      <img src={watchingMovie} style={{ maxWidth: '200px'}} className="rounded mb-5" />
      <div className="bg-orange-600 p-4 rounded-md shadow-md rounded-full">
        <audio ref={audioRef} src={audioSrc} />

        <div className="flex items-center justify-center space-x-4">
          {isPlaying ? (
            <FaStop className="text-4xl cursor-pointer text-white" onClick={togglePlay} />
          ) : (
            <FaPlay className="text-4xl cursor-pointer text-white" onClick={togglePlay} />
          )}
        </div>
      </div>
      <div className="mt-4">


      <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded-sm mr-2" onClick={SpeechRecognition.startListening}>Start</button>
      <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded-sm mr-2" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded-sm mr-2" onClick={resetTranscript}>Reset</button>
      <p>Microphone: {listening ? 'on' : 'off'}</p>

      {/* <p>{transcript}</p> */}


        <form onSubmit={handleSubmit}>
          <input type="text" className="border px-4 py-2" value={transcript} />
          <button type="submit" className="bg-orange-500 text-white px-4 py-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AudioPlayer;
