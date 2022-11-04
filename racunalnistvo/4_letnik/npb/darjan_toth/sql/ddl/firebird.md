# Firebird

## Povezava na podatkovno bazo

```bash
isql -user sysdba -password masterkey
```

## Ustvarjanje tabele

- Primary key se lahko pojavi samo enkrat. Za sestavljen ključ ga definiramo na koncu

`Uporabnik: id, ime, priimek, letoVpisa (< 2019)`

`Knjiga: isbn, naslov, letoIzdaje (> 2022)`

`Uporabnik: id, ime, priimek, letoVpisa (< 2019)`

```sql
CREATE TABLE Uporabnik (
  id        INT         AUTO_INCREMENT PRIMARY KEY,
  ime       VARCHAR(20) NOT NULL,
  priimek   VARCHAR(30) NOT NULL,
  letoVpisa INT         NOT NULL CHECK(letoVpisa <= 2019)
);

CREATE TABLE Knjiga (
  isbn        VARCHAR(15) PRIMARY KEY,
  naslov      VARCHAR(30) NOT NULL,
  letoIzdaje  INT         NOT NULL CHECK(letoIzdaje <= 2022)
);

CREATE TABLE Izposoja (
  isbn          VARCHAR(15),
  uporabnikId   INT,
  datumIzposoje DATE,
  PRIMARY KEY (isbn, uporabnikId, datumIzposoje),
  FOREIGN KEY (isbn) REFERENCES Knjiga(isbn)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
```

## Ustvarjanje domene

```sql
CREATE DOMAIN ime_domene tip_domene [ DEFAULT vrednost | NULL | USER ] [ NOT NULL ] [ CHECK(pogoji) ];
```

```sql
CREATE DOMAIN Ocena INT DEFAULT 1 NOT NULL
  CHECK(VALUE BETWEEN 1 AND 10);
```

## Spreminjanje tabele

```sql
ALTER TABLE ime_tabele ADD atribut tip [ omejitve ];
        -||-           DROP atribut;
        -||-           ALTER atribut TO novo_ime;
        -||-                         TYPE nov_tip;
        -||-                         POSITION nova_pozicija;
```

```sql
ALTER TABLE Uporabnik ADD davcna INT;
```

```sql
ALTER TABLE ime_tabele ADD [ CONSTRAINT ime_omejitve ] opis_omejitve;
```

Možne omejitve: `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CHECK`

```sql
ALTER TABLE Uporabnik ADD CONSTRAINT davcnaUnique UNIQUE(davcna);

ALTER TABLE Izdelek ADD CONSTRAINT poz_cena CHECK (cena >= 0)
```
