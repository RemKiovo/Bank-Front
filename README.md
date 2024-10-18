# Argent Bank - Application Bancaire React

## Aperçu du Projet

Argent Bank est une application web basée sur React pour un système bancaire. Ce projet a été développé dans le cadre d'un défi pour "Utiliser une API pour le compte bancaire d'un utilisateur avec React". Les objectifs principaux étaient de mettre en œuvre une application front-end utilisant React et Redux, de faire des appels API et de modéliser les interactions de données.

## Fonctionnalités

- Authentification des utilisateurs
- Gestion du profil utilisateur
- Vue d'ensemble des comptes
- Design réactif

## Technologies Utilisées

- React 18.3.1
- Redux (avec @reduxjs/toolkit) 2.2.7
- React Router 6.26.2
- TypeScript 5.5.3
- Axios 1.7.7
- Vite 5.4.1
- SASS 1.79.1

## Installation

1. Clonez le dépôt :

   ```
   git clone https://github.com/RemKiovo/Bank-Front.git
   ```

2. Accédez au répertoire du projet :

   ```
   cd Bank-Front
   ```

3. Installez les dépendances :

   ```
   npm install
   ```

4. Démarrez le serveur de développement :
   ```
   npm run dev
   ```

## Utilisation

Après avoir démarré le serveur de développement, ouvrez votre navigateur et accédez à `http://localhost:5173` (ou le port spécifié par Vite).

- Connectez-vous en utilisant les identifiants de test fournis ou créez un nouveau compte.
- Consultez et gérez vos comptes bancaires.
- Modifiez les informations de votre profil utilisateur.

## Structure du Projet

- `src/components/`: Composants React
- `src/pages/`: Composants de page
- `src/store/`: Configuration et tranches du store Redux
- `src/services/`: Fonctions de service API
- `src/hooks/`: Hooks personnalisés
- `src/store/`: Configuration et tranches du store Redux

## Intégration API

Ce projet interagit avec une API backend pour l'authentification des utilisateurs, la gestion des profils et les informations de compte. Les points de terminaison de l'API sont gérés à l'aide d'Axios dans le répertoire `src/services/`.

## Améliorations Futures

- Implémenter la visualisation de l'historique des transactions
