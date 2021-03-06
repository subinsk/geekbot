import React from "react";
import {
    wavesContainer,
    editorial,
    parallax,
} from './Waves.module.css';

const Waves = () => {
    return (
        <div className={wavesContainer}>
            <svg classNames={editorial}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z" />
                </defs>
                <g classNames={parallax}>
                    <use xLinkHref="#gentle-wave" x="50" y="0" fill="#4579e2" />
                    <use xLinkHref="#gentle-wave" x="50" y="3" fill="#3461c1" />
                    <use xLinkHref="#gentle-wave" x="50" y="6" fill="#2d55aa" />
                </g>
            </svg>
        </div>
    )
}

export default Waves;