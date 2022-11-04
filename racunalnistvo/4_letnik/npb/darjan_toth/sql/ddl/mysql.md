# MySQL

## Povezava na podatkovno bazo

```bash
mysql --user=root
```

```sql
USE ime_baze;
```

## Ustvarjanje baze

```sql
CREATE DATABASE ime_baze
  CHARACTER SET utf8
  AUTO_INCREMENT = 100; /* Začetna vrednost auto incrementa */
```

```bash
set@@global.sql_mode = 'strict_all_tables';
```

## Engines

### InnoDB

- Novejši
- ACID lastnost
- Tuji ključi
- Zaklepanje vrstic

### MyISAM

- Nima več podpore

## Spreminjanje tabele

```sql
ALTER TABLE ime_tabele ADD atribut1 tip [ omejitve ] [ FIRST | AFTER atribut_x ];
```

```sql
ALTER TABLE Hoteli
  CHANGE KrajID PostrnaSt INT NOT NULL
  AFTER ImeHotela;
```
