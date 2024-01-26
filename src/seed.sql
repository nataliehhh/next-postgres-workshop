CREATE TABLE beers (
    id SERIAL PRIMARY KEY,
    beer_name VARCHAR(255),
    category_id INTEGER REFERENCES category_table(id),
    style VARCHAR(255),
    brewery VARCHAR(255),
    abv DECIMAL(4, 2),
    review TEXT
);


CREATE TABLE category_table (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255)
);

INSERT INTO category_table (category) VALUES
('Pale Ale'),
('IPA'),
('Brown Ale'),
('Dark Ale'),
('Fruit/Sour'),
('Farmhouse');

INSERT INTO beers (beer_name, category_id, style, brewery, abv) VALUES
('Carmen', 1, 'Mosaic Pale Ale', 'Carnival', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
('Mosaic', 1, 'Mosaic Pale Ale', 'Neptune', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
('South Down Baxter', 2, 'West Coast IPA', 'Blacklodge', 6.5),
('Hicky The Rake', 1, 'Lemonata Pale', 'Wylam', 4.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
('Saison Provision 2023', 6, 'Mixed Ferment Saison', 'Burning Sky', 7.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
('Rivalita', 4, 'Imperial Stout', 'Pollys', 9.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
('Lambic Geuze', 5, 'Lambic', '3 Fonteinen', 6.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
('Wee Mcash', 3, 'Bitter', 'Five Kingdoms', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat');

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    comment TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

CREATE TABLE beers_comments_junction (
    beers_id INTEGER REFERENCES beers (id),
    comments_id INTEGER REFERENCES comments (id)
);

INSERT INTO comments (username, comment) VALUES 
('Natalie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'),
('Joe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'),
('Jeni', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'),
('Jeff', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit');

INSERT INTO beers_comments_junction (beers_id, comments_id) VALUES 
('1', '1'),
('1', '2'),
('2', '3'),
('2', '4');

