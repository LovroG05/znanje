# Računalništvo
## Von neumannov model računalnika / Princentonska arhitektura

CPU <- vodilo -> Glavni pomnilnik <- vodilo -> V/I naprave <- vodilo -> CPU

### Značilnosti
1. Zgradba rač. je enaka ne glede na njegov pomen
2. Skupni pomnilnik za krmilni program in podatke
3. Delovanje rač. upravlja program
4. Ukazi programa se izvajajo drugi za drugim, tako kot si sledijo
5. Spomin je razdeljen na enake in oštevilčene bloke, št blokov se "vidi" kot naslovi v pomnilniku

## Harvardska arhitektura
ROM <- adress bus - CPU - address bus -> RAM
ROM -> data bus - CPU <- data bus -> RAM

- Ločeni pomnilnik:
	- za krmilni program (in njegove podatke)
	- za delovne podatke
	- za procesorski sklad
- Istočasno se v procesor lahko prenaša ukaz v programu in podatke, s katerimi ukaz operira
- naslednji ukaz se v CPE prenaša že, ko se prejšni izvaja
- manj inštrukcij, a se dajo lažje paralizirati

## Razširjena V. Neumannova arhitektura

thingymagik slika

- 1 vodilo, ki povezuje vse dele računalnika
- omogoča več procesnih enot na istem vodilu z enakovrednim dostopom do naprav in pomnilnika
- omogoča tudi neposredni prenos podatkov med V/I napravami in pomnilnikom (DMA - direct memory access)

## V.N. ozko grlo
- za izvedbo ukaza mora CPE prenesti iz pomnilnika ukaz in običajno je operand
- ukazi in operandi so spravljeni v istem pomnilniku. Za ukazom mora CPE včasih počakati, da se prenese še operand (neka vrednost)
- frekvenca CPE je bila do sedaj tipično skoraj še 1x večja od frekvence prenosa podatkov in RAMa
- prepustnost med CPE in RAM je zelo majhna v primerjavi z hitrostjo CPE (torej frekvenco in št. ciklov, potrebnih za izvršitev ukaza)
- preden lahko izvrši ukaz, mora CPE počakati, da pridejo po vodilu operandi/podatki
- možne rešitve
	- uporaba predpomnilnika (cache) med CPE in pomnilnikom
	- predvidevanje, kaj naj bi računalnik naredil v naslednjih korakih in s tem povezan vnaprejšnji prenos podatkov v predpomnilnik
	- razširitev osnovnih celic pomnilnika (iz 8ih na 16 ali 32 bitov, tudi 64) in pripadajočega podatkovnega pomnilnika

## Centralna Procesna Enota
- Central Processing Unit (1960)
- je ele. vezje v računalniku, ki izvršuje navodila programa
- danes obstajajo v obliki integriranih vezij (IC-integrated circuit, chip)
- obstajajo tudi druge procesne enote, ki jih upravlja gl. enota Stranske procesne enote, ki skrbijo za grafike, imenujemo grafični procesorji (GPE)
- mikroprocesor - naprava je v obliki IC
- mikrokontrolr - poleg CPE vključuje še V/I naprave in pomnilnik

### Naloge CPE
1. Jemanje ukaza iz gl. pomnilnika
2. dekodiranje ukaza
3. izvrševanje prevzetega ukaza
4. shranjevanje rezultata

šlik slikca

### Zgradba
- registri
- ALE (aritmetično-logična enota)
- krmilna enota

ekstra slika

### Aritmetično logična enota
- izvaja matematične (aritmetične in logične) operacije

exxtra slika model

### Krmilna enota
- povezuje/krmili enote v CPE
- prinaša ukaze in podatke iz pomnilnika
- jih dekodira
- upravlja z ALE
- krmili srojne naprave
- usklajuje dostope do pomnilnika in V/I naprav
- nadzira delovanje računalnika

### Vrste CPE
- RISC (Reduced Instruction Set Computer)
	- manjši nabor ukazov (vseeno lahko več kot 100), ni kompleksnih ukazov
	- vsi ukazi imajo isto dolžino (v bitih) in isti čas izvajanja (1 cikel)
	- hitro izvrševanje
	- večja poraba pomnilnika za enak program
	- praviloma harvardska arhitektura
	- lahka paravirtualizacija
- PIC, AVR, ARM, RISC-V
- CISC (Intel, AMD) (Complex Instruction Set Computer)
- rač. z komp. naborom ukazov
	- več ukazov in več kompleksnejših
	- ukaz se lahko izvaja več ciklov, ker dela zahtevnejše stvari
	- precej manjša poraba pomnilnika za enak program
	- ukazi so različne dolžine
	- praviloma ***princetonska*** arhitektura
	- težja paralelizacija
- CELL (PowerPC), AMD/Intel x86 x64

