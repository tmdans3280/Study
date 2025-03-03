import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react'
import { EXAMPLES } from './data.js'

function App() {
  const [selectedData, setSelectedData] = useState()

  function handleSelect(selectedButton) {
    setSelectedData(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedData === 'components'}
              onSelect={() => handleSelect('components')}
              label="components"
            />
            <TabButton
              isSelected={selectedData === 'jsx'}
              onSelect={() => handleSelect('jsx')}
              label="jsx"
            />
            <TabButton
              isSelected={selectedData === 'props'}
              onSelect={() => handleSelect('props')}
              label="props"
            />
            <TabButton
              isSelected={selectedData === 'state'}
              onSelect={() => handleSelect('state')}
              label="state"
            />
          </menu>
          {selectedData ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedData].title}</h3>
              <p>{EXAMPLES[selectedData].description}</p>
              <pre>
                <code>{EXAMPLES[selectedData].code}</code>
              </pre>
            </div>
          ) : (
            <p>click button</p>
          )}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  )
}

export default App
