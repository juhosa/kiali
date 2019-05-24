# Kiälen speksi
Eli millee sitä puhutaa.

## Tekstin tulostaminen
Yksinkertainen tapa tulostaa tekstiä on sanoa vain 
````
tulost(tulostettavaAsia)
````

Argumenttina voi olla merkkijono
````
tulost('tulostettavaAsia')
````

tai muuttuja
````
tulost(muuttuja)
````

tai numero
````
tulost(3)
````

tai funktio
````
tulost(palautanJotain())
````

tai jokin suoritettava lauseke.
````
tulost(2 + 2)
````

## Muuttujat

Muuttujat määritellään tutulla ```muuttujan_nimi = arvioitava_lauseke``` syntaksilla.

```
a = 1
summa = 2 + 5
lista = [1, 2, 3]
```


## Käyttäjän syöte

```kysy``` palauttaa merkkijonon.
```
vastaus = kysy('sano asias:')
```
## Matikkaoperaattorit
Laskuja voi suorittaa ihan tavallisesti +, -, * ja / -operaattorein.
```
a = 2 + 2 # plus
a = 2 - 2 # miinus
a = 2 * 2 # kerto
a = 2 / 2 # jako
```

Pari lyhennystä löytyy myös nopeuttamaan yleisimpien asioiden kirjoittamista.
```
a++ # sama kuin a = a + 1
a-- # sama kuin a = a - 1
```

## Vertailuoperaattorit
Kiälestä löytyvät vertailuoperaattorit ovat seuraavassa taulussa:

| Operaattori | Selite |
|---|---|
|`o`|Vertailee kahta arvoa keskenään. Palauttaa true jos samat. Muuten palauttaa false. (===)|
|`o eri ku`|Vertailee kahta arvoa keskenään. Palauttaa true jos arvot ovat eri; muuten palauttaa false. (!==)|
|`o pienempi ku`|Vertailee kahta arvoa keskenään. Palauttaa true jos vasen on pienempi kuin oikea. Muuten palauttaa false. (<)|
|`o isompi ku`|Vertailee kahta arvoa keskenään. Palauttaa true jos vasen on suurempi kuin oikea. Muuten palauttaa false. (>)|

```
tulost(5 o 6) # tulostaa false
tulost(5 o eri ku 6) # tulostaa true
tulost(5 o pienempi ku 6) # tulostaa true
tulost(5 o isompi ku 6) # tulostaa false
```


## Ehtolauseet

## Funktiot

## Toistorakenteet
