import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
// import axios from "axios";
import { Header } from "../components/Header";
// import { url } from "../const";
import "./home.scss";


export const Home = () => {
  // const [isDoneDisplay, setIsDoneDisplay] = useState("todo"); // todo->未完了 done->完了
  // const [selectListId, setSelectListId] = useState();
  // const [errorMessage, setErrorMessage] = useState("");
  const [cookies] = useCookies(["token"]);
  // const handleIsDoneDisplayChange = (e) => setIsDoneDisplay(e.target.value);

  // useEffect(() => {
  //   axios.get(`${url}/lists`, {
  //     headers: {
  //       authorization: `Bearer ${cookies.token}`
  //     }
  //   })
  //   .then((res) => {
  //     setLists(res.data)
  //   })
  //   .catch((err) => {
  //     setErrorMessage(`リストの取得に失敗しました。${err}`);
  //   })
  // }, []);

  // useEffect(() => {
  //   const listId = lists[0]?.id
  //   if(typeof listId !== "undefined"){
  //     setSelectListId(listId)
  //     axios.get(`${url}/lists/${listId}/tasks`, {
  //       headers: {
  //         authorization: `Bearer ${cookies.token}`
  //       }
  //     })
  //     .then((res) => {
  //       setTasks(res.data.tasks)
  //     })
  //     .catch((err) => {
  //       setErrorMessage(`タスクの取得に失敗しました。${err}`);
  //     })
  //   }
  // }, [lists]);

  // const handleSelectList = (id) => {
  //   setSelectListId(id);
  //   axios.get(`${url}/lists/${id}/tasks`, {
  //     headers: {
  //       authorization: `Bearer ${cookies.token}`
  //     }
  //   })
  //   .then((res) => {
  //     setTasks(res.data.tasks)
  //   })
  //   .catch((err) => {
  //     setErrorMessage(`タスクの取得に失敗しました。${err}`);
  //   })
  // }
  return (
    <div>
      <Header />
      <main className="taskList">
        {/* <p className="error-message">{errorMessage}</p> */}
        <p>homeですよ</p>
        <p>{ cookies.token }</p>
        <div>
        </div>
      </main>
    </div>
  )
}
