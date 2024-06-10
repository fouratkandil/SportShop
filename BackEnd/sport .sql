-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 02 mai 2021 à 13:08
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sport`
--

-- --------------------------------------------------------

--
-- Structure de la table `accessoires`
--

CREATE TABLE `accessoires` (
  `id` int(100) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `prix` varchar(100) NOT NULL,
  `image` varchar(2038) NOT NULL,
  `genre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `accessoires`
--

INSERT INTO `accessoires` (`id`, `nom`, `type`, `prix`, `image`, `genre`) VALUES
(1, 'ELLESSE GRIS CHINÉ', 'SAC A DOS', '120', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/41/51/77/sac-melange_1_v1.jpg', 'homme'),
(2, 'WHEY GOLD 908G CHOCO', 'classique Musculation mixte OP', '500', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/44/22/36/whey-gold-908g-choco_1_v2.jpg', 'homme'),
(3, 'Outdoor mixte NIKE BRSLA XS DU', 'SAC DE SPORT', '160', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/45/07/78/nk-brsla-xs-duff---90_1_v1.jpg', 'homme'),
(4, 'Quiksilver Boardriders Trucker', 'Lifestyle', '100', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/e9/4f/14/b0/casquette-blanche-homme-quiksilver-boardriders-trucker_1_v1.jpeg', 'homme'),
(5, 'Outdoor mixte PUMA PHASE SPORT', 'SAC DE SPORT', '150', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/47/99/46/phase-sport-bag-foxglove_1_v1.jpg', 'femme'),
(6, 'NIKE BRSLA JDI MINI BKPK RS', 'SAC A DOS', '170', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/49/05/07/brsla-jdi-mini-bkpk-rs_1_v1.jpg', 'femme'),
(7, 'Fundamental Training II noir l', 'Fitness', '70', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/fc/41/9a/fe/gants-dentrainement-nike-womens-fundamental-training-ii-noir-lilas-femme_1_v3.jpeg', 'femme'),
(8, 'ATHLI-TECH HALTERES 2 VINYL 2', 'ACCESSOIRE MUSCULATION Fitness', '60', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/33/45/07/halteres-2-vinyl-2_1_v1.jpg', 'femme');

-- --------------------------------------------------------

--
-- Structure de la table `chassures`
--

CREATE TABLE `chassures` (
  `id` int(100) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `prix` varchar(100) NOT NULL,
  `image` varchar(2038) NOT NULL,
  `genre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `chassures`
--

INSERT INTO `chassures` (`id`, `nom`, `type`, `prix`, `image`, `genre`) VALUES
(1, 'Adidas Runfalcon 2.0', 'Life Style', '150.5', 'https://www.tuttosport.com.tn/19027-large_default/adidas-runfalcon-20.jpg', 'homme'),
(2, 'Adidas Breaknet', 'Life Style', '159', 'https://www.tuttosport.com.tn/18855-large_default/adidas-breaknet.jpg', 'homme'),
(3, 'Adidas Runfalcon 2.0', 'Life Style', '159', 'https://www.tuttosport.com.tn/19031-large_default/adidas-runfalcon-20.jpg', 'homme'),
(4, 'Nike Team Hustle D 9', 'Basketball', '199', 'https://www.tuttosport.com.tn/17776-large_default/nike-team-hustle-d-9.jpg', 'homme'),
(5, 'Nike Court Vision Low', 'Life Style', '269', 'https://www.tuttosport.com.tn/19810-large_default/nike-court-vision-low.jpg', 'homme'),
(6, 'Nike Run Swift 2', 'running', '269', 'https://www.tuttosport.com.tn/19842-large_default/nike-run-swift-2.jpg', 'homme'),
(7, 'Diadora Olympia', 'Life Style', '180', 'https://www.tuttosport.com.tn/13122-large_default/Homme-diadora-Chaussure.jpg', 'homme'),
(8, 'Reebok CLUB CLASSIC 85 Réf: DV', 'Life Style', '299', 'https://www.tuttosport.com.tn/15218-large_default/reebok-club-classic-85.jpg', 'homme'),
(9, 'REEBOK ENERGYLUX2', 'running', '150', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/46/56/04/energylux2-w_1_v1.jpg', 'femme'),
(10, 'NIKE MNS REVOLUTION 5', 'Life Style', '199', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/46/74/67/wmns-nike-revolution-5_1_v1.jpg', 'femme'),
(11, 'NIKE DOWNSHIFTE', 'running', '180', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/44/59/68/wmns-nike-downshifter-9_1_v1.jpg', 'femme'),
(12, 'ADIDAS BTE GALAXY W', 'running', '160', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/39/56/72/bte-galaxy-w_1_v1.jpg', 'femme'),
(13, 'ASICS STORMER W', 'running', '170', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/37/00/94/stormer-w_1_v1.jpg', 'femme');

-- --------------------------------------------------------

--
-- Structure de la table `vetements`
--

CREATE TABLE `vetements` (
  `id` int(100) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `prix` varchar(100) NOT NULL,
  `image` varchar(2038) NOT NULL,
  `genre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vetements`
--

INSERT INTO `vetements` (`id`, `nom`, `type`, `prix`, `image`, `genre`) VALUES
(1, 'THE NORTH FACE W MA TEE BLANC', 'T-shirts', '150', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/49/11/31/w-ma-tee-blanc_1_v1.jpg', 'homme'),
(2, 'THE NORTH FACE LIGHTNING', 'VESTE Randonnée', '160', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/49/05/95/m-lightning-jacket_1_v1.jpg', 'homme'),
(3, 'HELLY HANSEN HP FLEECE', 'POLAIRE Randonnée ', '180', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/49/09/03/hp-fleece-jkt-marine_1_v1.jpg', 'homme'),
(4, 'ATHLITECH LARY 300', 'VESTE running', '160', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/47/87/42/lary-300-sweat-zip-m_1_v1.jpg', 'homme'),
(5, 'Survêtement femme Reebok Linea', 'Fitness', '200', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/40/cc/81/22/survetement-femme-reebok-linear-logo_1_v1.jpeg', 'femme'),
(6, 'REEBOK S LUX RACER PAD', 'BRASSIERE Fitness', '160', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/49/11/66/s-lux-racer-pad-bra_3_v1.jpg', 'femme'),
(7, ' ADIDAS 3S 34', 'PANTALON Fitness', '110', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/49/02/70/w-3s-34-tight_1_v1.jpg', 'femme'),
(8, 'ROSSIGNOL SLEET POLYDOWN', 'VESTE Ski', '300', 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/45/73/31/w-sleet-polydown-jkt-marine_1_v1.jpg', 'femme');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
