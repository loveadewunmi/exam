import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function NotFound () {
    return (
        <>
        <Helmet>
        <title>404</title>
        <meta name="description" content="Not found" />
        <link rel="canonical" href="/*" />
      </Helmet>
        <div className="not-found">
            <div>
                <h1>404</h1>
                <h2>This is not the web page your are looking for</h2>
                <Link to="/search">Back to safety</Link>
            </div>
        </div>
        </>
    );
}
 