### Lastnosti CPE
- frekvenca ali delovni takt (GHz)
- št. jeder
- širina podatkovnega vodila (64bit)
- širina naslovnega vodila
- velikost in št stopenj predpomnilnika
- št. tranzistorjev
- tehnologija izdelave
- izboljšave (hyperthreading, iGPU)
- ele. moč (TDP)
- MIPS, FLOPS, IPC

### Predpomnilnik
- zatetek (cache hit)
	- krmilna enota podatek ali ukaz najde v predpomnilniku - skoraj takojšna izvršitev
- zgrešitev (cache miss)
	- v predpomnilniku želenega ukaza/podatka ni - potreben je prenos iz ustreznega pomnilnika
- uporaba predpomnilnika je uspešna, če so podatki/ukazi v istem bloku
- velika večina podatkov / ukazov uporablja zaporedne pomnilniške celice

### Manj očitni načini
- dodatni ukazi v strojni kodi
	- za obdelavo več podatkov hkrati
		- SIMD - single instruction, multiple data
		- MIMD, multiple instruction, multiple data
- za opravila, ki so sicer sestavljeni iz mngo običajnih inštrukcij
	- za množenje in deljenje celih št.
	- za računanje s števili s plavajočo vejico
	- za računanje z vektorji
- dodatne rač. enote v CPE
	- primer Cell procesor:
		- 1x Power Processor Element (PPE)
		- upravlja 8x Synergetic Processing Element (SPE)
- hipernitenje
	- za vsako fizično jedro OS vzpostavi 2 navidezni jedri, ki si delita delo kadar je to mogoče
	- izvajata se po 2 instrukciji hkrati, če ne uporabljata istih vezij na procesorju
- cevovodi
- predvidevanje toka izvajanja programa (branch predictor)
	- vezja v CPE vrednotijo tok izvajanja in če zaznajo, da se bo verjetno zgodil skok, aktivirajo prenose podatkov iz pomnilnika v predpomnilnik

### Kako izvesti več kot 1 ukaz v ciklu
- statično razvrščanje
	- procesor prevzema ukaze v natanko takem vrstnem redu, kot so v programu
	- vrstni red lahko napelje že prevajalnik programa
- dinamično razvrščanje
	- dinamično po rahlo drugačnem vrstnem redu, kot jih narekuje program
	- ko je 1 od enot procesorja prosta, išče med naslednjimi ukazi takega, ki ga ta enota lahko izvrši neodvisno in brez posledic za pravilnost programa

## Kaj je pomnilnik
- pomnilnik je naprava, ki lahko zabeleži določeno stanje in ga ohrani, dokler to omogočajo zunanje okoliiščine
- naloga pomnilnika: ohraniti stanje in s tem podatke
- delujejo po 1 ali večih fizikalnih principih, ki omogočajo ločevanje vsaj 2 stanjema
- stanja lahko predstavimo v št. npr. (0, 1)
- za spremembo stanja je potrebno vložiti ali izvleči energijo

### Vrste pomnilnika

| Notranji (primarni, delovni) | Zunanji (sekundarni) |
| --------------------------- | --------------------- |
| SRAM, (EEP)ROM in flash, DRAM - glavni | Magnetni trdi diski, optični diski, priročni flash (USB) |
|                                  | **Terciarni pomnilnik** |
|                                                                           | Magnetni trakovi in podobni mediji namenjeni arhivirnju podatkov |
| V VN modelu spadajo pod **glavni pomnilnik** | V VN modelu spadajo pod **V/I naprave** |

### Naključni dostop (random access)
- primeri pomnilnika: **RAM (Random Access Memory), (EEP)ROM, flash**
- naključen, ker se ne da predvideti, kateri je tisti podatek, ki ga bo potrebno naslednjega prebrati iz pomnilnika, lahko je katerikoli
- beseda "naključni" rahlo zavaja -  kateri je tisti podatek, se ve šele, ko do zahteve pride med izvajanjem programa - statistično pa od daleč zgleda kot nek naključen naslov
- vse celice pomnilnika so s stališča dostopa enakovredne
- čas dostopa do naključne celice je na isti tip pomnilnika vedno enak

### Zaporedni dostop
- primeri pomnilnika: **magnetni trakovi, kasete**
- npr. neskončni trak (pomnilnik pri Turingovemu stroju)
- počasen dostop (da pridemo do mesta, kjer so podatki, traja)

### Kombinacija dostopa
- Krožni dostop (diski, CD, DVD, BR)
- DRAM
	- današnji DRAM ima različne preklopne čase med bloki pomnilnika, tako branje z naslovov in različnih blokov zahteva daljši čas kot branje z zaporednih naslovov

