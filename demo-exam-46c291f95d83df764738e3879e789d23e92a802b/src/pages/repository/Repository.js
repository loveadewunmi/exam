import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// static files  
import repo from '../../icons/repository.png'
import star from '../../icons/star.png'
import fork from '../../icons/fork.png'

export default function Repository () {
    const { id, name } = useParams();

    const [repositories, setRepositories] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetchRepo()
    }, [])
    const fetchRepo = async () => {
       const url =  'https://api.github.com/users/'+ name +'/repos';
       try {
        const res = await fetch(url);
        if(!res) {
            console.log(res)
            throw new Error()
        }
        const data = await res.json();
        setRepositories(data);
        setIsPending(false)
        setError(null)
    }
    catch(err) {
        console.log(err.message)
        setIsPending(false)
       }
    }

    return (
        <>
        <Helmet>
            <title>Repository</title>
            <meta name="description" content="browse through lists of user's repository" />
            <link rel="canonical" href={"/repository/" + name + id}/>
        </Helmet>
        <div className="repository">
            <div className='repo'>
                <h4><img className='repo-icon' src={repo} alt='repo-icon'/>Repositories({repositories.length})</h4>
                {isPending && <h3>Loading...</h3>}
                {error && <h3>{error}</h3>}
                <ul className='repo-main-list'>
                {repositories && repositories.map(repository => (
                    <li className='repo-main-list-li' key={repository.archive_url}>
                        <div>
                            <img className='repo-icon' src={repo} alt='repo-icon'/>
                            <a href={repository.html_url}>{ repository.name }</a>
                            <span>Public</span>
                        </div>
                        <p>{ repository.description }</p>
                        <ul className='repo-sub-list'>
                            {repository.language ?
                                <li>{ repository.language }</li>:
                                <li>loading...</li>
                            }
                            <li>
                                <img className='repo-icon' src={star} alt='star-icon' />
                                <span className='count'>{ repository.stargazers_count }</span>
                            </li>
                            <li>
                                <img className='repo-icon' src={fork} alt='fork-icon' />
                                <span className='count'>{ repository.forks }</span>
                            </li>
                            <li>{ repository.created_at }</li>
                        </ul>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        </>
    );
}
