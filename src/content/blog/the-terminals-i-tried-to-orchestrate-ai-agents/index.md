---
title: "The terminals I tried to orchestrate AI agents"
date: "2026-04-03 10:00:00"
tags: ["terminal", "ai", "agents", "opencode", "claude-code", "codex", "developer-tools"]
language: "en"
icon: "superset"
description: "The terminals I tried before settling on Superset to organize multiple AI agents across multiple projects."
---

<div class="terminal-deck">
  <a class="terminal-deck-card" href="https://ghostty.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://ghostty.org/favicon-32.png" alt="Ghostty logo" />
    <strong>Ghostty</strong>
  </a>
  <a class="terminal-deck-card" href="https://www.warp.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://framerusercontent.com/images/GybmHeNj1WzkgFqIjQYypmhg.png" alt="Warp logo" />
    <strong>Warp</strong>
  </a>
  <a class="terminal-deck-card terminal-deck-card--light" href="https://cmux.com/es" target="_blank" rel="noopener noreferrer">
    <img src="https://cmux.com/logo.png" alt="cmux logo" />
    <strong>cmux</strong>
  </a>
  <a class="terminal-deck-card" href="https://www.conductor.build/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.conductor.build/icon.png?icon.64079579.png" alt="Conductor logo" />
    <strong>Conductor</strong>
  </a>
  <a class="terminal-deck-card" href="https://superset.sh/" target="_blank" rel="noopener noreferrer">
    <img src="https://superset.sh/favicon-192.png" alt="Superset logo" />
    <strong>Superset</strong>
  </a>
</div>

<style>
  .terminal-deck {
    display: flex;
    align-items: stretch;
    margin: 24px 0 32px;
    padding: 8px 0;
    overflow-x: auto;
  }

  .terminal-deck-card {
    min-width: 138px;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    padding: 18px;
    background: rgba(255, 255, 255, 0.03);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transition: transform 220ms ease, margin 220ms ease, box-shadow 220ms ease,
      border-color 220ms ease;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
    margin-left: -26px;
  }

  .terminal-deck-card:first-child {
    margin-left: 0;
  }

  .terminal-deck:hover .terminal-deck-card {
    margin-left: 10px;
  }

  .terminal-deck:hover .terminal-deck-card:first-child {
    margin-left: 0;
  }

  .terminal-deck-card:hover {
    transform: translateY(-6px);
    z-index: 5;
    border-color: rgba(255, 255, 255, 0.24);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  }

  .terminal-deck-card img {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    object-fit: contain;
  }

  .terminal-deck-card strong {
    color: #eeeee2;
    font-size: 0.95rem;
  }

  .terminal-deck-card--light img {
    background: #fff;
    padding: 4px;
  }

  @media (max-width: 720px) {
    .terminal-deck {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      overflow: visible;
    }

    .terminal-deck-card,
    .terminal-deck-card:first-child,
    .terminal-deck:hover .terminal-deck-card,
    .terminal-deck:hover .terminal-deck-card:first-child {
      margin-left: 0;
    }
  }
</style>

Once you start running multiple AI agents across multiple projects, your terminal stops being just a terminal.

At that point, speed alone is not enough. You also need visibility, isolation, notifications, workspaces, and a way to keep multiple agents from stepping on each other.

This is the path I followed: [Ghostty](https://ghostty.org/), [Warp](https://www.warp.dev/), [cmux](https://cmux.com/es), [Conductor](https://www.conductor.build/), and finally [Superset](https://superset.sh/).

## Ghostty

![Ghostty](https://ghostty.org/social-share-card.jpg)

I started with Ghostty because it felt fast, native, and clean.

For a while, that was more than enough. It is still one of the best terminals if what you want is a fast and polished terminal experience. But once I started leaning harder into AI workflows, I felt like I was missing some of the newer ideas modern terminals were building around agents.

So this was not about Ghostty being bad. It was more about me wanting the next layer on top of a great terminal.

## Warp

![Warp](https://framerusercontent.com/images/vvDFwPAa66yI9T0kGNhd43kHcM.png)

Warp felt like the obvious next step.

It had a more modern interface, good tab and split management, and a clear AI-first direction. On paper, it looked like the kind of tool I was looking for.

But after using it for a while, I realized I was mostly treating it like a regular terminal. Yes, it was better in some areas, but it never fully convinced me as the place where I wanted to coordinate multiple projects and multiple agents in parallel.

## cmux

![cmux](https://cmux.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-image.70ebd164.png&w=3840&q=75&dpl=dpl_4d5DQq9vW8Cmy1v2ik3ED7jjkeBD)

Then I tried cmux, and this one immediately caught my attention.

It felt like the missing layer on top of Ghostty: vertical tabs, split panes, better workspace organization, notifications, and even the idea of keeping a browser next to the terminal. The concept made a lot of sense for agent workflows.

Still, I never fully clicked with it. It felt promising, but not fully polished yet. In my case, notifications did not feel reliable enough, and switching back into cmux from another app did not feel smooth because focus behavior was not as good as I wanted.

I liked the direction a lot. I just did not love the execution enough to stay there.

## Conductor

![Conductor](https://www.conductor.build/_next/image?url=%2Fdark-screenshot-no-bg.png&w=3840&q=75)

After that I moved to Conductor.

This was the first tool where I felt the UI was really refined. Everything looked more intentional, and the multi-agent workspace idea felt much more mature. It was easier to see what was happening and keep things organized.

But there were two things that made me move on. First, it was not open source. Second, and more importantly for me, it did not fit the CLI mix I actually wanted to use, especially now that OpenCode is a key part of my workflow.

So even though I think Conductor is very well built, it was not the place where I wanted to settle.

## Superset

![Superset](https://superset.sh/og-image.png)

Superset was the first tool that really made the whole workflow click for me.

It gives me workspace management, worktrees, a notification system that actually helps, and support for the CLIs I care about: OpenCode, Claude Code, and Codex CLI.

That part matters more than people think. Once you get used to a certain agent workflow, being forced into a different one adds friction. Superset does not force that. It gives me structure without forcing me into one specific agent.

That is the difference.

## Quick comparison

| Tool | What it gave me | Why I moved on |
| --- | --- | --- |
| Ghostty | A fast, native, clean terminal | I started missing newer AI-oriented workflow features |
| Warp | Better UX, tabs, splits, and a more modern direction | I still used it like a normal terminal |
| cmux | Better workspace organization and stronger agent ideas | It still felt rough in some important details |
| Conductor | A very refined multi-agent UI | It did not fit the CLI setup I wanted |
| Superset | Workspaces, worktrees, notifications, and CLI freedom | My current choice |

## My current stack

Today my stack is Superset + OpenCode + Claude Code CLI + Codex CLI because it lets me use the CLI I want without losing sight of what is happening across multiple projects and multiple windows at the same time.

This is roughly how I use it:

- I usually work on 3 or 4 projects in parallel.
- Each project has 2 or 3 terminals.
- Each agent runs in a different worktree so they do not step on each other.
- My main setup right now is OpenCode with GPT 5.4 high and Opus 4.6 high.
- If I want to test something new or compare behavior, I jump into Claude Code.
- I use Codex CLI much less often, but I still keep it in the mix.
- I open VS Code mostly for final manual review.

I still do UI work manually. That part is artisanal for me. I prefer to handle layout and visual decisions myself, and then let AI help me polish the logic without touching the interface.
