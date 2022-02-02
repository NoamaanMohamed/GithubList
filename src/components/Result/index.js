import axios from 'axios';
import React from 'react';
import './style.css';
import { GetInfo } from '..';


const renderRows = (result) =>{
  return result ? result.map(r =><tr><td>{r.name}</td><td>{<GetInfo repo={r.full_name} />}</td></tr>):""
}


export default function Result ({ result }) {
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>info</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows(result)}
                </tbody>
            </table>
        </section>
    )
}
