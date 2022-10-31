import "./App.css";

function App() {
  return (
    <div id="app" style={{ margin: "auto", width: "fit-content" }}>
      <p className="text-3xl font-bold underline">Hello VOID! From kaleb</p>
      <label className="btn btn-primary" htmlFor="my-modal">
        Button
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Modal from DaisyUI</h3>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
