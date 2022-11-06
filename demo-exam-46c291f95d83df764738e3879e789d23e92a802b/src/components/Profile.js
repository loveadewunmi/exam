import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Navbar from './Navbar'
import Pagination from './Pagination'

export default function Profile({ 
    page,
    setPage,
    users,
    setUsers,
    isPending,
    setIsPending,
    error,
    setError,
    url,
    setUrl,
    query
  }) {



  useEffect(() => {
    window.scrollTo({
      behaviour: "smooth",
      top: "0px",
    })
    const getUser = async () => {

      setIsPending(true)

      try {
        const res = await fetch(url)

        if(!res.ok) {
          throw new Error("Couldn't get users at the moment, try again")
        }

        const data = await res.json()
        
        setError(false)
        setIsPending(false)
        setUsers(data.items)
      }
      catch(err) {
        setIsPending(false)
        setError(err.message)
      }
    }
    getUser()
  }, [url])

  if(error) {
    return ( 
      <div className='error'>
        <Navbar />
        <h1>No user profile found. Ensure you are connected</h1>
      </div> 
    )
  }

  return (
    <div className=''>
      <Navbar />
      <div className="msg">
        {isPending && <h3>Loading...</h3>}
        {error && <h2>Coundn't resolve that host</h2>}
      </div>
      <motion.div animate={{ opactiy: 1 }} initial={{ opactiy: 0 }} layout className='profile'>
          {users && users.map(profile => (
                <div className='preview' key={profile.avatar_url}>
                  <div className="text">
                    <div className="img-div"><img src={profile.avatar_url} alt="" /></div>
                    <h4><span className='label'></span> {profile.login}</h4>
                    <Link to={`repository/${profile.login}/${profile.id}`}>Repo</Link>
                  </div>
                </div>
              ))
            }
      </motion.div>
      <Pagination setUrl={setUrl} page={page} setPage={setPage} users={users} query={query} />
    </div>

  )
}
