import React, { Component } from 'react'
import { LearnGit } from './Components/Learn_git'

export class App extends Component{
  render(){
    return(
      <div className="app">
        <h1>It started on a Tuesday...</h1>hello
        <h2>This is nothing more than a large collection of notes.</h2>
        <LearnGit/>
      </div>
    )
  }
}

