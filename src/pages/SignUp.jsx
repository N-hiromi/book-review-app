import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { signIn, updateIcon } from "../authSlice";
import { useForm } from 'react-hook-form';
import { url } from "../const";
import "./signUp.scss";
import Compressor from 'compressorjs';


export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const nav = useNavigate();
  const auth = useSelector((state) => state.auth.isSignIn);
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies('token');
  const [errorMessage, setErrorMessge] = useState();

  const onSignUp = async (event) => {
    const file = event.icon[0];
    const data = {
      name: event.name,
      email: event.email,
      password: event.password
    };
    let token = '';
    const createUser = () => {
      //会員登録
      axios.post(`${url}/users`, data)
      .then((res) => {
        console.log(res);
        dispatch(signIn());
        setCookie("token", res.data.token);
        token = res.data.token;
      })
      .catch((err) => {
        setErrorMessge(`サインアップに失敗しました。 ${err}`);
        throw new Error(err.message);
      })
    }
    const createIcon = () => {
      //アイコン画像があれば登録する
      if (file){
        //画像の変換
        new Compressor(file, {
          convertSize: 900000,
          success(result){
            console.log(result);
            const formData = new FormData();
            formData.append(result.name, result);
            console.log(formData);
            const params = {
              "Content-Type": "application/xxx",
              "Authorization": token,
              "icon": formData
            }
            console.log(params);
            axios.post(`${url}/uploads`, params)
            .then((res) => {
              console.log(res);
              dispatch(updateIcon(res.data.iconUrl));
            })
            .catch((err) => {
              //画像の登録に失敗したらアカウントの登録や更新にも失敗する
              setErrorMessge(`画像の登録に失敗しました。 ${err}`);
              throw new Error(err.message);
            })
          }
        })
      }else {
        return false;
      }
    }
    // let token = "";
    try {
      await createUser();
      await createIcon();
    } catch(e){
      console.log(e.message);
    } finally {
      nav("/");
      if(auth) return <Navigate to="/" />
    }
    
  }
  return (
    <div>
      <main className="signin">
        <h2 id="test">ユーザ新規作成</h2>
        <p className="error-message">{errorMessage}</p>
        <form className="signin-form" onSubmit={ handleSubmit(onSignUp) }>

        <label className="icon-label" htmlFor="icon">
            {errors.icon && <div className="error-icon-message error-message">入力が必須の項目です</div>}
            アイコン画像
            <input type="file" className="file-input" {...register('icon', { accept: "image/*" })} /><br />
          </label><br />

          <label className="name-label" htmlFor="name">
            {errors.name && <div className="error-name-message error-message">入力が必須の項目です</div>}
            ニックネーム
            <input type="text" className="name-input" {...register('name', { required: true })} /><br />
          </label><br />

          <label className="email-label" htmlFor="email">
            {errors.email && <div className="error-email-message error-message">入力が必須の項目です</div>}
            メールアドレス
            <input type="email" className="email-input" {...register('email', { required: true })} /><br />
          </label><br />

          <label className="password-label" htmlFor="password">
            {errors.password && <div className="error-password-message error-message">入力が必須の項目です</div>}
            パスワード
            <input type="password" className="password-input" {...register('password', { required: true })} /><br />
          </label><br />
          
          <div className="button-wrapper">
            <button type="submit" className="signin-button">登録</button>
          </div>
        </form>
      </main>
    </div>
  )
}