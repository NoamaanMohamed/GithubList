import React, { useState } from 'react';
import axios from 'axios';


const GetInfo = (repo) => {
    const [repoInfo, setRepoInfo] = useState();

    const onButtonClick = (repo) => {
        setRepoInfo(getRepo(repo))
    }
  
    return(
        <div>
            <button onClick={onButtonClick(repo)}>info</button>
            <p>{repoInfo}</p>
        </div>
    ) 
};

async function getRepo(repo){
    let {data} = await axios.get(`https://api.github.com/repos/${repo}`)
    return(
        console.log(data),
        data.name,
        data.forks_count,
        data.stargazers_count,
        data.open_issues_count
    )
}



export default GetInfo;
