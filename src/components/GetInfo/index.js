import React, { useState } from 'react';
import axios from 'axios';


const GetInfo = (repo) => {
    const [repoInfo, setRepoInfo] = useState('test');
    // setRepoInfo(getRepo())
    const onButtonClick = async ({ repo }) => {
        console.log('help', repo)
        let { name, forks_count, stargazers_count, open_issues_count } = await getRepo(repo)
        console.log(name, forks_count, stargazers_count, open_issues_count)
        setRepoInfo(`Forks: ${forks_count}, Stargazers: ${stargazers_count}, Issues: ${open_issues_count}`)
    }
    return (
        <div>
            <button onClick={() => onButtonClick(repo)}>info</button>
            <p>{repoInfo}</p>
        </div>
    )
};

async function getRepo(repo) {
    let { data } = await axios.get(`https://api.github.com/repos/${repo}`)
    let newData = await { name: data.name, forks_count: data.forks_count, stargazers_count: data.stargazers_count, open_issues_count: data.open_issues_count }
    console.log(repo, data, newData)
    return (newData)
}



export default GetInfo;
