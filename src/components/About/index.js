import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const About = () => {
    const [readme, setReadme] = useState(null);

    useEffect(() => {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    setReadme(request.responseText);
                }
            }
        };

        request.open(
            'GET',
            'https://raw.githubusercontent.com/aedenmurray/aedenmurray/main/README.md'
        );
        request.send();
    }, []);

    return (
        <div className="about">
            <a
                href="https://github.com/aedenmurray/aedenmurray/blob/main/README.md"
                target="_blank"
                rel="noopener"
            >
                <p className="tagline">aedenmurray/readme</p>
            </a>

            <div className="readme">
                <ReactMarkdown>{readme}</ReactMarkdown>
            </div>
        </div>
    );
};

export default About;
