import * as React from "react";
import Button from "./Button";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
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
          Join <span className="text-secondary">M</span>Clubs
        </h3>
        <div className="flex justify-center mt-5 mb-5 font-semibold ">
          <ul className="list-disc font-inter list-outside">
            <li className="my-1">Save favorites to your profile</li>
            <li className="my-1">Add your club to the website</li>
            <li className="my-1">Write reviews</li>
            <li className="my-1">Submit questions to clubs</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <Button outlined>Login</Button>
          <Button>Create an Account</Button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
