# COURS 1


chaque semaine exo a déposer sur moodle systématique. notés, 20 juste en faisant et en participants.  

2 notes de cc + DSI + DST  

DSI le 2Mars.

Pas de tp noté prévu.

## défitions et introdution

BDD:
plus qu'un simple ensemble de données non-indémendantes
permet l'indépendance données - progammes

processus de construction d'une base de données:

monde réel -> réel perçu -> données et contraintes d'intégrité -> schéma entités association -> modèle relationnel (modèle  logique) -> implémentation physique (SGBD)

problématique : modéliser le réel perçu, CàD traduire les contraintes d'intégrité.

SGBD Relationnel: Système de gestion de bases de données (SGBDR)

DBMS: DataBase Management System (RDBMS)

Outil info pour gérer les BDD.

régies par un model relationnel:

Doit absolument posséder plusieurs fonctionnalités:
-   sauvegarde (persistance) des données
-   interrogation (SQL) des données
-   recherche et mise en forme des données stockées
-   partage des données entre les différents utilisateurs
-   gestion de la concurrence d'accès
-   sécurité des données (gestion des incidents)
-   Optimisation des opérations dans un souci constant de performance

## Les principales Opérations

(LDD, LMD, LCD, SQL-92)

Create table, drop Table, Alter table
select, insert, update, delete
grant, revoke, commit, rollback

les LMD sont regroupées dans des transactions

une transactions est un regroupement atomique d'un ensemble d'opérations

un SGBD se charge de la mise en oeuvre des transactions

Propriétés ACID : Atomicité, Cohérence, Isolation, Durabilité

Atomicité : quand je démarre une transaction je fais tout ou rien.

Cohérence : BDD cohérente constamment (si copié doit re identique)

Isolation : chaque utilisateur doit croire qu'il est seul, pas d'interaction en simultanés sur une même donnée

Durabilité : données divent être persistantes (sauvegardées)


# Concepts de base

Domaine : ensemble de valeurs atomiques, équivalent au typage en programmation.

Produit cartésien : produit entre ensembles de domaines.

relation : sous ensemble r du produit cartésien d'un ensemble de domaines.

cardinalité d'une relation : nb de lignes

Attribut : nom donné a une colonne, composé d'un identifiant et d'un domaine

Degré d'une relation : nb d'attributs.

schéma de relation : R est défini par un ensemble d'attributs U et de contraintes. on le note R(U).
                     Le schéma décrit l'intention de la relation.
                     La relation définit une extension.

Un schéma de BDD: est un ensemble de schémas de relations lié par des dépendances référentielles : attributs communs ou plus 
généralement des dépendances d'inclusion.

Une BDD est alors un ensemble de relations associé au schéma de BDD vérifiant ses contraintes d'intégrité.


# les Opérateurs
soir R(A,B,C,D) avec A,B clé primaire

Projection (PI): 
PI<sub>c,d</sub> (R) = R'(C,D)

Selection (SIGMA):

SIGMAc>4 (R) = R'(A,B,C,D) avec uniquement les lignes pour lesquelles C>2.

exemple:

Quelle est le numéro de série dont la capacité des avions est supérieure a 150?

PI<sub>n°série</sub>(SIGMA<sub>capacité>150</sub>(Avion))

Quelle personne mange des crêpes?

PI<sub>NomC</sub>(SIGMA<sub>NomP=Crêpes</sub>(Conommationx<sub>id</sub>Clients))

