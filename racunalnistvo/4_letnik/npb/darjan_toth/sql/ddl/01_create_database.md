# Kreiranje podatkovne baze

## MySQL

```sql
CREATE DATABASE database_name
  [[DEFAULT] CHARACTER SET charset_name]
  [[DEFAULT] COLLATE collation_name];
```

Primer:

```sql
CREATE DATABASE Restavracija
  CHARACTER SET utf8
  COLLATE utf8_slovenian_ci;
```

## Firebird

```sql
CREATE DATABASE 'database_name'
  USER 'username'
  PASSWORD 'password'
  [DEFAULT CHARACTER SET charset_name]
  [COLLATION collation_name];
```

Primer:

```sql
CREATE DATABASE 'Restavracija'
  USER 'sysdba'
  PASSWORD 'masterkey'
  DEFAULT CHARACTER SET ISO8859_2
  COLLATION ISO8859_2;
```
