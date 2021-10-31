---
title: 'Dag 23'
date: '2021-10-28'
---

Leser om azure og prøve å løse backend/frontend som ikke kobler (connection string?)

Dokumentasjon:
planlegging: 
Hentet inspirasjon fra møte og tenkte jeg kunne gjøre noe med det

gjennomføring:

problemer underveis:

løsninger:

Ettertanke:


MeetnGreet er en React frontend SPA(single-page application), med ASP.NET Core backend, som skal forsøke å etterligne en moderne sosial media app ved at flere brukere kan lage og kommentere på møter samtidig. Dette skal skje trygt, raskt og responsivt. Trygt ved at bare den som lager et møte kan endre eller slette et møte, og ved at SQL databasen er trygg fra SQL injection angrep, at brukeren må være innlogget for å lage eller kommentere på møte og ved at man ikke kan manuelt navigere i URLen. Autoriseringen til innloggingen blir gjort av auth0 og hostingen av server og app services blir gjort av Azure. Nye møter og kommenarer blir lastet inn automatisk uten at brukeren trenger å oppdatere siden

Stikkord: SQL injection attack
Verktøy:
Visual Studio Code IDE for React
Visual Studio 2019 IDE for C#
Typescript og linting i React for å gjøre det lettere å finne feil tidlig.
Automatisk kode formatering med Prettier
noe lazy routing slik at visse sider kun lastes inn ved bruk
validering slik at forms opptrer mer responsivt
Redux for å håndtere states
SQL Server Management Studio for å lage database
Dapper for å mappe SQL queries til C# klasser.
DbUp for å gjøre database migrasjoner
SignalR for real-time API
Postman for å teste ut REST API endepunkter
WebSurge for load testing
PerfView søppel håndtering
Auth0 for OpenID connect (OIDC)
