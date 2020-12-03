import React from 'react';
import http from 'http';

export default class Repos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {repos: []};
    }

    async componentDidMount() {
        const repos = await this.getGithubRepositories();
        this.setState({repos: repos});
    }

    async getGithubRepositories() {
        return new Promise((resolve, reject) => {
            const request = http.get('https://api.github.com/users/aedenmurray/repos');
            request.on('response', (response) => {
                let rawData = '';
                response.on('data', (chunk) => rawData += chunk);
                response.on('end', () => resolve(JSON.parse(rawData)));
            });
        });
    }

    render() {
        return (
            <div className='repos-wrapper'>
                <a href="https://github.com/aedenmurray?tab=repositories" target="_blank">
                    <p class="tagline">aedenmurray/repos</p>
                </a>
                <div className='repos'>
                    {this.state.repos.map(repo => <p>{repo.id}</p>)}
                </div>               
            </div>
        );
    }
}