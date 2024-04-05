import React, { useState, useEffect } from "react";
import data from "./data";
import Title from "./Title";
import Section from "./Section";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <section className="section">
      <Title />
      <Section people={data} />
    </section>
  );
}

export default App;
