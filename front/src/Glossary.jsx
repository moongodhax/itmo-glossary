import { useState, useEffect } from 'react';

function Glossary() {
  const [glossary, setGlossary] = useState([]);

  useEffect(() => {
    fetch("/api/glossary")
      .then((response) => response.json())
      .then((data) => setGlossary(data));
  }, []);

  return (
    <div className="terms-container">
    {
      !glossary.length
      ? (
        'Загрузка...'
      )
      : (
        glossary.map((term) => (
          <div key={term.id} className="card big hover">
            <div className="header">{term.name}</div>
            <div>{term.description}</div>
          </div>
        ))
      )
    }
    </div>
  )
}

export default Glossary