
BEGIN;

DROP TABLE IF EXISTS "state", 
"site",
"picture",
"techno",
"site_use_techno";

-- -----------------------------------------------------
-- Table "state"
CREATE TABLE IF NOT EXISTS "state" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "site"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "site" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "description" text NOT NULL,
  "site_link" text NULL,
  "github_link" text NULL,
  "top_site" boolean NOT NULL,
  "state_id" integer NOT NULL REFERENCES "site"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "picture"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "picture" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "site_id" integer NOT NULL REFERENCES "site"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "techno"
CREATE TABLE IF NOT EXISTS "techno" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "site_use_techno"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "site_use_techno" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "site_id" integer NOT NULL REFERENCES "site"("id"),
  "techno_id" integer NOT NULL REFERENCES "techno"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz,
  UNIQUE ("site_id", "techno_id")
);

COMMIT;

BEGIN;

-- Déchargement des données de la table "state"
--

INSERT INTO "state" ("name") VALUES
('Idea'),
('In progress'),
('Online'),
('Finished');

-- Déchargement des données de la table "site"
--

INSERT INTO "site" ("name", "description", "site_link", "github_link", "top_site", "state_id") VALUES
('CV Adventure', 'Discover my career path in a playful way thanks to this innovative CV site: a retro arcade game experience that lets you navigate through the different stages of my career while having fun.

Immerse yourself in this unique experience of discovering a web developer in search of opportunities, while exploring my background and skills.', 'https://www.cv-adventure.nicolassaumont.com/', 'https://github.com/NicolasSaumont/cv_adventure', 'true', 3),
('Mystical Forest', 'Mystical Forest is an interactive website that offers a unique, immersive experience of storytelling. Visitors can explore a magical forest and engage with the environment through various interactive features such as puzzles, choices, and hidden surprises.

The website features an original story by artist and writer, Nicolas Saumont. Mystical Forest aims to inspire a sense of wonder and curiosity for this enchanted world, and is suitable for adults and teenagers.', 'https://www.mysticalforest.nicolassaumont.com/', 'https://github.com/NicolasSaumont/mysticalForest', 'true', 3),
('Memory Game', 'Embark on an exciting memory journey with this unique One Piece Memory Game! Immerse yourself in the captivating world of the One Piece manga as you challenge your memory and recollection skills.

This interactive memory game features beloved characters, iconic scenes, and thrilling moments from the epic series. Test your abilities by matching pairs and unravel the adventures of Luffy and his crew. Join the fun and relive the magic of One Piece through this engaging and entertaining memory game.', 'https://www.memory.nicolassaumont.com/', 'https://github.com/NicolasSaumont/memory', 'true', 4),
('Ezee', 'Accompagner les Entrepreneurs is a French website that offers resources and support for entrepreneurs and small business owners. The website provides a variety of tools and services to help entrepreneurs grow their businesses, including training, coaching, and networking opportunities.

Additionally, Accompagner les Entrepreneurs features a blog with articles and insights on business strategy, marketing, and management. The website is designed to help entrepreneurs at all stages of their journey, from idea to implementation and growth.', 'https://www.accompagnerlesentrepreneurs.com/', 'https://github.com/NicolasSaumont', 'true', 4),
('Fran', 'Fran is a fake website made by Nicolas Saumont, which mimic a travel agency website that offers travel inspiration, tips, and stories from around the world. The website features beautiful photography and detailed accounts of the author''s adventures, as well as practical advice on travel planning and budgeting.', 'https://www.travel.nicolassaumont.com/', 'https://github.com/NicolasSaumont/travel', 'false', 4),
('Top 5 Video Games', 'This website offers a list of the top five best games ever made, according to the author. The website provides a brief overview of each game, including its genre, gameplay mechanics, and what makes it so great. The list includes a variety of games from different eras and platforms, ranging from classic arcade games to modern video games.

It''s a great resource for gamers looking for new games to try or for those interested in exploring the best games of all time.', 'https://www.games.nicolassaumont.com/', 'https://github.com/NicolasSaumont/bestGames', 'false', 4);

-- Déchargement des données de la table "picture"
--

INSERT INTO "picture" ("name", "site_id") VALUES
('cv_adventure--image-1', 1),
('cv_adventure--image-2', 1),
('cv_adventure--image-3', 1),
('mystical_forest--image-1', 2),
('mystical_forest--image-2', 2),
('mystical_forest--image-3', 2),
('memory--image-1', 3),
('memory--image-2', 3),
('memory--image-3', 3),
('ezee--image-1', 4),
('ezee--image-1', 4),
('ezee--image-1', 4),
('fran--image-1', 5),
('fran--image-1', 5),
('fran--image-1', 5),
('top_5_video_games--image-1', 6),
('top_5_video_games--image-1', 6),
('top_5_video_games--image-1', 6);

-- Déchargement des données de la table "techno"
--

INSERT INTO "techno" ("name") VALUES
('html'),
('css'),
('javascript'),
('jquery'),
('nodejs'),
('express'),
('wordpress'),
('newsletter'),
('onlinestore');

-- Déchargement des données de la table "site_use_techno"
--

INSERT INTO "site_use_techno" ("site_id", "techno_id") VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 5),
(1, 6),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 2),
(3, 3),
(4, 7),
(4, 8),
(4, 9),
(5, 1),
(5, 2),
(6, 1),
(6, 2),
(6, 3),
(6, 4);

COMMIT;