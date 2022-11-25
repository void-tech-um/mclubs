import { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import * as React from "react";

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
  console.log(errors);
  const [isLogin, setIsLogin] = useState(true);
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className={`modal cursor-pointer ${isOpen && "modal-open"}`}>
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
              type="text"
              placeholder="password"
              className={`input input-bordered border-primary flex-shrink w-full ${
                errors.password && "input-error"
              }`}
              {...register("password", { required: true })}
            />
          </label>

          <Button outlined>Login</Button>
          <Button>Create an Account</Button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
