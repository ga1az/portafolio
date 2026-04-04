---
title: "Las terminales que probé para orquestar agentes de AI"
date: "2026-04-03 10:00:00"
tags: ["terminal", "ai", "agentes", "opencode", "claude-code", "codex", "developer-tools"]
language: "es"
description: "Las terminales que probé antes de quedarme con Superset para ordenar múltiples agentes de AI en varios proyectos."
---

<div class="terminal-deck">
  <a class="terminal-deck-card" href="https://ghostty.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://ghostty.org/favicon-32.png" alt="Logo de Ghostty" />
    <strong>Ghostty</strong>
  </a>
  <a class="terminal-deck-card" href="https://www.warp.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://framerusercontent.com/images/GybmHeNj1WzkgFqIjQYypmhg.png" alt="Logo de Warp" />
    <strong>Warp</strong>
  </a>
  <a class="terminal-deck-card terminal-deck-card--light" href="https://cmux.com/es" target="_blank" rel="noopener noreferrer">
    <img src="https://cmux.com/logo.png" alt="Logo de cmux" />
    <strong>cmux</strong>
  </a>
  <a class="terminal-deck-card" href="https://www.conductor.build/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.conductor.build/icon.png?icon.64079579.png" alt="Logo de Conductor" />
    <strong>Conductor</strong>
  </a>
  <a class="terminal-deck-card" href="https://superset.sh/" target="_blank" rel="noopener noreferrer">
    <img src="https://superset.sh/favicon-192.png" alt="Logo de Superset" />
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

Una vez que empiezas a correr múltiples agentes de AI en varios proyectos al mismo tiempo, la terminal deja de ser solo una terminal.

En ese punto ya no alcanza con que sea rápida. También necesitas visibilidad, aislamiento, notificaciones, workspaces y una forma de evitar que varios agentes se pisen entre sí.

Este fue mi recorrido: [Ghostty](https://ghostty.org/), [Warp](https://www.warp.dev/), [cmux](https://cmux.com/es), [Conductor](https://www.conductor.build/), y por último [Superset](https://superset.sh/).

## Ghostty

![Ghostty](https://ghostty.org/social-share-card.jpg)

Empecé con Ghostty porque se sentía rápida, nativa y limpia.

Durante bastante tiempo eso me alcanzó de sobra. De hecho, me sigue pareciendo de las mejores terminales si lo que buscas es una experiencia rápida y bien construida. Pero cuando empecé a meterme más fuerte en flujos con AI, sentí que me estaba perdiendo algunas de las ideas nuevas que otras terminales modernas estaban empujando alrededor de agentes.

Entonces no fue que Ghostty me pareciera mala. Fue más bien que yo ya estaba buscando la siguiente capa arriba de una gran terminal.

## Warp

![Warp](https://framerusercontent.com/images/vvDFwPAa66yI9T0kGNhd43kHcM.png)

Después me pasé a Warp porque parecía el siguiente paso lógico.

Tenía una interfaz más moderna, buen manejo de pestañas y divisiones, y una dirección mucho más orientada a AI. Sobre el papel sonaba exactamente a lo que yo estaba buscando.

Pero con el tiempo me di cuenta de que la estaba usando casi como una terminal normal. Sí, tenía cosas mejores, pero nunca terminé de sentir que fuera el lugar desde donde realmente quería coordinar múltiples proyectos y múltiples agentes en paralelo.

## cmux

![cmux](https://cmux.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-image.70ebd164.png&w=3840&q=75&dpl=dpl_4d5DQq9vW8Cmy1v2ik3ED7jjkeBD)

Luego probé cmux, y esta me llamó la atención enseguida.

Se sentía como eso que le faltaba a Ghostty: pestañas verticales, paneles divididos, mejor organización por workspace, notificaciones, e incluso la idea de tener un navegador al lado de la terminal. Como concepto, para trabajar con agentes, tenía muchísimo sentido.

Igualmente nunca terminé de enamorarme. Se veía prometedora, pero todavía la sentía poco pulida. En mi caso las notificaciones no me funcionaban tan bien como esperaba, y al volver a cmux desde otra app el foco no se sentía tan fino como yo quería.

La dirección me gustó mucho. La ejecución todavía no tanto como para quedarme ahí.

## Conductor

![Conductor](https://www.conductor.build/_next/image?url=%2Fdark-screenshot-no-bg.png&w=3840&q=75)

Después de eso me fui a Conductor.

Esta fue la primera donde sentí una UI realmente refinada. Todo se veía más intencional y la idea de workspace multi-agente estaba mucho más madura. Era más fácil ver qué estaba pasando y mantener ordenado el trabajo.

Pero hubo dos cosas que me hicieron seguir buscando. La primera es que no es open source. La segunda, y para mí la más importante, es que no encajaba con la mezcla de CLIs que yo realmente quería usar, sobre todo ahora que OpenCode es una parte clave de mi flujo.

Así que, aunque me parece un producto muy bien construido, no fue el lugar donde me quise quedar.

## Superset

![Superset](https://superset.sh/og-image.png)

Superset fue la primera herramienta donde realmente me hizo click todo el flujo.

Me da gestión de workspaces, worktrees, un sistema de notificaciones que sí ayuda, y soporte para las CLIs que a mí me importan: OpenCode, Claude Code y Codex CLI.

Y eso importa más de lo que parece. Cuando ya te acostumbras a cierto flujo con agentes, que una herramienta te obligue a cambiarlo mete fricción. Superset no me obliga a eso. Me da estructura sin forzarme a usar un agente específico.

Ahí está la diferencia.

## Comparativa rápida

| Herramienta | Qué me aportó | Por qué seguí buscando |
| --- | --- | --- |
| Ghostty | Una terminal rápida, nativa y limpia | Empecé a extrañar features más orientadas a workflows con AI |
| Warp | Mejor UX, pestañas, divisiones y una dirección más moderna | La seguía usando como una terminal bastante normal |
| cmux | Mejor organización por workspace e ideas más cercanas al flujo con agentes | La seguía sintiendo verde en detalles importantes |
| Conductor | Una UI multi-agente mucho más refinada | No encajaba con la mezcla de CLIs que yo quería |
| Superset | Workspaces, worktrees, notificaciones y libertad de CLI | Es mi elección actual |

## Mi stack actual

Yo hoy ocupo Superset + OpenCode + Claude Code CLI + Codex CLI porque me permite trabajar con la CLI que yo quiera sin perder de vista lo que está pasando en múltiples proyectos y múltiples ventanas al mismo tiempo.

Más o menos así lo uso:

- Normalmente trabajo en 3 o 4 proyectos en paralelo.
- Cada proyecto tiene 2 o 3 terminales.
- Cada agente vive en un worktree distinto para que no se pisen los talones.
- Mi setup principal hoy es OpenCode con GPT 5.4 high y Opus 4.6 high.
- Si quiero probar algo nuevo o comparar comportamientos, salto rápido a Claude Code.
- Codex CLI la uso mucho menos, pero igual forma parte del stack.
- VS Code lo abro más que nada para revisión manual fina.

La UI la sigo haciendo manual. Esa parte para mí sigue siendo artesanal. Prefiero hacer yo la maquetación y las decisiones visuales, y después dejar que la AI me ayude a pulir la lógica sin tocar la interfaz.
