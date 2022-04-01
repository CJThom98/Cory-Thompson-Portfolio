import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [projectsSelected, setProjectsSelected] = useState(false);

  return (
    <div>
      <Nav
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected}
      ></Nav>
      <main>
        {!projectsSelected ? (
          <>
            <About></About>
            <ContactForm></ContactForm>
          </>
        ) : (
          <Projects></Projects>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
