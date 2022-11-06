import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// components
import Profile from '../../components/Profile'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(`https://api.github.com/search/users?q=${query}&page=${page}`)
  useEffect(() => {
    const controller = new AbortController()
    const getUser = async () => {

      setIsPending(true)

      try {
        const res = await fetch(url, { signal: controller.signal })

        if(!res.ok) {
          throw new Error(res.statusText)
        }

        const data = await res.json()

        setError(false)
        setIsPending(false)
        setUsers(data.items)
        
      }
      catch(err) {
        setIsPending(false)
        console.log(err.message)
        setError(err.message)
      }
    }
    getUser()

    return () => {
      controller.abort()
    }
  }, [page, url, query])

  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Our users list. Our users you can collaborate with" />
      <link rel="canonical" href="/search" />
    </Helmet>
    <div className='search'>
      {users && <Profile page={page} setPage={setPage} users={users} setUsers={setUsers} isPending={isPending} setIsPending={setIsPending} error={error} setError={setError} url={url} setUrl={setUrl} query={query}/>}
    </div>
    </>
  )
}