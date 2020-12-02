import React from 'react';

// export default class Button extends React.Component {
//     render() {
//         return (
//             <button className="main-button">
//                 <ion-icon name="heart"></ion-icon>
//                 <p>{this.props.text}</p>
//             </button>
//         );
//     }
// }


const Button = ({text, icon, href}) => (
    <a href={href} target="_blank">
        <button className="main-button">
            <div className="icon-wrapper">
                <ion-icon name={icon} />
            </div>
            <div className="text-wrapper">
                <p>{text}</p>
            </div>
        </button>
    </a>
);

export default Button;