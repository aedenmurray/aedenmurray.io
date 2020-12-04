import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import http from 'http';

const About = () => {
    const [readme, setReadme] = useState(null);

    useEffect(() => {
        const getGithubReadme = async () => {
            const request = http.get('https://raw.githubusercontent.com/aedenmurray/aedenmurray/main/README.md');
            request.on('response', (response) => {
                let rawData = '';
                response.on('data', (chunk) => rawData += chunk);
                response.on('end', () => setReadme(rawData));
            });
        }

        getGithubReadme();
    }, []);

    return (
        <div className='about'>
            <a href="https://github.com/aedenmurray/aedenmurray/blob/main/README.md" target="_blank">
                <p className="tagline">aedenmurray/readme</p>
            </a>

            <div className='readme'>
                <ReactMarkdown>{readme}</ReactMarkdown>
            </div>
        </div>
    );
}

export default About;