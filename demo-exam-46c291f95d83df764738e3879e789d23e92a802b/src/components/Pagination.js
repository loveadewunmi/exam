export default function Pagination({ setUrl, page, setPage, query }) {
    return (
      <div className="pagination">
        {page === 1 ? <button className="disable" disabled={true} style={{
          pointerEvents: 'none'
        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#CACBD2" fill="none" className="duration 300 transform transition-all"><path d="M45.15 57.47L19.88 30.84 45.15 6.58"></path></svg></button> : <button onClick={() => {
            setPage(page - 1)
            setUrl(`https://api.github.com/search/users?q=${query}&page=${page}`)
        }}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#CACBD2" fill="none" className="duration 300 transform transition-all"><path d="M45.15 57.47L19.88 30.84 45.15 6.58"></path></svg>
        </button>}

        {page === 1 ? <button className="disable" disabled={true} style={{
        pointerEvents: 'none'
      }}>1</button> : <button
        onClick={() => {
          setUrl(`https://api.github.com/search/users?q=${query}&page=1`)
          setPage(1)
        }}
      >1</button>}

      {page === 2 ? <button className="disable" disabled={true} style={{
        pointerEvents: 'none'
      }}>2</button> : <button
        onClick={() => {
          setUrl(`https://api.github.com/search/users?q=${query}&page=2`)
          setPage(2)
        }}
      >2</button>}

      {page === 3 ? <button className="disable" disabled={true} style={{
        pointerEvents: 'none'
      }}>3</button> : <button
        onClick={() => {
          setUrl(`https://api.github.com/search/users?q=${query}&page=3`)
          setPage(3)
        }}
      >3</button>}
  
        {page === 5 ? <button className="disable" disabled={true} style={{
          pointerEvents: 'none'
        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#CACBD2" fill="none" className="duration-300 transform transition-all" ><path d="M18.86 57.47l25.26-26.63L18.86 6.58"></path></svg></button> :       <button
          onClick={() => {
              setPage(page + 1)
              setUrl(`https://api.github.com/search/users?q=${query}&page=${page}`)
          }}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#CACBD2" fill="none" className="duration-300 transform transition-all" ><path d="M18.86 57.47l25.26-26.63L18.86 6.58"></path></svg>
        </button>}
      </div>
    )
  }