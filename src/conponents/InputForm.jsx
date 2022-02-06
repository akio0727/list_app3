import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export const InputForm = ({ onChange, inputText }) => {
  //setTextを使うことでtextに追加していくことができる。
  //inputタグに打ち込んだ情報をどう管理するか？

  return (
    <div className="inputform">
      <input
        onChange={onChange}
        className="input_box"
        type="text"
        value={inputText}
        placeholder="本を読む"
      />
      <button className="plue_sbutton">
        <FaPlusCircle />
      </button>
    </div>
  );
};
