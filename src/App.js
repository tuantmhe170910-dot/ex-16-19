import React from "react";
import EventHandlingDemo from "./Exercise/ex16";
import RenderAndCommitDemo from "./Exercise/ex17";
import SnapshotDemo from "./Exercise/ex18";

function App() {
  return (
    <>
      {/* Exercise 16 */}
      <div>
        <EventHandlingDemo />
      </div>

      <React.StrictMode>
        {/* Exercise 17 */}
        <RenderAndCommitDemo />

        {/* Exercise 18 */}
        <SnapshotDemo />
      </React.StrictMode>
    </>
  );
}

export default App;
