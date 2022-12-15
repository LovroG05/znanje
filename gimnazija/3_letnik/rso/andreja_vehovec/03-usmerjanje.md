---
title: Usmerjanje
---

Usmerjevalniki s pomočjo usmerjevalnih algoritmov usmerjajo promet iz 1 v 2 omrežje.
Glede na fleksibilnost jih delimo na **statične** in **dinamične**.

## Statični

Zanj je značilno (algoritme), da jih postavimo tam, kjer **ni drugih alternatih poti**. Za vsako spremembo usmerjevalne poti pa je potreben poseg **administratorja**. Pri statičnem usmerjanju podamo **vsa omrežja**, ki jih ruter **nima direktno priključenih** in podamo **next hop**.

```
R1> enable
R1# configure terminal
R1(config)# ip route <nepovezano omrežje> <maska> <next hop>
R1(config)# ip route 192.168.1.0 255.255.255.0 192.168.2.2

R2(config)# ip route 192.168.3.0 255.255.255.0 192.168.2.1
```
**Default routa**
```
R1(config)# ip route 0.0.0.0 0.0.0.0 192.168.2.1
```

## Dinamični

Prednosti:
    - odpravi se potreba po številnih posegih administratorja
    - dosežemo hitrejši odziv in vzpostavitev nove poti zaradi hitrega in avtomatskega delovanja usmerjevalnih algoritmov (če se prekine)

Dinamične usmerjevalne protokole glede na izračun optimalne poti delimo na:
    - **distance vector**
    - **link state**

### Vektor razdalje
upošteva razdaljo, ki pove koliko daleč je iskano omrežje od dotičnega usmerjevalnika in pa vektor, ki pove v katero smer mora poslati paket, da bo prišel do končnega omrežja.

### Metrika
nam pove, po kateri poti naj gre glede na:
    - število skokov
    - hitrost
    - zakasnitev
    - zanesljivost

### RIP
```
R1(config)# router rip
R1(config-router)# network <ip omrežja, priključenega na ruter>
R1(config-router)# network 192.168.1.0
R1(config-router)# network 192.168.2.0

R2(config)# router rip
R2(config-router)# network 192.168.2.0
R2(config-router)# network 192.168.3.0
```

### Usmerjevalne tabele
```
R1# show ip route
C  10.1.0.0 fa0/0 0
C  10.2.0.0 fa0/1 0
R  10.3.0.0 fa0/0 1
R  10.4.0.0 fa0/0 2
```

Ruter pošlje svojo usmerjevalno tabelo, drugi ruter iz nje izpiše omrežja, ki jih še nima in št. skokov poveča za 1

#### Prednosti
- enostavna nastavitev in vzdrževanje
- nezahtevne po zmogljivosti

#### Slabosti
- počasna konvergenca
- omejeno število usmerjevalnikov (max 15 hopov)
- krožno pošiljanje paketov (routing loops)

**Link state** - pri stanju povezav si usmerjevalniki pošiljajo LSA pakete in na podlagi le-teh gradijo topologijo omrežij. Takoj, ko pride do izpada neke povezave se pošlje sporočilo in vzpostavi se nova povezava. Pri OSPF je med sabo lahko povezanih ogromno število usmerjevalnikov, zato usmerjevalnike razdelimo na **AREA(območja)**. Znotraj enega območja si usmerjevalniki pošiljajo podatke, med območji pa podatke pošiljajo **Core routerji**. Za izračun optimalne poti protokol OSPF upošteva število skokov, propustnost, zakasnitev in pa zanesljivost(**metrika**)

### OSPF
```
R1(config)# router OSPF 1       // 1 je število procesa
R1(config-router)# network <ip> <reverzna maska> area 0
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# network 192.168.2.0 0.0.0.255 area 0
```

## Dinamično naslavljanje
Namesto da bi ročno vpisovali:
- IP
- Masko
- DNS
- Default gateway

dobi naprava te podatke od DHCPja.


1. D (PC -> broadcast) discover
2. O (DHCP -> unicast do PC) offer
3. R (PC -> broadcast) request
4. A (DHCP -> unicast) acknowledgement

```
R1(config)# ip dhcp pool <ime>
R1(config-dhcp)# network 192.168.1.0 255.255.255.0
R1(config-dhcp)# default-router 192.168.1.1
R1(config-dhcp)# dns-server 1.1.1.1
