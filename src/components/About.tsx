import React from "react";
import '../styles/About.css';

interface aboutProps {
    
}

const About:React.FC<aboutProps> = () => {
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    const [fetchData, setFetchData] = React.useState<Post[]>([]);
    const [loadCount, setLoadCount] = React.useState(12);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(json => setFetchData(json))
    }, []);


  return (
    <div>
        <h1>About</h1>
        <div className="grid-container">
            {fetchData.slice(0,loadCount).map((data) => (
                <div key={data.id} className="grid-item">
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </div>
            ))}
        </div>
        <button onClick={() => setLoadCount(loadCount+12)}>Show more</button>
    </div>
  );
};

export default About;