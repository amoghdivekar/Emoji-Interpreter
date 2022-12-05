import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🫶": "Heart Hands",
  "❤️": "Red Heart",
  "🥹": "Face Holding Back Tears",
  "✨": "Sparkles",
  "😊": "Smiling",
  "😳": "Disbelief",
  "🔥": "Fire",
  "😔": "Sad",
  "🥡": "Takeout box",
  "😑": "Annoyance"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojis</h1>

      <input
        onChange={emojiInputHandler}
        placeholder="Put an emoji here to know its meaning"
      />

      <h2 className="App-input"> {meaning} </h2>

      <h3 style={{ color: "black", padding: "0.5rem" }}>Emojis we know: </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
