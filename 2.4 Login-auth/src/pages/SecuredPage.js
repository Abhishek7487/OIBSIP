import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../features/authentication/authenticationSlice";

function SecuredPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  return (
    <div className="securedPage">
      <h1>Welcome {user.name}! You have access to Secured Page</h1>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default SecuredPage;
