import React, { useState } from 'react';
import { IndicTransliterate } from '@ai4bharat/indic-transliterate';
import '@ai4bharat/indic-transliterate/dist/index.css';

const App = () => {
  const [text, setText] = useState('');

  return (
    <IndicTransliterate
      value={text}
      onChangeText={(text) => {
        setText(text);
      }}
      lang="te"
    />
  );
};

export default App;
