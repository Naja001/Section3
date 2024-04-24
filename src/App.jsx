import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/header";
import CoreConcept from "./Components/CoreConcept";
import TabContent from "./Components/TabContent";

function App() {
  function handleSelect() {
    console.log("Hello World - selected");
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabContent onSelect={handleSelect}>Components</TabContent>
            <TabContent onSelect={handleSelect}>JSX</TabContent>
            <TabContent onSelect={handleSelect}>Props</TabContent>
            <TabContent onSelect={handleSelect}>State</TabContent>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
