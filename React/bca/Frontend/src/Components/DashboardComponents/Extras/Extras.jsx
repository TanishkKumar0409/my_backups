import React from "react";
import Messages from "./Messages/Messages";
import ToDoList from "./ToDoList/ToDoList";
import Notification from "./Notification/Notification";

export default function Extras() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <Messages />
          <Notification />
          <ToDoList />
        </div>
      </div>
    </>
  );
}
