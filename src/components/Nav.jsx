import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ libraryStatus, SetLibraryStatus }) {
  return (
    <div className="nav">
      <h1>BeatBoss</h1>
      <button
        onClick={() => {
          SetLibraryStatus(!libraryStatus);
        }}
      >
        Songs <FontAwesomeIcon icon={faMusic} />
      </button>
    </div>
  );
}

export default Nav;
