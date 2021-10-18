---
title: 'Dag 10'
date: '2021-10-08'
---

Fortsetter midlertidig hiatus på meetnGreet appen så jeg får startet på utvikler dagbok/blog.
Her next js kommer inn i bildet. Nei, så langt nekter next js å installere. Var mye fremogtilbake ang. installasjon, noe som evt kan påvirke sikkerhet ettersom det jeg kom over av fix var små sjokkerende (cmd i admin mode, la modules få admin tilgang). Glem det! fikset!
Bootstrap appen er oppe å går! hurra! egentlig bare koble det opp med github med engang. Eller, skal vi prøve igjen? Det jeg lærte er at npm init next-app <appname> ikke vil installere uten package json fil. feilen jeg fikk var  (“Could not install from <npm dir> as it does not contain package.json file.”) så jeg brukte (npm install create-next-app@latest --save) og etter det (npm init next-app <appname>). Først trodde jeg kanskje det var pga mellomrom i dir ‘stian selle’ men var kanskje ikke det. funker ihvertfall nå.
Okei, rett på error men det går fint. fikk parser error om babel men fant en rask løsning som forhåpentligvis ikke ødelegger senere. opprettet .babelrc men presets:next/babel og plugins: [], mens i eslintrc byttet jeg ut "extends": "next/core-web-vitals" med {
  "extends": ["next/babel"]
}
fikk vekk errors selv om det lot meg rendre siden.
Jaja, begynner med å lage nye sider til bloggen, next js har ganske spennende integrert file system routing
hmm search ranking? bruke bilder feil kan påvirke dette
leser om css og metadata
