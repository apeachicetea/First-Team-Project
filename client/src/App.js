import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import Myfrigo from "./Routes/Myfrigo";
import Recipe from "./Routes/Recipe";
import Post from "./Routes/Post";
import QuickPost from "./Routes/QuickPost";
import Nav from "./Components/Nav";
import MyPage from "./Routes/Mypage";
import Logout from "./Routes/Logout";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [userinfo, setUserinfo] = useState({ username: "빅토르" });
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  const isAuthenticated = async () => {
    const data = await axios.get("http://localhost:4000/auth", {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      withCredentials: true,
    });

    if (data) {
      setIsLogin(true);
      setUserinfo(data.data.data.userInfo);
      navigate("/");
    }
  };
  const handleResponseSuccess = (accessToken) => {
    setAccessToken(accessToken);
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post("http://localhost:4000/logout").then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      navigate("/");
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <>
      {isLogin ? <Nav isLogin={isLogin} /> : <Nav />}
      <Routes>
        <Route
          path="/"
          element={
            <Login
              handleResponseSuccess={handleResponseSuccess}
              accessToken={accessToken}
              isLogin={isLogin}
              userinfo={userinfo}
            />
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/myfrigo"
          element={<Myfrigo isLogin={isLogin} accessToken={accessToken} />}
        ></Route>
        <Route
          path="/mypage"
          element={<MyPage userinfo={userinfo} accessToken={accessToken} />}
        ></Route>
        <Route path="/recipe" element={<Recipe />}></Route>
        <Route path="/post" element={<Post isLogin={isLogin} />}>
          <Route
            path=":tags"
            element={
              <QuickPost userinfo={userinfo} accessToken={accessToken} />
            }
          />
        </Route>
        <Route
          path="/logout"
          element={<Logout handleLogout={handleLogout} isLogin={isLogin} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
