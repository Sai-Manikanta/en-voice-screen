import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import queryString from 'query-string';
import Practice from './Practice';

// VOICES
import audioSrcOne from "./voice-clips/which-movie-did-you-see.m4a";
import audioSrcTwo from "./voice-clips/when-will-he-come.m4a";
import audioSrcThree from "./voice-clips/which-book-did-he-buy.mp3";
import audioSrcFour from "./voice-clips/how-did-he-fix-bug.m4a";
import audioSrcFive from "./voice-clips/he-does-not-eat-non-veg.mp3";
import audioSrcSix from "./voice-clips/she-will-cook-biryani-tomarrow.mp3";
import audioSrcSeven from "./voice-clips/does-it-work.m4a";
import audioSrcEight from "./voice-clips/i-can-drive-car.m4a";
import audioSrcNine from "./voice-clips/where-did-they-go.mp3";
import audioSrcTen from "./voice-clips/where-do-you-play-cricket.mp3";

import 'react-toastify/dist/ReactToastify.css';

const allSentensesData = [
  {
    audioSrc: audioSrcOne,
    teluguText: 'మీరు ఏ మూవీ చూసారు?',
    englishText: ['which movie did you watch', 'which movie did you see']
  },
  {
    audioSrc: audioSrcTen,
    teluguText: 'మీరు క్రికెట్ ఎక్కడ ఆడుతారు?',
    englishText: ['where do you play cricket']
  },
  {
    audioSrc: audioSrcNine,
    teluguText: 'వాళ్ళు ఎక్కడికి వెళ్లారు?',
    englishText: ['where did they go', 'where they went']
  },
  {
    audioSrc: audioSrcSix,
    teluguText: 'ఆమె రేపు బిర్యానీ వండుతుంది',
    englishText: ['she will cook biryani tomorrow']
  },
  {
    audioSrc: audioSrcFive,
    teluguText: 'అతను మాంసాహారం తినడు',
    englishText: ['he does not eat non veg', "he doesn't eat non veg"]
  },
  {
    audioSrc: audioSrcThree,
    teluguText: 'అతను ఏ పుస్తకం కొన్నాడు?',
    englishText: ['which book did he buy', 'which book he bought']
  },
  {
    audioSrc: audioSrcSeven,
    teluguText: 'ఇది పని చేస్తుందా?',
    englishText: ['does it work']
  },
  {
    audioSrc: audioSrcEight,
    teluguText: 'నేను కార్ డ్రైవ్ చేయగలను',
    englishText: ['i can drive car']
  },
  {
    audioSrc: audioSrcTwo,
    teluguText: 'అతను ఎప్పుడు వస్తాడు?',
    englishText: ['when will he come']
  },
  {
    audioSrc: audioSrcFour,
    teluguText: 'అతను బగ్ ఎలా ఫిక్స్ చేసాడు?',
    englishText: ['how did he fix bug']
  },
];

const AudioPlayer = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const sentense = Number(queryParams.sentense);

  const data = allSentensesData[sentense - 1];

  if(!data){
    return (
      <Link to="/?sentense=1">Sentense 1</Link>
    )
  }

  const { teluguText, englishText, audioSrc } = data;

  return(
    <>
     <Practice 
      teluguText={teluguText} 
      englishText={englishText} 
      audioSrc={audioSrc} 
      sentensesCount={allSentensesData.length}
      sentenseNumber={sentense - 1}
      taskCompletion={((sentense - 1) / allSentensesData.length) * 100} 
      />
      <ToastContainer />
    </>
  )
};

export default AudioPlayer;
