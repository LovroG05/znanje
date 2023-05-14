---
title: Test 2 teorija
---

# Povezavna plast

- omogoča ugotavljanje napak (pariteta, prečna pariteta)
- osnovna enota je **okvir**
- skrbi za kontrolo pretoka - hitrost obdelave informacij
- **protokoli**:
  - **LLC** (Logical Link Control), ki skrbi za prenos informacij v omrežno plast
  - **MAC** (Media Access Control), ki definira pristopne metode ali tehnike dostopa do medija

## Ethernet okvir

| 7B             | 1B  | 6B        | 6B       | 2B           |      | 4B       |
| -------------- | --- | --------- | -------- | ------------ | ---- | -------- |
| sinhronizacija | SOF | dest. mac | src. mac | type, length | data | FCS, CRC |

## Pristopne metode

### Brez rezervacije

- brez semaforja
- nedeterministična
- trki
- za manj obremenjena omrežja (včasih)
- CSMA/CD (Carrier Sense Multiple Access With Collision Detection) (half-duplex):
  1. Naprava preveri, če je prenosni medij prost
  2. Boj za prenosni medij
  3. Prenos podatkov
- do trka je prišlo kadar sta 2 napravi zaznali, da je prenosni medij prost
- napravi ob trku prenehata pošiljati
- po naključnem časi napravi spet začneta pošiljati

### Z rezervacijo

- semaforno križišče
- deterministična
- ni trkov
- za obremenjena omrežja
- TOKEN RING
  - obroč, lahko tudi zvezda
  - token -> medij prost ali ne (T=1 prost)
  - naprava, ki je oddala sporočilo sprosti žeton
  - FDDI (Fiber Data Distribution Interface)
    - optika (100Mb/s)
    - razdalja (2.5km (prej 80+))
    - mehanizem je bil enak kot token ring
  - CDDI (Copper Data Distribution Interface)
    - razdalja 100m
    - hitrost 100Mb/s

# Topologije omrežij

## Fizična

- [] Vodilo
- [] Obroč
- [x] Zvezda
- [x] Razširjena zvezda
- [x] polna (mesh)

### Mesh

- v večini to uporabljajo ISP, da zagotovijo redundantne povezave
- vsi povezani z vsemi

### Razširjena zvezda

- omogoča povečanje razdalje

### Vodilo

- vse naprave so priključene na 1 medij (koaksialni kabel)
- na obeh koncih je zaključen impedančno -> prepreči odboj signala
- če se 1 naprava zruši se zrušijo vse

## Brezžična

- neodvisni osnovni storitveni nit (IBSS):
  - neposredno komuniciranje brez dostopne točke
  - povezava enakovrednih
- osnovni storitveni niz s pomočjo dostopnih točk (BSS):
  - celotna komunikacija prek access pointa
- razširitveni storitveni (ESS):
  - večja pokritost prostora -> več access pointov

# Fizična plast

- **kabli**
  - žični
    - koaksialni (BNC)
    - sukana parica (RJ-45)
      - kategorija:
        - cat 3
        - cat 5
        - cat 5e (1Gb/s)
        - cat 6
        - cat 6a
        - cat 7, 8
      - ozemljitev:
        - UTP (unshielded twisted pair)
        - STP (shielded) - manj
        - FTP (foiled) - še manj
      - uporaba
        - cross (x-kabel): enaka naprava
        - straight (patch): različna naprava
        - rollover (konzolni): konf. naprav
    - optika
  - brezžični
    - radijski valovi
    - IR svetloba
    - sateliti

## Optična vlakna

- gre za prenos svetlobe, zato so neobčutliva na elektro-magnetne in RF motnje
- največ jih uporabljamo za:
  - hrbtenična omrežja
  - v industrijskih okoljih
  - za daljše razdalje
- ločimo:
  - **enorodovno vlakno** - širi se 1 žarek, izvor svetlobe je laser, daljše razdalje
  - **večrodovno vlakno** - širi se več žarkov hkrati, razdalje so krajše, izvor svetlobe je tudi LED, večji stržen kot pri enorodovni

# ARP - Address Resolution Protokol

- poznamo IP naslov naprave, iščemo MAC
- pomankljivosti:
  - velikokrat uporabi broadcast
  - ARP spoofing

# Načini pošiljanja sporočil

- unicast (samo 1):
  - IP in MAC dest. se združita

| dest. MAC         | src. MAC       | dest. IP    | src. IP     | data | trailer |
| ----------------- | -------------- | ----------- | ----------- | ---- | ------- |
| 00-02-09-42-ac-28 | 00-07-63-6c-53 | 192.168.1.2 | 192.168.1.3 | data | trailer |

- multicast (grupi):
  - IP in MAC dest. pošljeta grupi

| dest. MAC         | src. MAC       | dest. IP       | src. IP     | data | trailer |
| ----------------- | -------------- | -------------- | ----------- | ---- | ------- |
| 00-02-09-42-ac-28 | 00-07-63-6c-53 | 224.15.100.192 | 192.168.1.5 | data | trailer |

- broadcast(vsem):

| dest. MAC         | src. MAC       | dest. IP      | src. IP     | data | trailer |
| ----------------- | -------------- | ------------- | ----------- | ---- | ------- |
| FF-FF-FF-FF-FF-FF | 00-07-63-6c-53 | 192.168.1.255 | 192.168.1.5 | data | trailer |


# MAC naslov

- 2. plast
- je fizičen naslov, ki je zapečen na mrežni kartici
- načeloma ga ne spremenimo
- je v hex sestavu
- 6 sklopov, po 2 števki
- 48b

# Naprave za povezovanje omrežij

- usmerjevalnik (router)
- stikalo (switch)
- koncentrator (hub)
- dostopna točka (access point)
- integrirana naprava
- ojačevalnik signala

## Koncentrator

- sporočilo pošlje vsem napravam (veliko nepotrebnega prometa)
- half-duplex
- problem varnosti

## Stikalo

- zna poslati točno določeni napravi, ker ima svojo interno tabelo (umesnik, MAC)
- half-duplex
- v krajevnih omrežjih

## Usmerjevalnik

- povezuje različna omrežja med sabo
- usmeerja promet med omrežji z uporabo statičnega ali dinamičnega algoritma
- varnost (firewall)
- NAT
- DHCP

# NAT

- usmerjevalnik privatne IP naslove preslika v javne IP naslove
- PAT privatni se spremenijo v 1 javni IP (doda še št. porta)
- ločimo statičen in dinamičen NAT
- pri statičnem se vedno isti privatni IP preslika v točno določen javni IP
- pri dinamičnem se privatni IP spremeni v enega izmed javnih IP, vendar ne vedno v isti javni IP naslov. Seja se lahko vzpostavi le v smeri privatni IP -> internet in NE obratno


