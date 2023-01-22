import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
// import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const Router = () => {
  const auth = useSelector((state) => state.auth.isSignIn)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        {auth ? (
          <>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/lists/:listId/tasks/:taskId" element={<EditTask />} /> */}
          </>
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
