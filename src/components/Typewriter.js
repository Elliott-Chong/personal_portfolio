import React from "react";

const Typewriter = () => {
  const typewriterRef = React.useRef();
  const typewriterLoops = React.useMemo(
    () => ["Student..", "Learner..", "Leader..", "Athlete.."],
    []
  );
  const amRef = React.useRef();
  React.useEffect(() => {
    let i = 1;
    typewriterRef.current.addEventListener("animationiteration", (e) => {
      // console.log(i);
      if (e.animationName !== "typewriter") return;
      if (e.pseudoElement !== "::before") return;
      typewriterRef.current.classList.remove("type");
      typewriterRef.current.innerText = "";
      typewriterRef.current.innerText = typewriterLoops[i];
      typewriterRef.current.style.setProperty(
        "--length",
        typewriterLoops[i].length
      );
      if (["A", "E", "I", "O", "U"].includes(typewriterLoops[i][0])) {
        amRef.current.innerText = "I am an";
      } else {
        amRef.current.innerText = "I am a";
      }
      i++;
      if (i === typewriterLoops.length) {
        // console.log("reset");
        i = 0;
      }
      typewriterRef.current.classList.add("type");
    });
  }, [typewriterLoops]);
  const wrapperRef = React.useRef();

  return (
    <div
      id="typewriter-wrapper"
      className={`inline-flex space-elle`}
      ref={wrapperRef}
    >
      <h1
        className="ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
        ref={amRef}
      >
        I am a
      </h1>
      <h1
        id="typewriter"
        ref={typewriterRef}
        className="text-2xl lg:text-5xl lg:ml-5 ml-3 font-mono relative text-terminalGreen type"
      >
        Student..
      </h1>
    </div>
  );
};

export default Typewriter;
