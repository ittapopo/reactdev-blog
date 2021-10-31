---
title: 'Dag 20'
date: '2021-10-25'
---

Bare beiner på for å ferdiggjøre auth0 og rest api. lager singin og signout sider + en central auth context. problemer som vanlig, går nøye gjennom å ser hvorfor user ikke er defined. injecter user inn i setUser i Auth0 slik setUser(await auth0FromHook.getUser()); ser om det går, compiler ihvertfall


er flere sider jeg må skrive om men tror det skal være relativt lett å gjøre. er mye å skrive om.. men det compiler foreløpig, må fikse mer på det etter jobb.
