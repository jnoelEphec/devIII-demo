# API de Gestion des Utilisateurs

Cette API permet de réaliser des opérations CRUD sur les utilisateurs ainsi que d'autres fonctionnalités de gestion des utilisateurs.

## Endpoints

### 1. Création d'un utilisateur

- **Endpoint:** POST `/api/users`
- **Description:** Crée un nouvel utilisateur.
- **Request body:** Informations de l'utilisateur (nom, email, mot de passe, etc.).
- **Response:** Détails de l'utilisateur créé.
- **Status codes:**
  - `201 Created` : L'utilisateur a été créé avec succès.
  - `400 Bad Request` : Données invalides fournies.

### 2. Obtention des utilisateurs

- **Endpoint:** GET `/api/users`
- **Description:** Récupère une liste de tous les utilisateurs.
- **Response:** Liste des utilisateurs.
- **Status codes:**

  - `200 OK` : Succès.

- **Endpoint:** GET `/api/users/{id}`
- **Description:** Récupère les détails d'un utilisateur spécifique.
- **Response:** Détails de l'utilisateur.
- **Status codes:**
  - `200 OK` : Succès.
  - `404 Not Found` : Utilisateur non trouvé.

### 3. Mise à jour d'un utilisateur

- **Endpoint:** PUT `/api/users/{id}`
- **Description:** Met à jour les détails d'un utilisateur spécifique.
- **Request body:** Données de l'utilisateur à mettre à jour.
- **Response:** Utilisateur mis à jour.
- **Status codes:**
  - `200 OK` : Mise à jour réussie.
  - `400 Bad Request` : Données invalides.
  - `404 Not Found` : Utilisateur non trouvé.

### 4. Suppression d'un utilisateur

- **Endpoint:** DELETE `/api/users/{id}`
- **Description:** Supprime un utilisateur spécifique.
- **Response:** Aucune donnée.
- **Status codes:**
  - `204 No Content` : Suppression réussie.
  - `404 Not Found` : Utilisateur non trouvé.

### 5. Authentification d'un utilisateur

- **Endpoint:** POST `/api/users/login`
- **Description:** Authentifie un utilisateur.
- **Request body:** Email et mot de passe.
- **Response:** Token d'authentification ou message d'erreur.
- **Status codes:**
  - `200 OK` : Authentification réussie.
  - `401 Unauthorized` : Échec de l'authentification.

### 6. Déconnexion d'un utilisateur

- **Endpoint:** POST `/api/users/logout`
- **Description:** Déconnecte un utilisateur.
- **Response:** Message de confirmation.
- **Status codes:**
  - `200 OK` : Déconnexion réussie.

### 7. Changement de mot de passe

- **Endpoint:** PUT `/api/users/{id}/change-password`
- **Description:** Permet à un utilisateur de changer son mot de passe.
- **Request body:** Ancien et nouveau mot de passe.
- **Response:** Message de confirmation.
- **Status codes:**
  - `200 OK` : Changement réussi.
  - `400 Bad Request` : Données invalides.
  - `401 Unauthorized` : Ancien mot de passe incorrect.

# API de Gestion des Cartes Kanban

Cette API permet de réaliser des opérations CRUD sur les cartes Kanban ainsi que d'autres fonctionnalités pour la gestion des cartes au sein d'un tableau Kanban.

## Endpoints

### 1. Création d'une carte

- **Endpoint:** POST `/api/kanban/cards`
- **Description:** Crée une nouvelle carte Kanban.
- **Request body:** Informations de la carte (titre, description, état, priorité, etc.).
- **Response:** Détails de la carte créée.
- **Status codes:**
  - `201 Created` : La carte a été créée avec succès.
  - `400 Bad Request` : Données invalides fournies.

### 2. Obtention des cartes

- **Endpoint:** GET `/api/kanban/cards`
- **Description:** Récupère une liste de toutes les cartes Kanban.
- **Response:** Liste des cartes.
- **Status codes:**

  - `200 OK` : Succès.

- **Endpoint:** GET `/api/kanban/cards/{id}`
- **Description:** Récupère les détails d'une carte Kanban spécifique.
- **Response:** Détails de la carte.
- **Status codes:**
  - `200 OK` : Succès.
  - `404 Not Found` : Carte non trouvée.

### 3. Mise à jour d'une carte

- **Endpoint:** PUT `/api/kanban/cards/{id}`
- **Description:** Met à jour les détails d'une carte Kanban spécifique.
- **Request body:** Données de la carte à mettre à jour.
- **Response:** Carte mise à jour.
- **Status codes:**
  - `200 OK` : Mise à jour réussie.
  - `400 Bad Request` : Données invalides.
  - `404 Not Found` : Carte non trouvée.

### 4. Suppression d'une carte

- **Endpoint:** DELETE `/api/kanban/cards/{id}`
- **Description:** Supprime une carte Kanban spécifique.
- **Response:** Aucune donnée.
- **Status codes:**
  - `204 No Content` : Suppression réussie.
  - `404 Not Found` : Carte non trouvée.

### 5. Déplacement d'une carte

- **Endpoint:** PUT `/api/kanban/cards/{id}/move`
- **Description:** Déplace une carte à une nouvelle position ou dans une nouvelle colonne.
- **Request body:** Nouvelle position et/ou nouvelle colonne.
- **Response:** Carte mise à jour avec sa nouvelle position/colonne.
- **Status codes:**
  - `200 OK` : Déplacement réussi.
  - `400 Bad Request` : Données invalides.
  - `404 Not Found` : Carte non trouvée.

### 6. Assignation d'un utilisateur à une carte

- **Endpoint:** PUT `/api/kanban/cards/{id}/assign`
- **Description:** Assigne un utilisateur à une carte Kanban.
- **Request body:** Identifiant de l'utilisateur.
- **Response:** Carte mise à jour avec l'utilisateur assigné.
- **Status codes:**
  - `200 OK` : Assignation réussie.
  - `400 Bad Request` : Données invalides.
  - `404 Not Found` : Carte ou utilisateur non trouvé.
