---
title: "The never-ending quest for the perfect IDE"
date: 2025-08-04
updated: 2025-08-03
---

I always wonder why some developers stick with the defaults of their IDE and how they can resist (if not be immune) to the urge to customize their editor and tailor the experience to their needs.

I spend so much time looking at code and manipulating it, I have to feel comfortable while doing it. My IDE becomes a sort of second virtual home: a visually appealing place with all the stuff I need within reach, where everything seems familiar and to my taste.

And like one would do with their own house, my IDE is constantly under construction. As much as I am aware that perfection is nothing but an illusion, I still venture into the golden quest for the perfect IDE, a never-ending one.

## The software

Long gone are the university days, using EMACS to write some already oudated code. Whenever I joined my first company, working with C# forced me to use [Visual Studio](https://visualstudio.microsoft.com/). I hated it. It was slow, ugly and a total resource hog. 

Playing around Unity (and having more freedom away from professional projects), I tried [Rider](https://www.jetbrains.com/rider/), JetBrains' C# IDE. It was refreshing. Interface was cleaner and simpler, defaults were satisfying and it came with Resharper (some powerful C# linting/refactoring tool) enabled and optimized by default.

It was only a couple years later when I started woring with JavaScript that I was introduced to [Visual Studio Code](https://code.visualstudio.com/) or VSCode for short. Compiling, linting or running a dev server was done through terminal commands, the IDE was no longer an essential brick of the build process: it was a tool to help me navigate through the code.

On its own, VSCode is pretty empty: it is a platform, and with it come **extensions**. Over 75000 plugins you can install: language supports, refactoring tools, CLIs integrations, themes... No matter what you are looking for, there is an extesion for it. Or is there? We will talk about that later.

VSCode was satisfying to me. It is reasonably fast (compared to full blown IDEs), easy to install on all sorts of machines, and extendable enough to make it really comfortable, to make it my own. I had no reason to change for something else. Until AI happened. 

For those unaware, [I firmly reject AI](@/on-resisting-ai.md). And having it shoved down my throat the way VSCode did left my a very bitter taste of the IDE I enjoyed so much. I eventually found a way to disable any sort of AI integration, but I took the time to realize the amount of unwanted things VSCode pushes in your face constantly (liveshare, copilot). So the journey carried on...

I looked into the many new editors, most of them still being WIPs or early alpha stage. [Lapce](https://lap.dev/lapce) was interesting, as a rust-based performance focused text-editor, but it was lacking too many features and its development is still slow that I hardly believe it'll ever catch up with other editors. I considered [Zed](https://zed.dev/) during its very early stage, but it lacked the customization I wanted, and the AI-first direction it seems to be taking puts me off trying it again.

What now? The final form of code editors: terminal-based IDEs. I pondered over learning [vim](https://www.vim.org) but I was not ready. The step was too high for me, and I did not have the time nor the will to learn so many commands for what are basics. Here comes [Helix](https://helix-editor.com/) which I would describe as an easier neovim, a more affordable entry ticket to the world of modal editors. It was fast, responsive and I quickly got comfortable with it. My issue was the languages I work with, and the tools I'm used to. Using Vue and Typescript, alongside ESLint and such, was painful. Language servers don't really play along, when they don't fight each other. And I gave up.



## Pluggable IDEs: a world of extensions

I talked about extending VSCode/Codium earlier, let's dive in the jungle of extensions that it offers, and the cost that comes with it.

Working with Vue a lot, I installed the Vue language support extension and some integrations of commonly used CLIs like ESLint and Prettier. And a theme. I fell in love with Sarah Drasner's [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl). I really liked it, the choice of colors for the languages I was using really helped with reading code faster. 
