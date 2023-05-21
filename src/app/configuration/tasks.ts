export const tasks = [
  {
    A: {
      imageUrl: 'assets/images/tasks/1/A/connected.jpg',
      story: ``,
      subTasks: [
        {
          text: `Az autó (Car) típusú objektumok kapjanak egy új szám típusú attribútumot,
          ami a lerakás sorrendjét azonosítja.

Az attribútum neve lehet például "index".
Az első lehelyezett kocsi esetén az értéke 1 lenne, a 2.-nál 2 és így tovább.
          `,
          xp: 2
        },
        {
          text: `Minden lehelyezett autó egy éllel kapcsolódjon az őt követő indexű autóhoz.
          Ez a kapcsolat jöjjön létre az autó létrehozásakor.

Az 1. lehelyezett autó esetén a kapcsolat létrehozására nincs szükség (mivel még nincs mihez
kapcsolódni), azonban a 2. autó lehelyezésekor automatikusan jöjjön létre kapcsolat az
1. autóval.
          `,
          xp: 3
        },
        {
          text: `Az összeköttetés ne egyenes vonallal történjen, hanem egy szépen görbítettel.
          Többek között használható az "Arc" típus:
          https://konvajs.org/docs/shapes/Arc.html`,
          xp: 1
        },
        {
          text: `Az autót mozgatva (drag) mozogjon az él (megfelelő végpontja) is.

Tehát ha az autót mozgatjuk, akkor menjen vele az él is, utána is látszódjon a két autó közötti kapcsolat.`,
          xp: 2
        },
        {
          text: `Az autókhoz kapcsolódó menün jelenjen meg egy új opció: "Új összeköttetés".

Fontos: Ez az opció csak autók esetén jelenjen meg, parkolók esetén ne!`,
          xp: 1
        },
        {
          text: `Az előző feladat során létrehozott menü legyen használható új kapcsolatok
          létrehozására autók között.

A menüpontra kattintás után a következő esetek fordulhatnak elő:
- A felhasználó egy másik autóra kattint: A kapcsolat létrejön és megjelenik egy új él.
Utána az alkalmazás kerüljön vissza az alapállapotba.
- A felhasználó ugyanarra az autóra kattint: Kapcsolat nem jön létre, az alkalmazás kerüljön vissza az alapállapotba
(azaz, oda, hogy a klikkelés új objektum lehelyezését, vagy a menü megjelenését eredményezi).
- A felhasználó egy parkoló objektumra kattint: Kapcsolat nem jön létre, az alkalmazás kerüljön vissza az alapállapotba.
- A felhasználó a semmibe kattint: Kapcsolat nem jön létre, az alkalmazás kerüljön vissza az alapállapotba.
`,
          xp: 3
        },
        {
          text: `Kapcsolatok legyenek eltávolíthatóak.

Élekre kattintva a menünek egy opciója legyen: "Él eltávolítása".
A menüpont kiválasztására törlődjön az él.
`,
          xp: 2
        },
        {
          text: `Az előző feladat élei  jelenjenek meg elhalványítva már a kattintás előtt.

Tehát a felhasználó az "Új összeköttetés" menüpontot választotta.
Ezután még nem kattint, azonban egy másik kocsi felé mozgatja az egeret.
A két autó között jelenjen meg halványan az él.
Ha elmozhatja az egeret az autó felől (kattintás nélkül) akkor az elhalványított él eltűnik.
Ha kattint a felhasználó akkor ténylegesen létrejön az él, az előző feladatnak megfelelően.
`,
          xp: 3
        },
        {
          text: `Egészítsd ki az autó objektumot egy számmal.
          Megjelenhet például az autó "testében".

A szám tartalmazza az autó aktuális kapcsolatainak számát, azaz, hogy hány él köti más autókhoz.

Ez a szám frissüljön amikor élek létrejönnek vagy megszűnnek.

Segítség: https://konvajs.org/docs/shapes/Text.html`,
          xp: 3
        }
      ],
      title: `
        Kapcsolatok
      `
    },
    B: {
      imageUrl: 'assets/images/tasks/1/B/exit.jpg',
      story: '',
      subTasks: [
        {
          text: `Az autókhoz kapcsolódó menün jelenjen meg egy új opció: "Új pozíció".

Fontos: Ez az opció csak autók esetén jelenjen meg, parkolók esetén ne!`,
          xp: 1
        },
        {
          text: `Az előző feladat során létrehozott menü legyen használható további
          koordináták autóhoz rendelésére.

Ezek beállítása egy felugró Angular Material dialogban történjen majd:
https://material.angular.io/components/dialog/overview

A menü kiválasztásakor tehát ugorjon fel egy ilyen dialog.
          `,
          xp: 1
        },
        {
          text: `A felugró ablak (dialog) egy komplex űrlapot tartalmazzon, az alábbi mezőkkel:

- Tartalmazzon egy két mezőből ("x" és "y") álló, nem módosítható (disabled) blokkot.
Ez a két mező tartalmazza (és jelenítse is meg!) az autó eredeti x illetve y koordinátáját.
Ez lesz az animáció kiindulópontja.
- A blokk alatt legyen egy "Új koordináta hozzáadása" gomb, amellyel a fenti blokkból tetszőleges
számú beszúrható.
Ezek a blokkok annyiban térjenek el az elsőtől, hogy szabadon szerkeszthetőek, és alapból ne
tartalmazzanak kitöltött értéket.
- A koordináta blokkok alatt legyen egy number típusú mező is.
Az itt megadott szám szabja meg, hogy az egyes koordinátákon hány másodpercet a kocsi, mielőtt
továbbhaladna a következőre.
- Ez utóbbi mezőt csak akkor lehessen megadni, ha 1-nél több koordinátával rendelkezik az autó.
(Ha csak 1 koordinátája van, akkor nem fog animálódni).
`,
          xp: 5
        },
        {
          text: `Azok az autók, melyek 1-nél több koordinátával rendelkeznek, mozogjanak a megadott
          koordináták között.

A mozgatás animációval történjen, tehát ne "ugráljanak", hanem "ússzanak" az autók egyik pozícióból
a másikba, sorrendben.`,
          xp: 3
        },
        {
          text: `Az autó felé mozgatva az egeret jelenjen meg az útvonal, amelyet majd be fog járni.

Tehát az autókhoz kapcsolódó koordináták legyenek összekötve halványított vonalakkal.

Ezek a vonalak tűnjenek el, amint az egeret elmozgatjuk az autóról, vagy amint az autó elanimálódik
az egér pozíciója alól.`,
          xp: 3
        },
        {
          text: `Minden autó kapjon egy véletlenszerűen generált azonosító (id) létrehozáskor`,
          xp: 1
        },
        {
          text: `A Konva stage alatt jelenjen meg egy táblázat, amely az autók pozícióadatait tartalmazza.

Ezek legyenek a következők:
- Az autó azonosítója (id)
- Az autó pozíciói, pl.: "(1, 500), (150, 550), (500, 400)"
- Az autó jelenlegi pozíciója. Fontos, hogy ez folyamatosan frissüljön, akkor is, amikor az autó éppen két
koordináta között mozog!
`,
          xp: 3
        },
        {
          text: `Az éppen mozgó autók esetén, a táblázat 4. oszlopában legyen egy "Stop" gomb, amivel az
          animáció megállítható.

A feltétel úgy is megfogalmazható, hogy az autó jelenlegi pozíciója nem egyezik meg egyik hozzá felvett
koordinátával sem.

Megállítás után a "Stop" gomb helyén egy "Start" gomb jelenjen meg. Erre nyomva az animáció induljon
újra onnan ahol abbamaradt.
`,
          xp: 3
        }
      ],
      title: `Animáció`
    },
  },
  {
    A: {
      imageUrl: 'assets/images/tasks/2/A/parking.webp',
      story: '',
      subTasks: [
        {
          text: `A parkoló objektumokhoz tartozó menüben legyen 1 új opció: "Parkoló testreszabása".`,
          xp: 1
        },
        {
          text: `A "Parkoló testreszabása" menüpontra kattintva ugorjon fel egy Material dialog, amivel
          a parkoló testreszabható.

A megjelenő űrlapon 2 mezőre van szükség:
- Parkolóhelyek száma. Elfogadható értékek: 1, 2, 3, 4
- Autók távolsága a parkolótól. Szám érték, pixelben megadva.`,
          xp: 3
        },
        {
          text: `Az előző lépésben megadott beállítások grafikusan is jelenjenek meg az objektum környékén.

Az egyik adat a parkoló felett jelenjen meg, a másik pedig alatta, szöveges formtáumban.
          `,
          xp: 2
        },
        {
          text: `A toolbaron legyen egy "Automatikus rendezés" opció.

Ez a gomb az összes Kanvas stage-n található autót próbálja optimálisan, a legközelebbi parkoló köré helyezni.

Az autók a parkolók 4 sarkához mozogjanak, sorban.
Tetszőlegesen választható, hogy az egyes indexek (1-4) melyik saroknak felelnek meg.
A megadottnál több autó ne tudjon a parkolóba kerülni, de minden autó mozogjon egy parkolóhoz, feltéve, hogy van elég hely!

Az automatikusan bemozgatott autók, a megfelelő saroktól az űrlapon megadott pixelnyi távolságra mozogjanak.
`,
          xp: 4
        },
      ],
      title: `Adatok`
    },
    B: {
      imageUrl: 'assets/images/tasks/2/B/2B.jpg',
      story: '',
      subTasks: [
        {
          text: `Integrálj egy web workert a projektbe, az órai projekt alapján.

A worker és a fő szál tudjon üzeneteken keresztül kommunikálni.`,
          xp: 2
        },
        {
          text: `A fő szál 10 másodpercenként utasítsa a web workert az autók pozíciójának ellenőrzésére.

Amennyiben a worker talál olyan autot, ami 20 pixelnél távolabb van minden parkolótól, akkor kezdje el
villogtatni azt.

Azaz a kocsi színe fél másodpercenként változzon, egészen addig, amíg a felhasználó be nem mozgatja egy
parkoló mellé.`,
          xp: 4
        },
        {
          text: `Ha a villogás 10 másodpercnél hosszabb ideig fennáll egy autó esetén, akkor a worker
helyezzen el az autó közelébe egy parkolót.

Ezután a villogásnak - az előző feladatnak megfelelően - abba kell maradnia.`,
          xp: 2
        },
        {
          text: `A web worker által beszúrt parkolók száma jelenjen meg a Konva stage tetején, és frissüljön,
          akárhányszor egy új parkolót szúr be a worker.
          A felhasználó által beszúrt parkolók ebbe ne számítsanak be!`,
          xp: 2
        },
      ],
      title: `Worker`
    }
  }
]
