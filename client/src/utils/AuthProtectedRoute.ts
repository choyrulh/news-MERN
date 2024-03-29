import { useNavigate } from "react-router-dom";
import { UserLogin } from "../hooks/UserProvider";
import { useEffect } from "react";
// import useUserLogin from "../hooks/useUserLogin";

type Props = {
  children: React.ReactNode;
};

export const AdminProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const { user } = UserLogin();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
  }, [user, navigate]);

  if (user && user.role === "admin") {
    return children;
  }
};

export const UserProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const { user } = UserLogin();
  // const role = user?.role;

  useEffect(() => {
    if (!user || user.role !== "user") {
      navigate("/login");
    }
  }, [user, navigate]);

  if (user && user.role === "user") {
    return children;
  }
};
