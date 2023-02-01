CREATE TABLE buyers (													living_area	land_area	bed_rooms
buyer_id' INT PRIMARY KEY,													269 m²	1914 m²	5
firstname' VARCHAR(255) NOT NULL,													120 m²	-	3
lastname' VARCHAR(255) NOT NULL,													176 m²	-	2
ville' VARCHAR(255) NOT NULL,													340 m²	2800 m²	6
phone' INT NOT NULL,													310 m²	900 m²	4
email' VARCHAR(255) NOT NULL,													220 m²	339 m²	4
budget' VARCHAR(255) NOT NULL,													289 m²	3410 m²	8
real_estate_agent_id' INT NOT NULL													203 m²	2026 m²	5
);													241 m²	188 m²	6
													340 m²	907 m²	5
CREATE TABLE real_estate_agent (													105 m²	-	2
real_estate_agent_id INT PRIMARY KEY,													280 m²	126000 m²	5
firstname VARCHAR(255),													260 m²	182 m²	5
lastname VARCHAR(255),													215 m²	-	4
phone VARCHAR(255),													144 m²	-	2
email VARCHAR(255),													121 m²	-	2
password VARCHAR(255)													116 m²	-	3
);													380 m²	2825 m²	3
													300 m²	2029 m²	8
CREATE TABLE properties (													198 m²	1250 m²	4
id INT PRIMARY KEY,															
title_property VARCHAR(255),															
city VARCHAR(255),															
resume VARCHAR(255),															
selling_price_including_VAT INT,															
description TEXT,															
postal_code INT,															
real_estate_agent_id INT,															
photo_url VARCHAR(255),															
buyer_id INT															
);															
															
INSERT INTO buyers (buyer_id, firstname, lastname, ville, phone, email, budget, real_estate_agent_id)															
VALUES															
(1, 'Louis', 'Argius', 'Bordeaux', 645896369, 'louisargius@gmail.com', '1 200 000 € HAI', 2),															
(2, 'Emma', 'Dupont', 'Lyon', 569632553, 'emmadupont@gmail.com', '1 500 000 € HAI', 1),															
(3, 'Lucas', 'Martins', 'Marseille', 452656986, 'lucasmartins@gmail.com', '2 000 000 € HAI', 2),															
(4, 'Sophie', 'Garcia', 'Toulouse', 345678901, 'sophiegarcia@gmail.com', '1 800 000 € HAI', 3),															
(5, 'Nathan', 'Smith', 'Bordeaux', 456789012, 'nathansmith@gmail.com', '2 200 000 € HAI', 2),															
(6, 'Chloe', 'Leroy', 'Paris', 647859689, 'chloeleroy@gmail.com', '1 600 000 € HAI', 1),															
(7, 'Thomas', 'Diaz', 'Bordeaux', 765235695, 'thomasdiaz@gmail.com', '2 400 000 € HAI', 1),															
(8, 'Amelie', 'Lopez', 'Nantes', 645896525, 'amelielopez@gmail.com', '1 700 000 € HAI', 1),															
(9, 'Maxime', 'Moreno', 'Bordeaux', 765256965, 'maximemoreno@gmail.com', '2 300 000 €', 3),															
(10, 'Camille', 'Gomez', 'Nantes', 659869652, 'camillegomez@gmail.com', '1 900 000 € HAI', 2);															
															
INSERT INTO real_estate_agent (real_estate_agent_id, firstname, lastname, phone, email, password)															
VALUES (1, 'David', 'Faure', 645256989, 'davidfaure@gmail.com', 'gehjojoovejrojreojrojr'),															
(2, 'Sophie', 'Marc', 756896325, 'sophielauremarc@gmail.com', 'dffrgtgthyyjuu'),															
(3, 'Thibaut', 'Machet', 645896325, 'lamache@gmail.com', 'degrtegthyjjè');															
															
