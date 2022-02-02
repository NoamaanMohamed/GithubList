import React from 'react';
import './style.css';

export default function Result ({ result }) {
    return (
        <section>
            <div>{result ? result[0].id : ''}</div>
        </section>
    )
}
