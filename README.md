[Eötvös Loránd Tudományegyetem Informatikai Kar]: http://inf.elte.hu

# Alk.Fejl

Egy otthoni könyvelő programot készítünk, melyre bejelentkezés után lehet feltölteni számlákat, nyugtákat egyéb költségeket. Vezetni lehet, hogy mennyi volt a rezsi, milyen kiadásaink és bevételeink voltak.

## Funkcionális követelmények:

<del>+ A látogató tudjon regisztrálni.</del>
+ A felhasználó tudjon az oldalra bejelentkezni.
+ Tudjon hozzáadni tételeket a kiadásokhoz/bevételekhez.
+ Tudja a megtakarításokat vezetni.

## Nem funkcionális követelmények:

+ Biztonság
+ Felhasználóbarát design
+ Hatékonyság
+ Karbantarthatóság
+ Teljesítmény

## Szerepkörök

+ Látogató
+ Felhasználó
+ Admin

## Végpontok

<table align="center" width="100%">
    <tr align="center" width="100%">
        <th width="20%">TÍPUS</th>
        <th width="20%">URL</th>
        <th width="20%">SZEREPKÖR</th>
        <th width="20%">TÁBLA</th>
        <th width="20%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="20%">GET</td>
        <td align="center" width="20%">/api/item/all</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">ITEM</td>
        <td align="left" width="20%">lekéri az összes tételét</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="20%">POST</td>
        <td align="center" width="20%">/api/item/add</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">ITEM</td>
        <td align="left" width="20%">tételt hozzáad</td>
    </tr>    
    <tr align="center" width="100%">
        <td align="center" width="20%">DELETE</td>
        <td align="center" width="20%">/api/item/delete/{id}</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">ITEM</td>
        <td align="left" width="20%">tételt töröl</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="20%">GET</td>
        <td align="center" width="20%">/api/partner/all</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">PARTNER</td>
        <td align="left" width="20%">lekéri az összes partnerét</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="20%">POST</td>
        <td align="center" width="20%">/api/partner/add</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">PARTNER</td>
        <td align="left" width="20%">partnert hozzáad</td>
    </tr>    
    <tr align="center" width="100%">
        <td align="center" width="20%">DELETE</td>
        <td align="center" width="20%">/api/partner/delete/{id}</td>
        <td align="center" width="20%">Admin</td>
        <td align="center" width="20%">PARTNER</td>
        <td align="left" width="20%">partnert töröl</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="20%">GET</td>
        <td align="center" width="20%">/api/category/all</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">CATEGORY</td>
        <td align="left" width="20%">lekéri az összes kategóriát</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="20%">POST</td>
        <td align="center" width="20%">/api/category/add</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">CATEGORY</td>
        <td align="left" width="20%">kategóriát hozzáad</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="20%">PUT</td>
        <td align="center" width="20%">/api/category/update/{id}</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">CATEGORY</td>
        <td align="left" width="20%">kategóriát módosít</td>
    </tr>    
    <tr align="center" width="100%">
        <td align="center" width="20%">DELETE</td>
        <td align="center" width="20%">/api/category/delete/{id}</td>
        <td align="center" width="20%">Felhasználó</td>
        <td align="center" width="20%">CATEGORY</td>
        <td align="left" width="20%">kategóriát töröl</td>
    </tr>
</table>

Az Admin természetesen az összes felhasználói végpontot is eléri.

## Adatbázis terv:
![erd](https://user-images.githubusercontent.com/17639500/47970635-80731580-e088-11e8-9735-4f35f8f5718c.PNG)

## Szekvencia diagram:
### Regisztráció
![a](https://user-images.githubusercontent.com/36520783/47970949-3d1aa600-e08c-11e8-8773-7870571261f0.PNG)

## Könyvtár struktúra:
![projecttree](https://user-images.githubusercontent.com/36520783/47971152-ebbfe600-e08e-11e8-883d-4060ffbe83c4.PNG)
<!---
<table align="center" width="100%">
    <th colspan="3" width="100%">ACTOR</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">felhasználó azonosítója (PK)</td>
    <tr align="center" width="100%">
        <td align="center" width="33%">FIRST_NAME</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">felhasználó keresztneve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">LAST_NAME</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">felhasználó vezetékneve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PASSWORD</td>
        <td align="center" width="33%">VARCHAR2(60)</td>
        <td align="justify" width="33%">hashelt jelszó</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">EMAIL</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">email cím</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">BALANCE</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">felhasználó egyenlege</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">PARTNER</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">partner azonosítója (PK)</td>
    <tr align="center" width="100%">
        <td align="center" width="33%">NAME</td>
        <td align="center" width="33%">VARCHAR2(60)</td>
        <td align="justify" width="33%">partner/cég neve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CITY</td>
        <td align="center" width="33%">VARCHAR2(60)</td>
        <td align="justify" width="33%">partner/cég városa</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ADDRESS</td>
        <td align="center" width="33%">VARCHAR2(60)</td>
        <td align="justify" width="33%">partner/cég címe</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">TAX_NUM</td>
        <td align="center" width="33%">VARCHAR2(11)</td>
        <td align="justify" width="33%">adószám</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">ITEM</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">tétel azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ACTOR_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">tulajdonos azonosítója (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CATEGORY</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">a tétel kategóriája (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">NAME</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">a tétel neve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PARTNER_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">a partner azonosítója</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">AMOUNT</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">a tétel összege</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">DATE_OF_DEADLINE</td>
        <td align="center" width="33%">DATE</td>
        <td align="justify" width="33%">a tétel fizetési határideje</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">DATE_OF_COMPLETION</td>
        <td align="center" width="33%">DATE</td>
        <td align="justify" width="33%">a tétel teljesítésének ideje</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">DESCRIPTION</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">a tételhez tartozó megjegyzés</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">CATEGORY</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">a kategória azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CATEGORY</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">kategória megnevezése</td>
    </tr>
</table>
--->
## Szerzők:

+ **Kertész Kászon**
+ **Szebenyi Gergely**

**[Eötvös Loránd Tudományegyetem Informatikai Kar]**
