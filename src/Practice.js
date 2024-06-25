import React, { useState, useRef, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { TypeAnimation } from 'react-type-animation';
import { toast } from 'react-toastify';
// import { useLocation, Link } from 'react-router-dom';
import SuccessDrawer from './components/SuccessDrawer';
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import useSound from 'use-sound';
import buttonClickSound from "./sounds/button-click-sound.mpeg";
import correctAnswerSound from "./sounds/success-sound-two.mp3";
import wrongAnswerSound from "./sounds/wrong-answer.mp3";


const Practice = ({ teluguText, englishText, audioSrc, taskCompletion, sentensesCount, sentenseNumber }) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
//   const [playButtonClickSound] = useSound(buttonClickSound);
  const [playCorrectAnswerSound] = useSound(correctAnswerSound);
  const [playWrongAnswerSound] = useSound(wrongAnswerSound);
  const [isVoicePlaying, setIsVoicePlaying] = useState(true);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [playSentense, { stop, isPlaying }] = useSound(audioSrc, {
    interrupt: true,
    onend: () => {
        console.log('Audio finished playing');
        // You can perform actions here when the audio finishes playing
    },
  });


  useEffect(() => {
    playSentense();
  }, [])


  const handleAudioPlay = () => {
    // alert('HELLO');
    playSentense();
  }


  useEffect(() => {
    resetTranscript();
    setIsOpen(false);
  }, [englishText])

  const handleCheck = () => {
    if (englishText.includes(transcript.toLowerCase())) {
      setIsOpen(true);
      playCorrectAnswerSound();
    } else {
      toast.error("Wrong Answer, Try Again!", {
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        theme: "colored",
      })
      playWrongAnswerSound();
    }
  }


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div style={{ height: '100dvh' }} className="p-4 flex flex-col">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-black text-green-600">
          <span>Habitual</span>
          <span className="mx-2">-</span>
          <span className="text-2xl tracking-wide" style={{ fontFamily: 'Ramabhadra' }}>అలవాటు</span>
        </h2>
      </div>

      <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700 mb-10">
        <div className="bg-green-500 text-xs font-medium text-white text-center p-1.5 leading-none rounded-full" style={{ width: `${taskCompletion}%`, textWrap: 'nowrap' }}>
          {sentensesCount} / {sentenseNumber} 
            {/* {(sentense / allSentensesData.length) * 100} */}
        </div>
      </div>

      <div className="flex mb-8">
        <div className="flex-shrink-0">
          <img src="https://ik.imagekit.io/42vct06fb/Screenshot%202023-12-21%20084732_QGfzIctlb.png" style={{ height: '110px' }} />
        </div>
        <div className="flex-grow">
          <div className="px-4 py-2 rounded-xl shadow border-2 border-green-500 rounded-tl-none h-full w-full flex justify-center items-center">
            <span className="flex items-start">
              <AiFillSound className="flex-shrink-0 mr-1" size="1.6rem" onClick={handleAudioPlay} />
              <span className="text-xl text-center" style={{ fontFamily: 'Ramabhadra' }}>{teluguText}</span>
              {/* <TypeAnimation
                sequence={[
                  teluguText
                ]}
                wrapper="span"
                speed={150}
                className="text-xl text-center"
                style={{ fontFamily: 'Ramabhadra' }}
                cursor={false}
              /> */}
            </span>
          </div>
        </div>

        <iframe src={audioSrc} allow="autoplay" style={{ display: "none" }} id="iframeAudio">
        </iframe>
      </div>

      <div className="flex-grow">

        <form className="h-full">
          <textarea
            className="border-2 w-full p-6 text-xl rounded-lg h-full transcript-output"
            value={transcript?.toLowerCase()}
            disabled
          ></textarea>
        </form>

      </div>

      <div className="my-14">
        <span className="relative flex h-20 w-20 mx-auto">
          <span className={`${listening ? 'animate-ping' : ''} absolute inline-flex h-full w-full rounded-full bg-green-600`}></span>
          {listening ? (
            <button
              className="relative inline-flex justify-center items-center rounded-full h-20 w-20 bg-green-500 border-4 border-green-500"
              onClick={SpeechRecognition.stopListening}
            >
              <FaMicrophoneAltSlash size="2.2rem" color="#fff" />
            </button>
          ) : (
            <button
              className="relative inline-flex justify-center items-center rounded-full h-20 w-20 bg-green-500 border-4 border-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={SpeechRecognition.startListening}
              // disabled={isVoicePlaying}
            >
              <FaMicrophoneAlt size="2.2rem" color="#fff" />
              {/* {isVoicePlaying ? 'playing' : 'Not Playing'} */}
            </button>
          )}
        </span>
      </div>

      <button
        className="bg-green-500 text-white px-4 py-3 w-full rounded font-bold border-b-4 border-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleCheck}
        disabled={!transcript}
      >
        Check Now
      </button>
      <SuccessDrawer isOpen={isOpen} setIsOpen={setIsOpen} nextSentenseNumber={sentenseNumber + 2} />
    </div>
  )
};

export default Practice;
