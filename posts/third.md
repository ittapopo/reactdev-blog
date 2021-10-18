---
title: 'Dag 3'
date: '2021-10-01'
---

Starter med å lage mock data sånn at homepagen har noe å vise. Mock dataen kan jeg gjøre mer med, ok for nå.
Installerer emotion/core og emotion/styled (hvorfor???).
Forandrer litt på bakgrunnsfarger i index.css>body,
Hm problem (Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>')

emotion var hodebry, nuked node_module folder og npm installer. Det førte bare til mer problemer, slettet frontend folder og lastet den ned igjen fra github. Viktig å lagre:)) prøver igjen…
addet "types": ["@emotion/react/types/css-prop"] til tsconfig.json og løste ett problem men skapte ett nytt… pragma and pragmaFrag cannot be set when runtime is automatic

/** @jsxRuntime classic */ over /** @jsx jsx */
løste saken foreløpig… håper ikke det slår tilbake…
Neste problem var at github og vscode ikke var linket etter reinstall. ser ut som det løste seg greit og jeg fikk mer git trening
nytt problem ved styling… you have tried to stringify object returned from css function …
Fikset ved at jeg hadde /** @jsx jsx*/ istedefor /** @jsx */
