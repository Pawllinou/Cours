## BASE DE DONNEES AVANCEE

Soient les dépendances fonctionnelles suivantes, issues de l’étude du réel perçu (simplifié) :
Cheval → DateNaissance, Sexe, Père, Mère
Cheval, DateAchat → N°Propriétaire
N°Propriétaire → NomPropriétaire, Ville
Course, Année → Gain
N°Jockey → NomJockey, Poids
Course, Année, Cheval → Place, N°Jockey
Course, Année, Place → Cheval, N°Jockey
Course, Année, N°Jockey → Cheval

Questions

    Tracez le graphe de dépendances fonctionnelles.
    Éliminez les redondances, si nécessaire.
    Déterminez un schéma relationnel normalisé en 3FN.
    Décrire les autres contraintes d’intégrité présentes dans le réel perçu.

# Tracez le graphe de dépendances fonctionnelles.

    Voir "SchémaDF.pdf"

# Éliminez les redondances, si nécessaire.

    