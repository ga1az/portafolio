---
title: "[CLI] Instant Code Context for AI"
date: "2025-05-22 15:38:14"
tags: ["Go","CLI", "LLM", "AI", "Code Context"]
language: "en"
description: "PathDigest is a Go-based CLI tool that transforms any Git repository or local directory into a concise text digest. It optimizes code structure and content for easy ingestion as context in Prompts for Large Language Models (LLMs)."
href: ""
hasBlog: true
---

PathDigest is a Go-based CLI tool that transforms any Git repository or local directory into a concise text digest. It optimizes code structure and content for easy ingestion as context in Prompts for Large Language Models (LLMs).

> Local Directory

<video width="600" autoplay loop muted>
  <source src="/directory.mp4" type="video/mp4">
</video>

> GitHub Repository

<video width="600" autoplay loop muted>
  <source src="/github.mp4" type="video/mp4">
</video>

## Features
- ⚙️ Intuitive CLI: Easy to use from your terminal.
- 🔗 Git & Local Support: Processes remote repository URLs and local directories.
- ✂️ Smart Filtering: Sensible defaults (e.g., .git, node_modules) and customizable glob patterns for includes/excludes.
- ⚖️ Size Control: Limits the maximum size of files processed.
- 📦 Simple Installation: Available via go install and an installation script.

## Installation

```bash
go install github.com/ga1az/pathdigest@latest

# or using the installation script
curl -sSfL https://raw.githubusercontent.com/ga1az/pathdigest/main/install.sh | sh -s

# Install to a specific directory
curl -sSfL https://raw.githubusercontent.com/ga1az/pathdigest/main/install.sh | sh -s -- -b /usr/local/bin
```

