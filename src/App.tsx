import SignupModal from "./components/shared/SignupModal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="m-auto w-fit">
      <p className="text-3xl font-bold">Join MClubs</p>
      <label
        className="btn btn-primary font-lexend"
        htmlFor="my-modal-3"
        onClick={() => setModal(true)}
      >
        Login
      </label>

      <SignupModal isOpen={modal} onClose={() => setModal((prev) => !prev)} />
    </div>
  );
}

export default App;
