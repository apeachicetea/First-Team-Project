import { useEffect } from "react";
import Loading from "../Components/Loading";

function Logout({ handleLogout, isLogin }) {
  useEffect(() => {
    handleLogout();
  });
  return <>{isLogin ? <Loading /> : null}</>;
}

export default Logout;
