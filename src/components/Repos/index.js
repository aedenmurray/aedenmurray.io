import React, {useState, useEffect} from 'react';
import http from 'http';

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
        const getGithubRepositories = async () => {
            const request = http.get('https://api.github.com/users/aedenmurray/repos');
            request.on('response', (response) => {
                let rawData = '';
                response.on('data', (chunk) => rawData += chunk);
                response.on('end', () => {
                    const repos = filterRepos(JSON.parse(rawData));
                    setRepos(repos);
                });
            });
        }

        getGithubRepositories();
    }, []);
    return (
        <div className='repos-wrapper'>
            <a href="https://github.com/aedenmurray?tab=repositories" target="_blank">
                <p className="tagline">aedenmurray/repos</p>
            </a>
            <div className='repos'>
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

// export default class Repos extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {repos: []};
//     }

//     async componentDidMount() {
//         let repos = await this.getGithubRepositories();
//         repos = repos.filter(repo => {
//             switch(repo.name) {
//                 case 'aedenmurray.io':
//                 case 'aedenmurray':
//                 case 'coexist-parser-proxy':
//                     return false;
//                 default:
//                     return true;
//             }
//         })
//         this.setState({repos: repos});
//     }

//     async getGithubRepositories() {
//         return new Promise((resolve, reject) => {
//             const request = http.get('https://api.github.com/users/aedenmurray/repos');
//             request.on('response', (response) => {
//                 let rawData = '';
//                 response.on('data', (chunk) => rawData += chunk);
//                 response.on('end', () => resolve(JSON.parse(rawData)));
//             });
//         });
//     }

//     render() {
//         console.log(this.state.repos);
//         return (
//             <div className='repos-wrapper'>
//                 <a href="https://github.com/aedenmurray?tab=repositories" target="_blank">
//                     <p className="tagline">aedenmurray/repos</p>
//                 </a>
//                 <div className='repos'>
//                     {this.state.repos.map(repo => (
//                         <a href={repo.html_url} target="_blank">
//                             <div className="repo">
//                                 <p className="repo-name">{repo.name}</p>
//                                 <p className="repo-desc">{repo.description}</p>
//                                 <ion-icon name="cube-outline"></ion-icon>
//                             </div>
//                         </a>
//                     ))}
//                 </div>               
//             </div>
//         );
//     }
// }