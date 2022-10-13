import { useState } from "react";
import "./styles.css";
var headingText = "Emoji Interpreter";
var color = "orange";


const emojiDictionary = {
  "😀": "Grinning Face",
  "😆": "Grinning Squinting Face",
  "🚀": "Rocket",
  "⭐": "Star",
  "🤣": "Rolling on the Floor Laughing",
  "🙂": "Slightly Smiling Face",
  "👻": "Ghost",
  "🙃": "Upside-Down Face",
  "🤔": "Thinking Face",
  "😅": "Grinning Face with Sweat",
  "😁": "Beaming Face with Smiling Eyes",
  "🥳": "Partying Face"
};
var emojis = Object.keys(emojiDictionary);
export default function App() {
  const [means, setMeans] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    

    if (meaning === undefined) {
      meaning = "we don't have this in our dictionary";
    }
    setMeans(meaning);
  }

  function emojiClickHandler(emote) {
    // var inputEmote = emote.target.value;
    var meaning1 = emojiDictionary[emote];
    setMeans(meaning1);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <input onChange={emojiInputHandler} />
      <p style={{ fontWeight: "bold" }}>
        meaning:
        {/* actual output  */}
        <span style={{ fontWeight: "lighter" }}>{means}</span>
      </p>
      <h2>Emojis to select </h2>
      {emojis.map((item) => {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.2rem", cursor: "pointer" }}
          >
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
