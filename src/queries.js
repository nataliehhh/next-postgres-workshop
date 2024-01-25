`CREATE TABLE beers (
    id SERIAL PRIMARY KEY,
    beer_name VARCHAR(255),
    category_id INTEGER REFERENCES category_table(id),
    style VARCHAR(255),
    brewery VARCHAR(255),
    abv DECIMAL(4, 2)
);`

`CREATE TABLE category_table (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255)
);`

`INSERT INTO category_table (category) VALUES
('Pale Ale'),
('IPA'),
('Brown Ale'),
('Dark Ale'),
('Fruit/Sour'),
('Farmhouse');`

`INSERT INTO beers (beer_name, category_id, style, brewery, abv) VALUES
('Carmen', '1', 'Mosaic Pale Ale', 'Carnival', 5.0),
('Mosaic', '1', 'Mosaic Pale Ale', 'Neptune', 4.5),
('South Down Baxter', '2', 'West Coast IPA', 'Blacklodge', 6.5),
('Hicky The Rake', '1', 'Lemonata Pale', 'Wylam', 4.0),
('Saison Provision 2023', '6', 'Mixed Ferment Saison', 'Burning Sky', 7.0),
('Rivalita', '4', 'Imperial Stout', 'Pollys', 9.0),
('Lambic Geuze', '5', 'Lambic', '3 Fonteinen', 6.0),
('Wee Mcash', '3', 'Bitter', 'Five Kingdoms', 4.5);`

`SELECT * FROM beers 
JOIN category_table ON beers.category_id = category_table.id`