import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  HeaderDiv,
  TopDiv,
  SearchSign,
  Search,
  Sign,
} from "../css/styledComponenet";

import NavBar from "./NavBar";

import Logo from "../img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const boxstyle = {
    width: "125px",
    height: "7px",
    backgroundColor: "#5CBE81",
  };

  const Navstyle = {
    color: "#000000",
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goSignup = () => {
    navigate("/signupmain");
  };

  const goLogin = () => {
    navigate("/login");
  };

  // 로그인 로직
  const [userName, setUserName] = useState();

  const getLoginUser = () => {
    setUserName(window.sessionStorage.getItem("username"));
  };

  // 로그아웃 로직
  const logout = () => {
      window.sessionStorage.removeItem("username");
      setUserName(null);
      alert("로그아웃되었습니다");
  };


  useEffect(() => {
    getLoginUser();
  }, []);

  return (
    <HeaderDiv>
      <TopDiv>
        <img onClick={goHome} src={Logo} width="170px" height="48px" />
        <SearchSign>
          <Search>
            <input type="text" placeholder="어떤 경험을 찾고 계신가요?" />
            <FontAwesomeIcon
              icon={faSistrix}
              size="lg"
              color="#439F68"
              cursor="pointer"
            />
          </Search>
          <Sign>
            {userName == null ? (
              <>
                <p onClick={goLogin}>로그인</p>
                <p onClick={goSignup}>회원가입</p>
              </>
            ) : (
              <>
                <p onClick={goLogin}>{userName}님 안녕하세요</p>
                <p onClick={logout}>로그아웃</p>
              </>
            )}
          </Sign>
        </SearchSign>
      </TopDiv>
      <NavBar />
    </HeaderDiv>
  );
}

export default Header;
