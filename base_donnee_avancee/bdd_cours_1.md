# COURS 1


chaque semaine exo à déposer sur moodle systématique. notés, 20 juste en faisant et en participant.  

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


# Dépendances Fonctionnelles

réflexitvité : Y est inclut dans X => x->Y

pseudo-transitivité: X->Y, WY->Z => WX ->Z

vocabulaire: DF Triviale: DF obtenue par réflexivité.
             DF simple/Composée: DF qui possède un seul/plusieurs élément(s) en partie droite.
             DF Directe: DF non obtenue par transitivité.
             DF elementaire: DF non décomposable.

## Fermeture transitive

N -> T N -> M
T -> M N -> P
T -> P N -> TC
N -> C T -> MP

FT de l'attribut de N:

N<sub>0</sub><sup>+</sup> = {N} par réflexivité

N<sub>1</sub><sup>+</sup> = {N,T,C}

N<sup>+</sup> = {N,T,C,M,P}

# Formes Normales

## 1ère forme normale (1FN)

Définition : une relation est en 1FN si chacun des attributs ne prend ses valeurs que dans un domaine cnstitué de valeurs élémentaires (atomiques)

La 1FN consiste à éviter les domaines composés de plusieurs valeurs.
ex: PERSONNE(N°INSEE, nom et prénoms) devient PERSONNE(N°INSEE, nom, prénoms) (nom et prénoms doivent être séparés).

## 2ème forme normale (2FN)

Définition 1: un schéma est 2FN ssi:
    - il est en 1FN
    - il n'admet pas de dépendances de clé artielle, CàD une DF d'une partie stricte d'une clé vers des attributs non clés

Définition 2: ....

ex: R(<ins>A,B</ins>,C,D) avec A->CD , B->D
   => R'(<ins>A,B</ins>,C)  R"(<ins>B</ins>,D)

## 3ème forme normale (3FN)

Définition: Un schéma est 3FN ssi:
    - il est en 2FN
    - chaque attribut non clé est pleinement et directement dépendant des clés.
    ou
    - tout attribut n'appartient pas à une clé ne depend pas d'un attribut non clé.
    ou encore
    - il n'admet pas de DF transitive, CàD d'un ensemble....

ex: R(<ins>A,B</ins>,C,D) avec A->CD et C->D
    => R'(<ins>A,B</ins>,C) et R"(<ins>C</ins>,D)

ex2: R(<ins>A,B</ins>,C,D) avec A->CD et BC->D
    => R'(<ins>A,B</ins>,C) et R"(<ins>B,C</ins>,D)

ex3: VOITURE(<ins>immatriculation</ins>, marque, type, puissance, couleur) DF type->marque et type -> puissance
    Décomposition en 3FN:
    =>IMMATRICULATION(<ins>immatriculation</ins>, type, couleur) et TYPE(<ins>type</ins>, marque, puissance)

## FNBC (ou BCNF) (Boyce-Codd)

Limites de la 3FN

Fournisseur(NomF, N°F, Produit, Prix) avec NomF -> N°F, N°F -> NomF et NomF,Produit -> Prix
donc deux clés candidates : (NomF, Produit) en (N°F, Produit)
=>3FN mais redondance dans les données entre NomF et N°F.

Définition: un schéma de relation est en FNBC ssi:
    - aucun attribut ne dépend transitivement d'une clé.
    - implique que le schéma est en 3FN
    ou
    - Les seules DF non triviales sont celles ou une clé détermine un ou plusieurs attributs
    ou
    - La partie gauche des DF doit contenir une clé (être une "super-clé").

ex:
Adresse(Ville, Rue, CP) avec Ville,Rue->CP et CP -> Ville
clés: (Ville,Rue) et (CP,Rue)
Pas en FNBC car CP->Ville (CP n'est pas une clé et Ville dépend transitivement de la clé).

## Décomposition en 3FN et FNBC

Objectif : A partir d'une relation r, obtenir un schéma de base de doonées qui minimise le nombre de schémas de realtion r<sub>i</sub> et qui maximise leur forme normale et sois sans perte (données et dépendances)

- A partir des r<sub>i</sub>, il doit etre possible de reconstituer r (via des jointures)
- il est toujours possible de décomposer....

Définition: La décomposition d'une relation R<U,F> en un ensemble de schémas de relation {R1,...,Rn} obtenus par projection ets dite sans perte ssi quelque soit la réalisation r de R:
    -La jointure naturelle des r<sub>i</sub> donne exactement r (pas de perte de données);
    -(F1 U ... U Fn).....

