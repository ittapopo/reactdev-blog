---
title: 'Dag 15'
date: '2021-10-19'
---

Starter med å lese om redux, hvorfor redux? holder alle app statene i et objekt.
laster ned redux, react-redux og redux-thunk
hm, masse vulnerabilities med redux…
lager en store.ts i src
hm, er noen variabelnavn som forvirrer meg, går tilbake å forandrer de
redux store er litt tricky pga async og type annotations
prøver å connecte hompage til redux store. suksess! nå askpage…
bør jeg legge til meetingpage og searchpage til redux store og? hm
mye fram og tilbake med ser ut til å funke nå. da er det på tid å begynne med backend…
ting å se på ang. backend: SignalR, Dapper, Entity Framework Core, SQL server database, DbUp.
Laster ned SQL Server 2017 express (!!) og SQL server management studio
for å kunne installere sql server 2017 måtte jeg gå inn å fjeren sql server 2012 native client

noe SQL Server 2017 info
connection string: Server=localhost\SQLEXPRESS01;Database=master;Trusted_Connection=True; 

åpner ssms og connecter til SQL server instance, under databases lager jeg nye database
hm må skrive SQL da
