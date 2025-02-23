import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const { data, error, isLoading } = useSWR(
    "/api/glossary",
    fetcher
  );

  return (
    <div id="container">
      <header>
        <h1>Глоссарий</h1>
        <button>
          Граф
        </button>
        <div className="card small copyright">
          <span className="header">Игорь Агарков (c) 2025</span>
        </div>
      </header>

      <div className="terms-container">
      {
        error
        ? (
          'Ошибка загрузки...'
        )
        : (
          isLoading
          ? (
            'Загрузка...'
          )
          : (
            data.map((term) => (
              <div key={term.id} className="card big hover">
                <div className="header">{term.name}</div>
                <div>{term.description}</div>
              </div>
            ))
          )
        )
      }
      </div>
    </div>
  )
}

export default App
