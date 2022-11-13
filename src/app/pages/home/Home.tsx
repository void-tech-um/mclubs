import React, { useState } from "react";
import AuthModal from "../../components/shared/AuthModal";

function Home() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div>
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
    </div>
  );
}

export default Home;
