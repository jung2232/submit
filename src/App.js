// eslint-disable
import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["리액트를 배워보자", "배우자!!"]);

  const [userValue, setUserValue] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setUserValue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(userValue);
          setTitle(copy);
        }}
      >
        추가하기
      </button>

      {title.map(function (a, i) {
        return (
          <div className="render">
            <div className="user">{title[i]}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
