---
title: "The never-ending quest for the perfect IDE"
date: 2025-08-04
updated: 2025-08-03
---

I always wonder why some developers stick with the defaults of their IDE. How can they resist (if not be immune to) the urge to customize their editor. How do they not want to make their developer experience more personal.

I spend so much time looking at code and manipulating it. I have to feel comfortable while doing it. My IDE becomes a virtual home: a visually appealing place with everything I need within reach, familiar and to my taste.

Like my real home, my IDE is constantly under construction. I am aware that perfection is nothing but an illusion. Yet I am on the golden quest for the perfect IDE, a never-ending one.

## The software

University days are long gone and so is my experience with EMACS. I got my first job as a C# developer and working with .NET forced me to use [Visual Studio](https://visualstudio.microsoft.com/). I hated it. It was slow, ugly and a total resource hog.

I played around Unity and tried [Rider](https://www.jetbrains.com/rider/), JetBrains' C# IDE. It was refreshing. Interface was cleaner and simpler, defaults were satisfying and it came with Resharper (some powerful C# linting/refactoring tool).

A couple years later, I started working on frontend stuff, with JavaScript. I was introduced to [Visual Studio Code](https://code.visualstudio.com/) or VSCode for short. Compiling, linting or running a dev server was done through terminal commands. The IDE was much more independant from the code itself: it became a tool to navigate the code.

On its own, VSCode is pretty empty: it is a platform, and with it come **extensions**. Over 75000 plugins you can install: language supports, refactoring tools, CLIs integrations, themes... No matter what you are looking for, there is an extesion for it. Or is there? We will talk about that later.

VSCode was satisfying. It was reasonably fast (compared to Visual Studio), easy to install on any platform, and very extendable. Enough to make it really comfortable, to make it my own. I had no reason to change for something else. Until AI happened.

For those unaware, [I am against anything (generative) AI](@/on-resisting-ai.md). And having it shoved down my throat the way VSCode was not of my liking. I found a way to disable most AI integrations but I felt uncomfortable with these around. So the journey carried on...

I looked into other editors, most of them were still in their early stages. [Lapce](https://lap.dev/lapce) was interesting: a rust-based text-editor focused on performance. But the lack of features and slow development made me skeptical about its future. I considered [Zed](https://zed.dev/) during its very early stage, but it was lacking customization and accessibility features (especially better contrasts). Also, the AI-first direction it seems to be taking put me off trying it again.

What now? The final form of code editors: terminal-based IDEs. I thought of learning [vim](https://www.vim.org) but I was not ready. The step was too high for me. I did not have the time to relearn a new tool from scratch. Here comes [Helix](https://helix-editor.com/): a more affordable entry ticket to the world of modal editors, an easier neovim. It was fast, responsive and I quickly got comfortable with it. My issue was the languages I work with and the tools that come with them. Using Vue and Typescript (and some linters) was painful. Language servers don't really play along, when they don't fight each other. And I gave up.

The one editor I was the most satisfied with was VSCode. And I had to admit it: there was no real alternative to it and the platform it offered. I learnt about its freely-licensed distribution equivalent: [VSCodium](https://vscodium.com/). It is basically the same binary as VSCode, but without the Microsoft things (no telemetry, no copilot, no liveshare). And to this day, this is what I use.

I still play around and try shiny toys as they come out. And I always hope that I will find the one.

## The typophraphy obsession

I love typography. When [I made this website](@/digital-gardening.md), I spent an absurd amount of time studying it. Typescales, leading, aperture, letter-spacing... I wanted to understand what makes text readable or not. 

And I looked at fonts. A lot of fonts. I tried so many fonts in my IDEs that I lost track of the count.

The first feature I started to appreciate beyond measure are ligatures. 

<!-- more typography things and fonts i really liked, italic comments... -->

## Pluggable IDEs: a world of extensions

I talked about extending VSCode/Codium earlier, let's dive into its jungle of extensions.

I started with the Vue language support extension and some integrations of  CLIs like ESLint and Prettier. 

<!-- I fell in love with Sarah Drasner's [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl). I really liked it, the choice of colors for the languages I was using really helped with reading code faster.  -->
