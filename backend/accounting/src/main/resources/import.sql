INSERT INTO 'ACTOR' ('FIRST_NAME', 'LAST_NAME', 'PASSWORD', 'EMAIL', 'BALANCE') VALUES ('Teszt','Elek', 'jelszo', 'teszt@proba.hu', 5000);
INSERT INTO 'PARTNER' ('NAME', 'CITY', 'ADDRESS', 'TAX_NUM') VALUES ('TesztPartner', 'Érdcity', 'Utca házszám', '12345678910');
INSERT INTO 'PARTNER' ('NAME', 'CITY', 'ADDRESS', 'TAX_NUM') VALUES ('Tesco', 'Érd', 'Budai út 1', '12345678910');
INSERT INTO 'PARTNER' ('NAME', 'CITY', 'ADDRESS', 'TAX_NUM') VALUES ('Spar', 'Budapest', 'Kinizsi utca 1', '12345678910');
INSERT INTO 'ITEM' ('ACTOR_ID', 'CATEGORY', 'NAME', 'PARTNER_ID', 'AMOUNT', 'DATE_OF_DEADLINE', 'DATE_OF_COMPLETION', 'DESCRIPTION')
    VALUES (1, 'ez még rossz', 'bevásárlás', 2, 3000, '2018-11-10', '2018-11-10', 'sok kaja kell még');
INSERT INTO 'ITEM' ('ACTOR_ID', 'CATEGORY', 'NAME', 'PARTNER_ID', 'AMOUNT', 'DATE_OF_DEADLINE', 'DATE_OF_COMPLETION', 'DESCRIPTION')
    VALUES (1, 'ez még rossz itt is', 'kajáltam', 1, 1520, '2018-11-03', '2018-11-03', 'gyros, csípőssel');
INSERT INTO 'ITEM' ('ACTOR_ID', 'CATEGORY', 'NAME', 'PARTNER_ID', 'AMOUNT', 'DATE_OF_DEADLINE', 'DATE_OF_COMPLETION', 'DESCRIPTION')
    VALUES (1, 'ez még rossz és itt is', 'bevásárlás mégegyszer', 2, 9000, '2018-11-09', '2018-11-08', 'alkohol');
INSERT INTO 'CATEGORY' ('CATEGORY') VALUES ('első kategoria');
INSERT INTO 'CATEGORY' ('CATEGORY') VALUES ('második kategoria');
INSERT INTO 'CATEGORY' ('CATEGORY') VALUES ('harmadik kategoria');
