import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Glossary() {
  const { data, error, isLoading } = useSWR("/api/glossary", fetcher);

  return (
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
  )
}

export default Glossary