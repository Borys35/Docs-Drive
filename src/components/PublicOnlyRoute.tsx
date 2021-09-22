import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../redux/store";

const PublicOnlyRoute = ({ component, ...props }: RouteProps) => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  return (
    <Route
      component={!loggedIn ? component : () => <Redirect to="/" />}
      {...props}
    />
  );
};

export default PublicOnlyRoute;
