---
date: '2025-11-29T09:24:55+01:00'
draft: false
title: 'De inleiding'
tags: ['gerrit', 'malek', 'xi']
---

Hij was helemaal vergeten dat de derde verdieping deze week verbouwd zou worden. In de vergaderruimte die hij gereserveerd had stonden de tafels tegen de muur en de stoelen er bovenop. In de hoeken waren emmers verf opgestapeld. Het rook er al echt naar verbouwing ook.

Aan de andere kant van de verdieping was er nog een hok vrij, ze pasten er nog net met z'n tweeën in en Malek haakte online aan. Malek had willen praten over het gebruik van *any* in de code.

'Goed,' zei Xi, 'ik heb dus een regelset achterhaald die gestandaardiseerd is binnen dit bedrijf. Ik heb gebruik gemaakt van-eh ChatGPT om deze om te zetten naar een worddocument en-eh ChatGPT heeft aan elke regel een *severity* toe-eh-gekend. Nu, ik vind, alles wat op *critical* staat moeten wij doen sowieso, en wat-eh op *error* staat ook. Dan heb jij nog, daarnaast zijn er twee niveaus *warnings*, als je daar naar kijkt, dat is eigenlijk ook, ja ik vind heel redelijk allemaal. Dus ik-eh zie geen reden om die niet ook mee te nemen.'

Hij sprak sneller dan normaal, op het kortademig af. Gedurende zijn hele monoloog keek hij naar het scherm met het worddocument, selecteerde een regel hier en daar of een *severity*. Af en toe opende Malek zijn mond om een vraag te stellen, maar dan denderde Xi voort en wachtte hij het volgende moment af. Maar dat kwam maar niet.

'Dan, over *any*.'

'Ho even,' brak hij in. 'Laten we eerst dit blokje even afronden. Malek, heb jij nog vragen of iets wat je kwijt wil over deze regels?'

Hij keek kort, via het dakraam, maar de grijze hemel en besloot, 'nee, ik vind ze ook redelijk.'

'Oké, mooi. De vraag is dan: wie gaat het op zich nemen om ze te implementeren? Xi, jij? Mooi. Ik neem aan dat je ze, omdat ze gestandaardiseerd zijn, van een centrale plek ergens naar binnen kan trekken? Ik bedoel, het zou me verbazen als we ze zelf uit zouden moeten schrijven, het lijkt me niet dat we het wiel hier opnieuw uit hoeven te vinden.'

'Nee, er is-eh een API, dat hadden we bij mijn vorige bedrijf ook. Dus het is-eh die API aanroepen en dan hier,' hij opende een configuratiebestand en selecteerde de juiste plek, 'een of twee *extends* toevoegen.'

'Juist, ik geloof je meteen. Zet je dit op de *backlog*? Ja? Dan kunnen we nu door naar de *any*'s.'

'Ik heb vanochtend gekeken,' begon Malek, 'en we hebben nu een stuk of honderd plekken in de code waarin we *any* gebruiken.'

'Honderdzeven,' Xi toverde met een vlugge zoekopdracht een teller op het scherm.

'Ja, honderdzeven plekken dus, en dat is problematisch, want *any* zegt helemaal niets over de context waarin...'

'Ik vind dus,' zei Xi, '*any* is gewoon een onderdeel van-eh de taal en dus hoeft helemaal niet zo een probleem te zijn.'