import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./Components/Header/header";
import CoreConcept from "./Components/CoreConcept";
import TabContent from "./Components/TabContent";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
           
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabContent
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabContent>
            <TabContent
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabContent>
            <TabContent
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabContent>
            <TabContent
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
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
      </main>
    </div>
  );
}

export default App;
