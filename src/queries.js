`CREATE TABLE beers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    style VARCHAR(255),
    brewery VARCHAR(255),
    abv DECIMAL(4, 2)
);`

   `INSERT INTO beers (name, style, brewery, abv) VALUES
    ('Carmen', 'Pale Ale', 'Carnival', 5.0),
    ('Mosaic', 'Pale Ale', 'Neptune', 4.5),
    ('South Down Baxter', 'West Coast IPA', 'Blacklodge', 6.5),
    ('Hicky The Rake', 'Pale Ale', 'Wylam', 4.0),
    ('Saison Provision 2023', 'Mixed Ferment Saison', 'Burning Sky', 7.0),
    ('Rivalita', 'Imperial Stout', 'Pollys', 9.0),
    ('Lambic Geuze', 'Lambic', '3 Fonteinen', 6.0),
    ('Wee Mcash', 'Bitter', 'Five Kingdoms', 4.5);`