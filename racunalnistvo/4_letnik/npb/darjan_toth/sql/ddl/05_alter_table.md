# Spreminjanje tabele

## Dodajanje atributa

```sql
ALTER TABLE ime_tabele
  ADD ime_atributa tip [omejitve]
  [FIRST | AFTER atributx];
```

## Odstranjevanje atributa

```sql
ALTER TABLE ime_tabele
  DROP ime_atributa;
```

## Spreminjanje atributa

### MySQL

Brez preimenovanja:

```sql
ALTER TABLE ime_tabele
  MODIFY [COLUMN] ime_atributa tip [omejitve]
  [FIRST | AFTER atributx];
```

S preimenovanjem:

```sql
ALTER TABLE ime_tabele
  CHANGE [COLUMN] ime_atributa novo_ime tip [omejitve]
  [FIRST | AFTER atributx];
```

### Firebird

```sql
ALTER TABLE ime_tabele
  ALTER [COLUMN] ime_atributa
    sprememba;
```

Spremembe:

```sql
TO novo_ime;
TYPE nov_tip;
POSITION nova_pozicija;
```

## Spreminjanje integritetnih omejitev

### MySQL

```sql
ALTER TABLE ime_tabele
  ADD CONSTRAINT ime_omejtive
    omejitev;
```

### Firebird

```sql
ALTER TABLE ime_tabele
  ADD [CONSTRAINT ime_omejtive]
    omejitev;
```

Omejitve:

```sql
PRIMARY KEY (ime_atributa)
FOREIGN KEY (ime_atributa)
  REFERENCES ime_tabele(ime_atributa)
CHECK (pogoj)
UNIQUE (ime_atributa)
```