## Glavni pomnilnik
### RAM
- za branje in pisanje podatkov
- spomin z "naključnim" dostopom
- čim krajši možni dostopni čas
- poleg hitrosti pri RAMu gledamo še na:
	- obstojnost
	- detekcijo in odpravo napak
	- spremenljivost
	- porabo oz potrebo po hlajenju
	- ceno
- **ob izgubi napetosti podatki propadejo**

#### Vrste RAM
- po tehnologiji delovanja RAM delimo na:
	- SRAM (statični RAM)
		- ne potrebuje osveževanja, zgolj napajanje
		- bolj zapletena zgradba (flipflopi)
		- posledično dražja izvedba (celica zahteva več prostora)
		- uporaba za reg., predpomnilnik, gl. pomnilnik
		- najdemo ga v CPE, gl. pomnilniku, V/I pomnilnih enotah
	- DRAM (dinamični RAM)
		- g. pomnilnik
		- potrebuje osveževanje
		- preprosta zgradba (kondenzatorji)
		- cenejši

#### Osveževanje RAM
Kako lahko z elektriko predstavimo 0 in 1?
1. možnost: **KONDENZATOR**
	- nabit = 1, prazen = 0
	- nabijemo tako, da priklopimo na napetost
	- spraznimo tako, da ga s tranzistorjem staknemo na GND
	- Ele. polje v kondenzatorju po umiku napetosti počasi pada. Če je bila notri 1, ne sme pasti tako nizko, da bi bil praktično prazen (0), ker tako izgubimo sled, kaj je bilo notri
	- če predolgo čakamo, ne bomo več vedeli, da je bila v njem 1 ali 0. Preden pade na 0, je potrebno prebrati stanje in kondenzator po potrebi napolniti
	- procesu, ki to dela, pravimo **osveževanje**

### ROM (naključni dostop)
- bralni pomnilnik
- vanj ne moremo pisati, lahko samo beremo
- podatki ostanejo tudi po izklopu
- podatki so že postavljeni v tovarni ob izdelabi čipa - so kar vgrajeni v načrtu čipa
- v ROMu je program, ki se izvede ob vklopu računalnika (BIOS/UEFI bootloader)
- nekateri računalniki (mikrorač, ZX Spectrum, C64) so imel v ROMu napisan cel OS in tolmač (običajno BASIC)
- po letu 1980 se je namesto ROMa uporabljal EPROM
- za BIOS/UEFI se danes uporablja flash pomnilnik
- zakaj se ne uporablja več (EEP)ROM?
	- flash pomnilnik je poceni
	- flash je hitrejši
	- včasih vsebino ROM prekopiramo v RAM in nadaljujemo program tam
- kratica ROM je danes sinonim za pomnilnik v katerega ne moremo PROSTO pisati

### (EEP)ROM
  - ROM je zapisan v tovarni, mi pa želimo pomn. programirati sami
  - PROM (Programmable ROM)
	- 1x programabilen ROM 
  - fuses - varovalke
  - EPROM (Eraseable PROM)
	- zbrisljiv pod UV svetlobo
	- dolgotrajni postopek brisanja
	- večkratni zapis
  - Za pisanje v PROM in EPROM potrebujejo zunanju programator

#### EEPROM (električno zbrisljiv in programabilen bralni pomnilnik)
  - je vrsta pomnilnika EPROM
  - vsebino brišemo z močnimi ele. sunkom in ponovno vpisujemo s programatorjem
  - brisanje je mnoo hitrejše kot pri EPROM
  - možno je izbrisati samo 1 byte
  - lahko ima vgrajen programator
  - FLASH
	- pomn. lahko brišemo ele.
	- brisanje poteka v blokih (npr. 512B)
	- pišemo lahko samo po zbrisanem pomnilniku
	- omejeno št. pisanj

## Vhodno/Izhodne naprave
### Vhodne
- gl. naloga vhodnih naprav je vnos podatkov v rač.
- naprave:
	- tipkovnica
	- mikrofon
	- volan
	- kazalne naprave

### Izhodne
- njihova naloga je vračanje info.
- naprave:
	- monitor
	- projektor
	- tiskalniki
	- 3d printer,...

### Vhodno/Izhodno
Zunanji pomnilniki
- optični diski
- trdi diski
- SSD
- floppy
- "prenosni diski"
- flash pomnilniki

Naprave za komuniciranje:
- mrežna kartica/wifi kartica/BT kartica (ethernet)
- modem/faks ((modulator demodulator) pretvarja podatke v obliko primerno za prenos po telekomunikacijskih linijah)

Zvočne naprave:
- zvočnik na matični plošči (izhodna naprava)
- zvočna kartica (omogoča priklop mikrofona in zvočnika (ADC, DAC))

## Operacijski Sistemi
### Strojna oprema
- delitev: 
	- CPE
	- g. pomnilnik
	- V/I
	- vodila

šlik slika ki manjka
