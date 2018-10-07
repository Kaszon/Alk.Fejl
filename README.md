# Alk.Fejl

Egy otthoni könyvelő programot készítünk, melyre bejelentkezés után lehet feltölteni számlákat, nyugtákat egyéb költségeket. Vezetni lehet, hogy mennyi volt a rezsi, milyen kiadásaink és bevételeink voltak.

## Funkcionális követelmények:

+ A felhasználó tudjon az oldalra bejelentkezni.
+ Tudjon hozzáadni tételeket a kiadásokhoz/bevételekhez.
+ Le tudjon kérdezni adott időszakra vonatkozóan tételek.
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

## Adatbázis séma:

<table align="center" width="100%">
    <th colspan="3" width="100%">USERS</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">felhasználó azonosítója (PK)</td>
    </tr>
        <tr align="center" width="100%">
        <td align="center" width="33%">PICTURE_URL</td>
        <td align="center" width="33%">VARCHAR2(200)</td>
        <td align="justify" width="33%">felhasználó profilképe</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">FIRST_NAME</td>
        <td align="center" width="33%">VARCHAR2(15)</td>
        <td align="justify" width="33%">felhasználó keresztneve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">LAST_NAME</td>
        <td align="center" width="33%">VARCHAR2(15)</td>
        <td align="justify" width="33%">felhasználó vezetékneve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">USERNAME</td>
        <td align="center" width="33%">VARCHAR2(15)</td>
        <td align="justify" width="33%">felhasználónév</td>
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
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">ITEMS</th>
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
        <td align="center" width="33%">USER</td>
        <td align="center" width="33%">VARCHAR2(15)</td>
        <td align="justify" width="33%">tulajdonos felhasználóneve (FK)</td>
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
        <td align="center" width="33%">SMALLINT</td>
        <td align="justify" width="33%">a partner azonosítója</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">AMOUNT</td>
        <td align="center" width="33%">SMALLINT</td>
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
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">COMMENT</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">komment azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">MESSAGE</td>
        <td align="center" width="33%">VARCHAR2(500)</td>
        <td align="justify" width="33%">komment</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">EVENT_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">hozzátartozó esemény azonosítója (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">USER_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">hozzátartozó felhasználó azonosítója (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">CATEGORYS</th>
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
