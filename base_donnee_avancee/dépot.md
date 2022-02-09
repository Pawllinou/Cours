# Base de données avancée

## Exercice 1.1 – Création de la base de données

1.  Vent.Numspot = Spots.Numspot  
    Navigue.Numpers = Planchistes.Numpers  
    Navigue.Nummat = Matos.Nummat  
    Navigue.Numspot = Spots.Numspot

    Tous les attributs commençant par Num doivent être des numéros de séries uniques (Numspot, Numpers, Nummat).  
    Les dates doivent avoir un format correspondant a une date valide.  
    Nomspot, Nom, Prénom et marque sont des chaines de caractères.  
    Exposition et Direction ∈ {'Nord', 'Sud', 'Est', 'Ouest', 'Nord-Est', 'Nord-Ouest', 'Sud-Est', 'Sud-Ouest'}  
    Spots.Type et Matos.Type ∈ {'Slalom', 'Vague'}  
    Note est un entier comprit entre 0 et 100  
    Niveau ∈ {'Debutant', ..., 'Compétition'} (5 niveaux)  
    Longueur, Volume, et Poids sont des entiers positifs.  

2.  

3.  

## Exercice 1.2 – Algèbre relationnelle et requêtes SQL

SPOTS (NUMSPOT, NOMSPOT, EXPOSITION, TYPE, NOTE)  
PLANCHISTES (NUMPERS, NOM, PRENOM, NIVEAU)  
MATOS (NUMMAT, MARQUE, TYPE, LONGUEUR, VOLUME, POIDS)  
VENT (DATE, NUMSPOT, DIRECTION, FORCE)  
NAVIGUE (DATE, NUMPERS, NUMMAT, NUMSPOT)  

1.  Nom des planchistes de niveau ‘Confirmé’ qui ont navigué le ‘20/07/2021’ sur un spot où le vent moyen était supérieur à force 4 sur une planche de moins de 2,75 m.  

    π<sub>Nom</sub> ( σ <sub>Niveau='Confirmé'</sub> (Planchistes) ▷◁ σ <sub>Date = '20/07/2021'</sub> (Navigue) ▷◁<sub>(Navigue.Numspot = Vent.Numspot)</sub> σ <sub>Date = '20/07/2021' ∧ Force > 4</sub> (Vent) ▷◁ σ <sub>Longueur > 2,75</sub> (Matos))

2.  Nom des planchistes qui ne sont pas sortis le ‘20/07/2021’.  

    π<sub>Nom</sub> ( π<sub>Nom, Numpers</sub> (Planchistes) - π<sub>Nom, Numpers</sub> ( σ <sub>Date = '20/07/2021'</sub> (Navigue) ▷◁ (Planchistes) ) )

3.  Nom des planchistes qui ont essayé tous les types de planches de la marque ‘FANA-BIC’. On suppose que tous les types sont dans la relation MATOS.  

    π<sub>Nom</sub> ( ( π<sub>Nom, Numpers, Type</sub> (Planchistes) ▷◁ (Matos) ) ÷ ( π<sub>Type</sub> 
    ( σ <sub>Marque = 'FANA-BIC'</sub> (Matos) ) ) )

4.  Pour chaque spot de la base, en indiquant son nom, donner le nombre de jours de vent au moins de force 4 pour l’année 2021.  

    je ne sais pas faire