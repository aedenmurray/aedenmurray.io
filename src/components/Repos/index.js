import React, {useState, useEffect} from 'react';

const filterRepos = (repos) => {
    return repos.filter(repo => {
        switch(repo.name) {
            case 'aedenmurray':
            case 'coexist-parser-proxy':
                return false;
            default: 
                return true;
        }
    });
} 

const Repos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {

        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if(request.readyState === 4) {
                if(request.status === 200) {
                    const repos = JSON.parse(request.responseText);
                    setRepos(filterRepos(repos));
                }
            }
        }

        request.open('GET', 'https://api.github.com/users/aedenmurray/repos');
        request.send();
    }, []);

    return (
        <div className="repos-wrapper">
            <a href="https://github.com/aedenmurray?tab=repositories" target="_blank">
                <p className="tagline">aedenmurray/repos</p>
            </a>
            <div className="repos">
                {repos.map(repo => (
                    <a href={repo.html_url} target="_blank" key={repo.id}>
                        <div className="repo">
                            <p className="repo-name">{repo.name}</p>
                            <p className="repo-desc">{repo.description}</p>
                            <ion-icon name="cube-outline"></ion-icon>
                        </div>
                    </a>
                ))}
            </div>               
        </div>
    );
}

export default Repos;