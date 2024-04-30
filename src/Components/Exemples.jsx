import TabContent from "../Components/TabContent";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Exemples() {

  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabContent
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Componentsss
        </TabContent>
        <TabContent
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabContent>
        <TabContent
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabContent>
        <TabContent
          isSelected={selectedTopic === "state"}
        >
          State
        </TabContent>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
