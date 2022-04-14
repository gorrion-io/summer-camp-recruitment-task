# Gorrion Summer Camp 2022 - zadanie rekrutacyjne

Przygotowaliśmy w tym roku zadanie rekrutacyjne na praktyki letnie Gorrion Summer Camp 2022.

## Jak zrealizować zadanie?

Przeczytaj [CONTRIBUTING.md](./CONTRIBUTING.md) i zastosuj się do instrukcji.

## Zadanie

Zaczęliśmy pracę nad projektem, który wyświetla karty użytkowników. Nasz PO ma doświadczenie z kodzeniem 🤦 więc przygotował plik `users.json`. W międzyczasie klient przesłał bazę użytkowników starego systemu, tym razem w CSV.

Twoim zadaniem jest **przygotować w pliku `lib/users.ts` metodę, która połączy te listy**.

Spełnione muszą być następujące warunki:

1. Typ pojedyńczego użytkownika:

```ts
type User = {
  fullName: string;
  username: string;
  email: string;
  avatar: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  phoneNumber: string;
  gender: "Male" | "Female";
  age: number;
  images: string[];
};
```

2. Lista użytkowników musi zawierać tylko użytkowników w wieku od 18 do 65 lat.

### Jeżeli wolisz backend

Użyj metody stworzonej w `lib/users.ts` w pliku `pages/api/users.ts` i zwróć listę użytkowników w formie tablicy.

### Jeżeli wolisz frontend

Użyj metody stworzonej w `lib/users.ts` w pliku `pages/users.tsx` i przygotuj komponent wyświetlający kartę użytkownika. Przygotowany został design takiej karty, dostępny jest tutaj: https://www.figma.com/file/VC36CWAk5uKwsapOC1psPr/Praktyki-(Front-End)?node-id=0%3A1.


## Kryteria oceny
* Jakość kodu
* Użyte narzędzia
* Poprawność działania kodu
* (dla frontendu) odwzorowanie designu

## Podpowiedzi
* można instalować dowolne bilbioteki do realizacji zadania
* można zrobić i frotend, i backend :)
