# Posodabljanje podatkov

```sql
UPDATE ime_tabele
  SET ime_atributa = nova_vrednost, ...
  WHERE pogoj;
```

## Primer

```sql
UPDATE Dijak
  SET razred = "R4C"
  WHERE razred = "R3C";
```
