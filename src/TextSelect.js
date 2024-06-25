import React, { useRef } from 'react';

function MyComponent() {
  // Create a ref for the textarea element
  const textareaRef = useRef(null);

  // Function to handle button click and get selected text
  const handleButtonClick = () => {
    if (textareaRef.current) {
      // Get the selected text using selectionStart and selectionEnd
      console.log(textareaRef?.current?.value)
      // const selectedText = textareaRef?.current?.value?.substring(
      //   textareaRef.current.selectionStart,
      //   textareaRef.current.selectionEnd
      // );



      // Do something with the selected text
      // console.log('Selected Text:', selectedText);
    }
  };

  return (
    <div>
      {/* Textarea element with ref */}
      <textarea 
        ref={textareaRef} 
        value="Cricket isn't a game I play.
Playing cricket isn't my preference.
I refrain from playing cricket.
I'm not involved in cricket games.
Cricket isn't one of my pastimes.
I abstain from participating in cricket.
I'm not a player of cricket.
Cricket isn't on my list of activities.
Engaging in cricket isn't my choice."
style={{ resize: 'both', overflow: 'auto' }}
></textarea>

      {/* Button to trigger getting selected text */}
      <button onClick={e => {}}>Get Selected Text</button>
    </div>
  );
}

export default MyComponent;
