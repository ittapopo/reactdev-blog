---
title: 'Dag 2'
date: '2021-09-30'
---

Tar å starter over. Decoupler jeg frontend og backend får jeg lastet ned nyere versjoner av react + bruke typescript(verdt det? build-time error vs runtime error). hvorfor VScode? litt raskere. (confirmed at react sin versjon er høyere nå). Neste steg, tillat VScode og lite typescript. Hvorfor gjør jeg dette? jo, var det som ble anbefalt til meg når jeg bygde react asp net app før. Autofix er borte i .vscode. Flere ting som har forandret seg siden sist jeg brukte dette, til det bedre tror jeg. Adder Prettier, noe som ga meg vulnerabilities, kjørte npm audit fix(oppdaterer dependencies). Forsvar brukt av eslint, typescript og prettier(consistency).
eslint regler -> .eslintrc.json  formating regler -> .prettierrc      brukte eslint-config-prettier for å stoppe ESLint konflikte med prettier.
bruker babeljs for å teste ut jsx
jsx er HTML med javascript med curly braces
begynne å dele prosjektet inn i biter
begynner å lage header
Fjernet “rules” “prettier”: error fra eslintrc.json pga ville ikke starte
Laster ned Zondicons “A set of free premium SVG icons for you to use on your digital products.”

Begynner i det små, lager header og homepage components

