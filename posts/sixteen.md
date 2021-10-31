---
title: 'Dag 16'
date: '2021-10-20'
---

Fortsetter hvor jeg slapp igår, lager meeting table med meetingId field(PK) som er title og content fields. også userId og userName field + created. Guests er veldig lik.
Skriver stored procedures i.e delete, get, post, getMany, getBySearch etc. Tester ut en query og ser ut til å funke!
Hvorfor bruker jeg dapper istedefor microsofts enitity framework? først erfaring men og fordi EF abstraherer vekk SQL og jeg vil gjeren kunne SQL + dapper er ‘simpelt’.
Installerer Dapper (Er forresten nå i visual studio og jobber på backend, ikke visual studio code). Backend time! starte med data repostory classes.
installerer og System.Data.SqlClient (skulle jeg lastet ned Microsoft.Data.Sq… ?)
Viktig! passer parameters inn i Dapper istede for å konstruere SQL selv! SQL injection!
alle repository classes er skrevet men vet ikke om de fungerer enda
må skrive metoder som gjør write operations på databasen
installerer DbUp for å hjelpe å deploye forandringer til SQL databasen og holde orden på de.
Konfigurerer DbUp
Så var det å prøve seg på database migration! WOPWOP funker!
servernavn: DESKTOP-22E87JM\SQLEXPRESS
Da er det på tide å skrive REST API, starter med controllers i.e GET, POST, PUT, DELETE.
OPSOPS error, men fikset fort!
Ser ikke ut som jeg trenger swagger, men ikke sikker enda.
Laster ned Postman for å teste ut REST APIene. Yes! 201 HTTP status funker! PUT funker og! og Delete. POST er good.
Neste steg blir å legge til model validation.
model validation på vei, fjerner unødvendige request fields(bruker trenger ikke gjøre det selv).
Mye arbeid idag, får se litt på Real-Time API SignalR før jeg avslutter og fortsetter imorgen.
hvorfor signalR? jo fordi rest api krever klienten en request for å få ny data. SignalR pusher ny data fra serveren til klienten.
Oppretter en SignalR hub i backenden
installerer signalR i frontenden

er  return console.error(toString());
samme som return console.error(err.toString()); ?hmm
blocked by CORs policy?
var litt framogtilbake ang Date i MeetingsData nå, ser hvordan det går..SUKSESS! SignalR funker!
