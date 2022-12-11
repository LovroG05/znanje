# Kreiranje tabele

## Firebird

```sql
CREATE TABLE table_name (
  atribut1 TIP [omejitve],
  atribut2 TIP [omejitve],
  ...
  PRIMARY KEY (atribut1, ...)
  FOREIGN KEY (atribut2, ...) REFERENCES tabela2(atribut2)
  ...
);
```

## MySQL

```sql
CREATE TABLE table_name (
  ...
)
ENGINE = tip -- InnoDB / MyISAM
AUTO_INCREMENT = auto_increment_start
CHARACTER SET charset_name;
```

## Omejitve

### Firebird

```sql
DEFAULT vrednost
NOT NULL
UNIQUE
CHECK (pogoj)
REFERENCES tabela (atribut)
  ON DELETE akcija
  ON UPDATE akcija
```

### MySQL

```sql
...
AUTO_INCREMENT
```

## Akcije

### MySQL

```sql
RESTRICT
CASCADE
SET DEFAULT
SET NULL
```

### Firebird

```sql
NO ACTION
CASCADE
SET DEFAULT
SET NULL
```

## Primer

### MySQL

```sql
CREATE TABLE Kraj (
  krajId INT NOT NULL AUTO_INCREMENT,
  imeKraja VARCHAR(20) NOT NULL,
  opisKraja VARCHAR(50),
  PRIMARY KEY (krajId)
)
ENGINE = InnoDB
AUTO_INCREMENT = 100
CHARACTER SET utf8;
```
