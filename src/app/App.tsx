import AuthModal from "./components/shared/AuthModal";
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

      <AuthModal isOpen={modal} onClose={() => setModal(false)} />
    </div>
  );
}

export default App;
