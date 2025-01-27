import React from "react";

interface aboutProps {
    
}

const About:React.FC<aboutProps> = () => {
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    const [fetchData, setFetchData] = React.useState<Post[]>([]);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(json => setFetchData(json))
    }, []);


  return (
    <div>
        <h1>About</h1>
        {fetchData.map((data) => (
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>
        ))}
    </div>
  );
};

export default About;