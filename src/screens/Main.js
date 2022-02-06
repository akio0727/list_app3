import React, { useState } from "react";
import { InputForm } from "../conponents/InputForm";
import { TodoList } from "../conponents/TodoList";

export const Main = () => {
  const [tasklist, settasklist] = useState([]);
  console.log("tasklist", tasklist);
  const handleDelete = (id) => {
    settasklist(tasklist.filter((task) => task.id !== id));
  };

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    /*eという引数、これはイベントのe*/
    e.preventDefault(); //これで再レンダリングの機能がなくなる
    //console.log("a");

    /*inputに打ち込んだ文字をコンソールに出力したい*/
    //console.log(inputText);//エンターキーを推して初めてデータを受け取る。
    /*次にやりたいことはタスクを追加する*/

    settasklist([
      ...tasklist, //スプレッド構文で、最初は空の情報を渡して、そこから下のオブジェクトを追加するつまり、以前の情報を持ってくる。
      {
        id: tasklist.length, //タスクの長さ、配列をIDに割り振る0,1,2と
        text: inputText,
      },
    ]);
    //console.log(tasklist);
    //入力した文字を消す
    setInputText(""); //valueで持っているので、inputにvalueを定義する
  };

  const handleChange = (e) => {
    /*打ち込んだ情報をどう取得するのか？inputタグ,打ち込む度のイベント要素のe
    onChangeプロパティは変化する度に呼ばれる関数*/
    //var inputText = e.target.value; //e.target.value;は今打ち込んでる文字の情報の取得になる。
    //console.log(inputText);
    setInputText(e.target.value);
    //onsole.log(inputText); //ちゃんとsetInputtextで状態を管理されているのか？
  };
  return (
    <div className="todoapp_box">
      <form onSubmit={handleSubmit}>
        <InputForm
          onChange={handleChange}
          list={tasklist}
          /*これで上記のtext setTextをInputFormでも使える。*/
        />
      </form>
      <hr></hr>
      <div className="todolist">
        <div className="todos">
          {tasklist.map((task, index) => (
            <div className="todo" key={index}>
              <TodoList task={task} onClick={() => handleDelete(task.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
