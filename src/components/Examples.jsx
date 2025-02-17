import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedTopic) {
    setSelectedTopic(selectedTopic);
  }

  // so below see the ButtonContainer :
  /*
    We want to use a built in component so we are using string value 
    If we wanted to use a custom component say Section it would look like this: 

    ButtonContainer ={Section}
  */
  return (
    <Section id="examples" title={"Examples"}>
      <Tabs
        ButtonContainer={"menu"}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic == "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onClick={() => handleSelect("props")}
            >
              {" "}
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : (
          <p id="tab-content"> Please select a topic</p>
        )}
      </Tabs>
    </Section>
  );
}
