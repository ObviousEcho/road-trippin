import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="p-10 text-center">
        <h1 className="text-3xl">
          Create Custom Modal in React JS with Tailwind CSS!
        </h1>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
          // onClick required to display modal, place on link in navbar, the above code can be deleted!
          onClick={() => setShowModal(true)}
        >
          Submit
        </button>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
