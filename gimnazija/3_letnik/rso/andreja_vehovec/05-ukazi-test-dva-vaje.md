---
title: Ukazi za 2. test
---

# VLAN

Switch\> enable

Switch # configure terminal

Switch(config)# vlan \<št. VLAN\> 2

Switch(config-vlan)# name \<ime VLAN\> meow

Switch(config-vlan)# exit

---

Switch\> enable

Switch # configure terminal

Switch(config)# interface \<št. vmesnika\> int

Switch(config-if)# switchport mode access

Switch(config-if)# switchport access vlan \<VLAN ID\> 2

Med sw sw ali sw ro

Switch\> enable

Switch # configure terminal

Switch(config)# interface \<št. vmesnika\>

Switch(config-if)# switchport mode trunk

## Preverjanje:

Switch\> enable

Switch # show vlan

Switch\> show run

## Povezava Valn preko usmerjevalnika:

Router \> enable

Router # configure terminal

Router (config)# interface \<št. vmesnika\>	

Router (config)# no shutdown

Router (config)#interface fastEthernet 0/1. \<št.Vlan\> 

Router (config-subif)#encapsulation dot1q \<št.Vlan\>

Router (config-subif)#ip address \<ip številka\> \<maska omrežja\>			


# IPV6 STATIČNO IN DINAMIČNO 

Router0\>enable

Router0#configure terminal

Router0 (config)#ipv6 unicast-routing

Router0 (config)#interface f0/0

Router0 (config-if)#ipv6 enable

Router0 (config-if)#ipv6 address ABCD:0123:FFEE::1/48

Router0 (config-if)#no shutdown


## Nastavitve za  dinamično usmerjanje RIPng na Router0:

Router0\>enable

Router0#configure terminal

Router0 (config)#ipv6 unicast-routing

Router0 (config)#interface f0/0

Router0 (config-if)#ipv6 rip Router0 enable

Router0 (config)#exit

Router0 (config)#interface f0/1

Router0 (config-if)# ipv6 rip Router0 enable

Router0 (config)#exit

## Nastavitev OSPFv3

Router0\>enable

Router0#configure terminal

Router0 (config)#ipv6 unicast-routing

Router0(config)#ipv6 router ospf 1

Router0(config-rtr)#router-id 1.1.1.1 (***vsak router ima svoj id)

Router0 (config)#interface f0/0

Router0 (config-if)#ipv6 ospf 1ime area 0

Router0 (config)#exit

# Statično

Router0\>enable

Router0#configure terminal

Router0(config)#ipv6 route ABCD:2234:FFEE::/48 ABCD:1234:FFEE::2 \<najprej navedete omrežje z masko in nato naslednji skok\>

Router0 (config)#ipv6 route ABCD:3234:FFEE::/48 ABCD:1234:FFEE::2 

Router0 (config)#ipv6 route ABCD:4234:FFEE::/48 ABCD:1234:FFEE::2



# STIKALO L3

Switch(config)#ip routing

SW(config)#vlan 2

SW(config-vlan)#name vodstvo

SW(config-vlan)#exit

Switch(config)#interface fastethernet 0/2

Switch(config−if)#switchport mode access

Switch(config−if)#switchport access vlan2

Switch(config−if)#no shutdown



## Enako ponovimo za vlan3 in vlan10.

Switch#conf t

Switch(config)#interface Vlan2

Switch(config−if)#ip address 192.168.2.1 255.255.255.0

Switch(config−if)#no shutdown

## Enako ponovimo za vlan3 in vlan10.

Switch(config)#ip routing

Switch(config)#interface FastEthernet 0/1

Switch(config−if)#no switchport

Switch(config−if)#ip address 200.0.0.1 255.255.255.0

Switch(config−if)#no shutdown

Switch(config)#router rip

Switch(config-router)#version 2

---

Switch(config-router)#network 200.1.1.0

Switch(config-router)#network 200.2.2.0

Switch(config-router)#network 10.1.2.0

Switch(config-router)#network 10.1.3.0

Switch(config-router)#network 10.1.10.0

Switch(config-router)#network 10.1.10.0

SW#show run           
*** kaj imamo trenutno nastavljeno

SW#show ip route    
 ***kateri usmerjevalni protokol imamo in katera omrežja so priključena na stikalo


# STATIČEN IN DINAMIČEN NAT

## Statično usmerjanje

R(config)#ip nat inside source static \<privatni IP od serverja\> \<javni IP od int\>

R(config)#int gi0/0  *** vmesnik, kjer so priključeni privatni IP naslovi

R(config-if)#ip nat inside 

R(config)#int gi0/0  *** vmesnik, kjer so priključeni javni IP naslovi

R(config-if)#ip nat outside

## Dianmičen NAT

R(config)#ip nat inside source list  \<št\> pool \<ime\>

R(config)#ip nat pool \<ime\> \<prvi javni IP\> \<zadnji javni IP\> netmask \<maska\>

R(config)#access-list \<št\> permit \<naslov privatnega omrežja aka network\> \<wild card\> (0.0.0.0)

R(config)#int gi0/0  *** vmesnik, kjer so priključeni privatni IP naslovi

R(config-if)#ip nat inside 

R(config)#int gi0/0  *** vmesnik, kjer so priključeni javni IP naslovi

R(config-if)#ip nat outside
