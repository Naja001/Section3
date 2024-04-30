
import Header from "./Components/Header/header";
import CoreConcept from "./Components/CoreConcept";
import CoreConcepts from "./Components/CoreConcepts"
import Exemples from "./Components/Exemples";

function App() {
  
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Exemples></Exemples>
      </main>
    </>
  );
}

export default App;
