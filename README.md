# AMARA.ZONE

Az AMARA.ZONE első, statikus kezdőoldala. Külső build-rendszer nélkül fut, ezért közvetlenül publikálható GitHub Pages-re.

## Helyi megnyitás

Nyisd meg az `index.html` fájlt böngészőben, vagy a mappában futtasd: `python3 -m http.server 8080`.

## Publikálás

1. Hozz létre egy `amara-zone` nevű GitHub repositoryt.
2. Töltsd fel ennek a mappának a tartalmát a `main` ágra.
3. GitHub → Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
4. Porkbun DNS-ben állítsd be a GitHub Pageshez szükséges rekordokat, majd a GitHub Pages beállításánál add hozzá az `amara.zone` domaint.
