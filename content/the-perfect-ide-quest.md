---
title: "The never-ending quest for the perfect IDE"
date: 2025-08-03
updated: 2025-08-05
---

I always wonder why some developers stick with the defaults of their IDE. How can they resist (if not be immune to) the urge to customize their editor. How do they not want to make their developer experience more personal.

I spend so much time looking at code and manipulating it. I have to feel comfortable while doing it. My IDE becomes a virtual home: a visually appealing place with everything I need within reach, familiar and to my taste.

Like my real home, my IDE is constantly under construction. I am aware that perfection is nothing but an illusion. Yet I am on the golden quest for the perfect IDE, a never-ending one.

## The software

University days are long gone and so is my experience with EMACS. I got my first job as a C# developer and working with .NET forced me to use [Visual Studio](https://visualstudio.microsoft.com/). I hated it. It was slow, ugly and a total resource hog.

I played around Unity and tried [Rider](https://www.jetbrains.com/rider/), JetBrains' C# IDE. It was refreshing. Interface was cleaner and simpler, defaults were satisfying and it came with Resharper (some powerful C# linting/refactoring tool).

A couple years later, I started working on frontend stuff, with JavaScript. I was introduced to [Visual Studio Code](https://code.visualstudio.com/) or VSCode for short. Compiling, linting or running a dev server was done through terminal commands. The IDE was much more independant from the code itself: it became a tool to navigate the code.

On its own, VSCode is pretty empty: it's a platform, and with it come **extensions**. Over 75000 plugins you can install: language supports, refactoring tools, CLIs integrations, themes... No matter what you are looking for, there is an extesion for it. Or is there? We will talk about that later.

VSCode was satisfying. It was reasonably fast (compared to Visual Studio), easy to install on any platform, and very extendable. Enough to make it really comfortable, to make it my own. I had no reason to change for something else. Until AI happened.

For those unaware, [I am against anything (generative) AI](@/on-resisting-ai.md). And having it shoved down my throat the way VSCode was not of my liking. I found a way to disable most AI integrations but I felt uncomfortable with these around. So the journey carried on...

I looked into other editors, most of them were still in their early stages. [Lapce](https://lap.dev/lapce) was interesting: a rust-based text-editor focused on performance. But the lack of features and slow development made me skeptical about its future. I considered [Zed](https://zed.dev/) during its very early stage, but it was lacking customization and accessibility features (especially better contrasts). Also, the AI-first direction it seems to be taking put me off trying it again.

What now? The final form of code editors: terminal-based IDEs. I thought of learning [vim](https://www.vim.org) but I was not ready. The step was too high for me. I did not have the time to relearn a new tool from scratch. Here comes [Helix](https://helix-editor.com/): a more affordable entry ticket to the world of modal editors, an easier neovim. It was fast, responsive and I quickly got comfortable with it. My issue was the languages I work with and the tools that come with them. Using Vue and Typescript (and some linters) was painful. Language servers don't really play along, when they don't fight each other. And I gave up.

The one editor I was the most satisfied with was VSCode. And I had to admit it: there was no real alternative to it and the platform it offered. I learnt about its freely-licensed distribution equivalent: [VSCodium](https://vscodium.com/). It's basically the same binary as VSCode, but without the Microsoft things (no telemetry, no copilot, no liveshare). And to this day, this is what I use.

I still play around and try shiny toys as they come out. And I always hope that I will find the one.

## A typophraphy obsession

I love typography. When [I made this website](@/digital-gardening.md), I spent an absurd amount of time studying it. Typescales, leading, aperture, letter-spacing... I wanted to understand what makes text readable or not. 

And I looked at fonts. A lot of fonts. I tried so many fonts in my IDEs that I lost track of the count.

The first feature I started to appreciate beyond measure are ligatures. Ligatures are what happens when two or more characters merge into one. I find them useful for comparison operators or arrows: they are closer to handwriting.

I spent some time with [FiraCode](https://github.com/tonsky/FiraCode), [JetBrains Mono](https://www.jetbrains.com/lp/mono/) and [Iosevka](https://typeof.net/Iosevka/). Then I got attracted to fonts with... a cursive variant for italics.

Either love them of hate them, I feel like there is no in-between. And I really like them. I set my IDE to only use italics for comments, and all my comments are now cursive. I still find it readable and it helps me differentiate comments from code (other than color). I used [VictorMono](https://rubjo.github.io/victor-mono/) for a while, and it's the best free font with cursive italics. Then I committed and bought [Dank Mono](https://philpl.gumroad.com/l/dank-mono). It was great but it was missing some ligatures I really needed, so I had to find yet another one. And I settled for [MonoLisa](https://www.monolisa.dev/).

And I still use it today, it's been over 2 years. No font has topped it so far. It has some customization and alternative characters (i, r, 0...), lots of ligatures and my beloved cursive italics. I was a bit scared of spending €99 on a font, but I'd say it was worth it now.

## Pluggable IDEs: a world of extensions

I talked about extending VSCode/Codium earlier, let's dive into its jungle of extensions.

I started with the Vue language support extension and some integrations of  CLIs like ESLint and Prettier. They add syntax highlighting for the language, and inline linting/formatting information. They have become a necessity now, and I cannot do without these.

And then there are what I would name "Quality of Life" extensions. They exist to make your developer experience better, smoother. Some great examples would be [i18n ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) to display translation inline instead of translation keys or [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) to inline colored error/warning messages. Those extensions are a big part of why I stay within the VSCode ecosystem.

And then... there are themes.

## Coding in (pleasing and accessible) colors

I loved trying new themes. And I just love colors overall and the way we can play with them. It's fascinating how a set of colors can change everything in my developer experience.

I fell in love with Sarah Drasner's [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl). I really liked it, the choice of colors for the languages I was using really helped with reading code faster. Syntax highlighting colors were great for web technologies (HTML, CSS, JS).

I played around with other themes such as Nord, Monokai, Darcula... But I always went back to Night Owl. It's hard to switch themes. Your eyes and brain get used to seeing specific keywords in specific colors.

There was one exception: [Catppuccin](https://catppuccin.com/). Catppuccin is a theme, made of 4 palettes (flavors) of pastel colors. And it has ports. Lots of ports. This allowed me to have the same theme in all the tools I use (IDE, terminals...).

## TL;DR, what's in my IDE?

As of 2025, here are all the things in my IDE:
- VSCodium platform
- MonoLisa font (with cursive italics for comments)
- Catppuccin theme & icons
- Some language support and QOL extensions
- A very opinionated config

You can find almost everything in my [dotfiles](https://github.com/prazdevs/dotfiles/blob/main/programs/vscode.nix) in nix format (I use [Home Manager](https://github.com/nix-community/home-manager)). May this inspire you to explore customization, and make your IDE truly yours.
