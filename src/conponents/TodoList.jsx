import React from "react";
import { GoTrashcan } from "react-icons/go";

export const TodoList = ({ task, onClick }) => {
  //タスクを削除する。けどそれはどのタスクなのか？idが必要になってくる。
  //handleDaleteにidを受け取っておく
  //settasklistを使うのはtasklistの中身を削除するため、tasklistに対してfilter関数を使っている
  //filter関数のtask.id !== idこれが条件式、これはtureかfalseを返し、falseなら除外する。!== はnotイコール
  //idは下記の引数でとってきたid,task.idとは上から0、１とタスクが追加される。押されたidとtask.idで比較して同じなら削除となる。

  return (
    <div className="todotext">
      <span className="todo_name">{task.text}</span>
      <div className="icons">
        <button onClick={onClick}>
          <GoTrashcan />
        </button>
      </div>
    </div>
  );
};
