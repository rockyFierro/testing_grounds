import React, { Component } from "react";
import { Example } from "./CodeExample";

export const LearnGit = () => {
  return (
    <div className="git">
      Let's look at creating a new repository in VSCode and adding it to Github.
      <ul>
        <li>
          <Example
            description="initialize a repository (your workspace)"
            input="git init"
          />
        </li>
        <li>
          <Example
            description="Choose a feature to work on, stage relavent files (or all of them) and then make commits as you go along."
            input='git add * && git commit -m \"write your commit message\" '
          />
        </li>

        <h3>
          <span>Wait wait, we forgot to create a repository at github...</span>
        </h3>
        <p>
          Go ahead and do this now, don't worry about initializing it with a
          readme or anything else, you just want a URL with a clean slate to
          push your local git onto.
        </p>
        <li>
          <Example
            description="Time to add the remote repository..."
            input="git remote add origin **your url here**"
          />
        </li>
        <li>
          <Example description="Let's verify that step" input="git remote -v" />
        </li>
        <li>
          <Example
            description="Push your first changes"
            input="git push -u origin master"
          />
        </li>
      </ul>
      <p>This is pretty basic, after this you can work on your branch , create new files, add those files to watch, commit them, and push them. You are going to want to do more so leave some room for notes on <em>when</em> to create a new branch, methods/paradigms for working with git and branches, what do you do when you see a <em>merge conflict</em>. Keep looking at the documentation at <a href="https://git-scm.com">Git</a> to find out as much as you can. Every team you work with is going to want to use Git and some funky third party team management/meeting software, Learn git asap. The later is just a annual trend.</p>
    </div>
  );
};
