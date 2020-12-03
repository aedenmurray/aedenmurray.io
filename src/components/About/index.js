import React from 'react';
import http from 'http';
import ReactMarkdown from 'react-markdown';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {readme: null};
    }

    async componentDidMount() {
        const readme = await this.getGithubReadme();
        this.setState({readme: readme});
    }

    async getGithubReadme() {
        return new Promise((resolve, reject) => {
            const request = http.get('https://raw.githubusercontent.com/aedenmurray/aedenmurray/main/README.md');
            request.on('response', (response) => {
                let rawData = '';
                response.on('data', (chunk) => rawData += chunk);
                response.on('end', () => resolve(rawData));
            });
        });
    }

    render() {
        return (
            <div className='about'>
                <a href="https://github.com/aedenmurray/aedenmurray/blob/main/README.md" target="_blank">
                    <p class="tagline">aedenmurray/readme</p>
                </a>

                <div className='readme'>
                    <ReactMarkdown>{this.state.readme}</ReactMarkdown>
                </div>
            </div>
        );
    }
}