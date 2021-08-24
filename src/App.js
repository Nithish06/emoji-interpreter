import { useState } from "react";
import "./styles.css";

var emojiData = {
  "😀": "grinning",
  "🤣": "rofl-rolloing on the floor laughing",
  "😅": "sweat smile",
  "😊": "blushed",
  "😍": "heart eyes",
  "🤩": "start struck",
  "🙄": "rolling eyes",
  "😥": "cry",
  "🙈": "See-No-Evil Monkey",
  "🦍": "Gorilla",
  "🐱": "Cat Face",
  "😣": "persevere",
  "😋": "yum",
  "🤔": "thinking",
  "😏": "smirk",
  "😫": "tired face",
  "😎": "swag",
  "🤗": "hugging"
};

var emojiList = Object.keys(emojiData);
export default function App() {
  const [name, setName] = useState();
  const inputEmojiHandler = (e) => {
    var val = e.target.value;

    var meaning = emojiData[val];
    if (meaning === undefined) {
      console.log("We do not have this emoji in our database");
    }
    setName(meaning);
  };
  const clickHandler = (item) => {
    console.log("clicked", item);
    var meaning = emojiData[item];
    setName(meaning);
  };
  return (
    <div className="App">
      <h1>Know Your Emojis</h1>
      <input
        placeholder="Enter the Emoji here"
        onChange={inputEmojiHandler}
      ></input>
      <br />
      <h5>{name}</h5>
      <p>Try clicking on these emojis</p>
      {emojiList.map((item) => {
        return (
          <span
            style={{ fontSize: "5rem", cursor: "pointer" }}
            onClick={() => {
              clickHandler(item);
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
