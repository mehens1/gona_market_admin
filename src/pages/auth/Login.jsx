import React, { useState } from "react";
import Input from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authServices";
import AlertService from "../../services/alertServices";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/slices/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      AlertService.error("Please enter both email and password");
      return;
    }

    try {
      AlertService.loading("Signing in...");

      const { data } = await authService.login(email, password);

      dispatch(
        loginSuccess({
          user: data.user,
          token: data.access_token,
        })
      );

      AlertService.closeLoading();
      AlertService.success("Welcome back!");

      navigate("/");
    } catch (err) {
      console.error(err);
      AlertService.closeLoading();
      AlertService.error("Invalid login credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center lighter-primary-bg px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-5">
          <img
            src="/assets/images/gona_market_main_logo.png"
            alt="logo"
            className="w-16 h-16 mb-2"
          />
          <h1 className="text-2xl font-semibold primary-text">Welcome Back</h1>
          <p className="text-slate-500 text-sm">Sign in to continue</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email Address"
            className="rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            className="rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="rounded border-slate-300" />
              Remember me
            </label>
            <a href="#" className="primary-text hover:underline">
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full ">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
