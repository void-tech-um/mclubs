import { useAuth } from "../auth/AuthContextProvider";
import Button from "./Button";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}
type FormValues = {
  email: string;
  password: string;
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup, user } = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    if (isLogin) {
      await login(data);
    } else {
      await signup(data);
    }
  });
  console.log(user);
  return (
    <div className={`modal cursor-pointer ${isOpen && !user && "modal-open"}`}>
      <div className="modal-box relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-2 top-2 text-black bg-white border-none hover:bg-gray-400"
        >
          ✕
        </button>
        <h3 className="text-4xl font-bold mx-auto w-fit text-primary">
          Join Clubs
        </h3>
        <div className="flex justify-center mt-5 mb-5 font-semibold ">
          <ul className="list-disc font-inter list-outside">
            <li className="my-1">Save favorites to your profile</li>
            <li className="my-1">Add your club to the website</li>
            <li className="my-1">Write reviews</li>
            <li className="my-1">Submit questions to clubs</li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-xs mx-auto flex flex-col justify-center items-center gap-4"
        >
          <label className="input-group flex-shrink max-w-xs">
            <span>Email</span>
            <input
              type="email"
              placeholder="info@site.com"
              className={`input input-bordered border-primary flex-shrink w-full ${
                errors.email && "input-error"
              }`}
              {...register("email", {
                required: true,
                validate: (value) => {
                  const words = value.split("@");
                  if (words[1] !== "umich.edu") {
                    return false;
                  }
                  return true;
                },
              })}
            />
          </label>
          <label className="input-group flex-shrink  ">
            <span>Password</span>
            <input
              type="password"
              placeholder="password"
              className={`input input-bordered border-primary flex-shrink w-full ${
                errors.password && "input-error"
              }`}
              {...register("password", { required: true })}
            />
          </label>

          {isLogin ? (
            <Button outlined>Login</Button>
          ) : (
            <Button>Create an Account</Button>
          )}
          {isLogin ? (
            <h1
              className="text-primary underline"
              onClick={() => setIsLogin(false)}
            >
              Create an account instead
            </h1>
          ) : (
            <h1
              className="text-primary underline"
              onClick={() => setIsLogin(true)}
            >
              Login
            </h1>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
