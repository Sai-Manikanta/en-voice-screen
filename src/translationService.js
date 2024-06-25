// translationService.js
import axios from 'axios';

// const API_KEY = 'AIzaSyDGkRPzkOCqlOMiIBYO5lMHy4rFvAI1IBw';
// const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const translateText = async (text) => {
  try {
    const response = await axios.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyDGkRPzkOCqlOMiIBYO5lMHy4rFvAI1IBw", {
        q: text,
        target: "te",
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
};

export default translateText;
