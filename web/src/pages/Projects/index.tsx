import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Menu from '../../components/Menu'
import Card from '../../components/Card'

import database from '../../assets/database/projects.json'

import './styles.css'

interface project{
    id:number
    title:string
    image:string
    description:string
    references?: string
}

function Projects() {
    const cards = database
    const [repos,setRepos] = useState<number[]>([])

    async function loadRepoInfo(){
        const result = await axios.get("https://api.github.com/users/DWRP")
        let data = Number(result.data.public_repos)
        return [data]
    }

    useEffect(()=>{
        async function loadData(){
            setRepos(await loadRepoInfo())
        }
        loadData()
    },[])

    return (
        <main className="main">
            <Menu page="project"/>
            <div className="projects">
                {
                    repos.map((item:number)=>{
                        return (
                            <h3 key={item}><span>Projects: {item}</span> <span>Listed: {cards.length}</span></h3>
                        )
                    })
                }
                {
                    cards.map((item:project)=>{
                        return (
                            <Card title={item.title} image={item.image} description={item.description} reference={item.references} key={item.id}/>
                        )
                    })
                }
            </div>
        </main>
  );
}

export default Projects;