INSERT INTO properties (id, title_property, city, resume, selling_price_including_VAT, description, postal_code, real_estate_agent_id, photo_url, buyer_id)															
VALUES															
(1, 'SAINT MÉDARD EN JALLES - ROUTE DES OCÉANS - SUPERBE VILLA D ARCHITECTE', 'ST MEDARD EN JALLES', '269 m² · 6 pièces', 1149000, 'Entre verdure luxuriante et calme absolu, cette superbe villa darchitecte offre un cadre de vie exceptionnel étendu sur plus de 1900 m2 d extérieur.', 33160, 1, 'https://i.imgur.com/xEdSAlU.png', 3),															
(2, 'CHARTRONS - SUPERBE APPARTEMENT AVEC TERRASSE', 'BORDEAUX', '120 m² · 4 pièces', 925000, 'Au coeur des Chartrons, à deux pas de la place du marché, ce magnifique appartement entièrement rénové denviron 120M² vous séduira pas ses volumes, son ambiance chaleureuse et son emplacement idéal.', 33300, 2, 'https://i.imgur.com/EyqppbP.png', 1),															
(3, 'QUINCONCES - MAGNIFIQUE APPARTEMENT AVEC TERRASSE', 'BORDEAUX', '176 m² · 3 pièces', 2080000, 'A deux pas du Triangle d Or, venez découvrir ce magnifique appartement au dernier étage avec ascenceur dun immeuble typiquement Haussmannien.', 33000, 3, 'https://i.imgur.com/n7Uk0AI.png', 3),															
(4, 'EYSINES - CHARMANTE DEMEURE BOURGEOISE', 'EYSINES', '340 m² · 7 pièces', 1129600, 'Nichée au coeur dun parc arboré d environ 2800 m², cette magnifique propriété vous ravira par ses beaux volumes et son potentiel.', 33320, 2, 'https://i.imgur.com/Rvfonmv.png', 6),															
(5, 'BARRIÈRE DE BÈGLES - MAISON FAMILIALE À LA PERSONNALITÉ UNIQUE', 'BORDEAUX', '310 m² · 10 pièces', 1490000, 'Laissez-vous séduire par cette sublime maison en pierre rénovée avec goût et son magnifique jardin paysager. Ses espaces particulièrement généreux ont été conçus pour la vie de famille et la convivialité.', 33800, 2, 'https://i.imgur.com/kIQuKjN.png', 4),															
(6, 'BÈGLES - ANCIENNE FABRIQUE DE SURF RÉNOVÉE EN LOFT CONTEMPORAIN', 'BEGLES', '220 m² · 5 pièces', 1003200, 'Découvrez ce loft contemporain repensé par un architecte ayant sublimé les volumes et la structure de cette ancienne fabrique de surf. Le vaste séjour et sa cuisine américaine combinent le charme de l ancien alliant pierre de taille et poutres apparentes, au contemporain.', 33310, 1, 'https://i.imgur.com/TYHlV9c.png', 2),															
(7, 'SAINT SULPICE ET CAMEYRAC - VILLA CONTEMPORAINE', 'ST SULPICE ET CAMEYRAC', '289 m² · 10 pièces', 1045000, 'Au coeur de l environnement privilégié du golf de Cameyrac se dresse sur un terrain de près de 3400 m², une magnifique villa contemporaine et familiale aux prestations de qualité. nombreuses places de stationnement sont des atouts supplémentaires à ce bien d exception.', 33450, 1, 'https://i.imgur.com/b0XCjaY.png', 5),															
(8, 'CENAC - SUPERBE MAISON D ARCHITECTE EN OSSATURE BOIS', 'CENAC', '203 m² · 7 pièces', 995000, 'Coup de coeur pour cette surprenante villa en ossature bois. Pensée dans un esprit respectueux de l environnement, cette maison offre un cadre familial privilégé mêlant beaux espaces fonctionnels et luminosité.', 33360, 1, 'https://i.imgur.com/HD4nTBX.png', 8),															
(9, 'SAINT-GENES - SUBLIME MAISON BOURGEOISE', 'BORDEAUX-SAINT-GENES', '241 m² · 8 pièces', 1612000, 'Laissez-vous charmer par cette magnifique demeure familiale aussi conviviale que raffinée. Un cadre exceptionnel avec de superbes prestations pour ceux qui recherchent lélégance et le prestige.', 33000, 3, 'https://i.imgur.com/fTj64Jk.png', 10),															
(10, 'CAUDERAN - SUBLIME VILLA CONTEMPORAINE', 'BORDEAUX', '340 m² · 7 pièces', 2371000, 'Située dans un quartier résidentiel à proximité du Golf Bordelais, cette contemporaine vous séduira par son architecture design, sa luminosité et la qualité de ses prestations.', 33200, 2, 'https://i.imgur.com/C9LiacZ.png', 9),															
(11, 'PLACE DU PALAIS - SUPERBE APPARTEMENT', 'BORDEAUX', '105 m² · 4 pièces', 829500, 'Dans un bel immeuble en pierre situé sur la remarquable place du Palais, découvrez cet appartement d exception aux prestations anciennes conservées, dévoilant moulures, parquet massif et cheminées. Il se compose d une entrée, d une vaste pièce de vie inondée de lumière ouvrant sur un balcon et d une cuisine équipée haut de gamme.', 33000, 3, 'https://i.imgur.com/fbwRBSv.png', 7),															
(12, 'CAVIGNAC - CHARMANTE GIRONDINE ET SON VASTE PARC ARBORÉ', 'CAVIGNAC', '280 m² · 7 pièces', 1128000, 'Située dans un cadre exceptionnel à 30 minutes de Bordeaux, découvrez une allée bordée de peupliers vous menant à une belle bâtisse en pierre dressée au coeur d un superbe parc boisé.', 33620, 1, 'https://i.imgur.com/Mb8KZkJ.png', 9);															
(13, 'PROCHE PRIMROSE - SOMPTUEUSE DEMEURE BOURGEOISE DU XIXE SIÈCLE', 'BORDEAUX', '260 m² · 7 pièces', 1695000, 'Cette superbe maison en pierre dont les prestations anciennes de qualité ont été conservées, allie une rénovation contemporaine à l esthétisme raffiné. Un grand double séjour traversant ouvre sur un jardin agrémenté d une piscine.', 33200, 1, 'https://i.imgur.com/TN4W5JP.png', 6),															
(14, 'APPARTEMENT AVEC VUE SUR LE JARDIN PUBLIC', 'BORDEAUX', '215 m² · 5 pièces', 1358500, 'Magnifique potentiel pour cet appartement spacieux dans une petite copropriété de 3 lots idéalement située. Une belle entrée distribue une salle à manger, une cuisine et un salon aux prestations anciennes conservées.', 33000, 3, 'https://i.imgur.com/PaL2rMd.png', ''),															
(15, 'SUPERBE APPARTEMENT RÉNOVÉ DANS LE CENTRE HISTORIQUE DE BORDEAUX', 'BORDEAUX', '144 m² · 5 pièces', 1095000, 'Idéalement situé, au coeur du très animé quartier Saint-Pierre, cet appartement de caractère est situé au premier étage dun bel immeuble en pierre avec ascenseur.', 33000, 2, 'https://i.imgur.com/SYhvchq.png', ''),															
(16, 'PLACE DES QUINCONCES - BEL APPARTEMENT HAUSSMANNIEN', 'BORDEAUX', '121 m² · 4 pièces', 945000, 'Situé au 1er étage d un superbe immeuble en pierre à lemplacement privilégié, découvrez ce magnifique appartement aux prestations anciennes conservées.', 33000, 3, 'https://i.imgur.com/1QtJh69.png', '');															
(17, 'BIARRITZ - CÔTE DES BASQUES - APPARTEMENT ENTIÈREMENT RÉNOVÉ', 'BIARRITZ', '116 m² · 4 pièces', 1350000, 'Ce magnifique appartement entièrement rénové est situé dans le quartier recherché de la mythique Côte des basques. Au 2ème et dernier étage d une petite résidence biarriote, cet appartement offre une vue magnifique sur l océan et les couchers de soleil.', 64200, 2, 'https://i.imgur.com/3Dj4F87.png', ''),															
(18, 'SAINT JEAN DE LUZ-GOLF CHANTACO- EXCEPTIONNELLE VILLA CONTEMPORAINE', 'ST JEAN DE LUZ', '380 m² · 10 pièces', 3180000, 'A quelques minutes du Golf, environnement privilégié et securisé, au coeur de la nature pour cette villa d architecte de renom.', 64500, 1, 'https://i.imgur.com/lXFKRUL.png', ''),															
(19, 'HOSSEGOR - VILLA ART DÉCO', 'SOORTS HOSSEGOR', '300 m² · 11 pièces', 4680000, 'A labri des regards, rarrissime propriété dans le centre d''Hossegor. Situation exceptionnelle pour cette villa de caractère des années 30. Denviron 300 m², la villa est élevée sur 3 niveaux et offre de beaux volumes de réception avec terrasses.', 40150, 1, 'https://i.imgur.com/OTkHIlz.png', ''),															
(20, 'BAYONNE-ARENES- VILLA AVEC GRAND TERRAIN', 'BAYONNE', '198 m² · 6 pièces', 2080000, 'Quartier des Arénes- Magnifique villa des années 30 sur beau terrain plat de 1250m² . Bien particulièrement rare sur un secteur très convoité.', 64100, 3, 'https://i.imgur.com/CEILfRP.png', 5);															
															
															
															