interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  return (
    <div>
      <label
        htmlFor="SignupModal"
        className={`modal cursor-pointer ${isOpen && "modal-open"}`}
      >
        <div className="modal-box relative">
          <label
            htmlFor="SignupModal"
            onClick={() => onClose()}
            className="btn btn-sm btn-circle absolute right-2 top-2 text-black bg-white border-none hover:bg-gray-400"
          >
            ✕
          </label>
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
            <button className="btn btn-outline max-w-xs w-full text-primary hover:bg-primary font-inter text-base">
              Login with UMID
            </button>
            <button className="btn bg-primary text-white max-w-xs w-full hover:bg-white hover:text-primary font-inter text-base">
              Create an Account with your UM email
            </button>
          </div>
        </div>
      </label>
    </div>
  );
};

export default SignupModal;
