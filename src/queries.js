// select all columns from beers table, join to category table, where id = ?
`SELECT beers.id, beers.beer_name, beers.style, beers.brewery, beers.abv, beers.review, category_table.category AS category
FROM beers 
JOIN category_table ON beers.category_id = category_table.id
WHERE beers.id = 3;`

// add new beer post and return the id
`INSERT INTO beers (beer_name, category_id, style, brewery, abv, review) VALUES (${beer_name}, ${categoryId}, ${style}, ${brewery}, ${abv}, ${review})
RETURNING id;`

//Select all comments with respective beer id
`SELECT comments.id, comments.username, comments.comment, comments.created, beers_comments_junction.beers_id
FROM comments
JOIN beers_comments_junction ON comments.id = beers_comments_junction.comments_id`

// Select all comments for specific beer id
`SELECT comments.id, comments.username, comments.comment, comments.created, beers_comments_junction.beers_id
FROM comments
JOIN beers_comments_junction ON comments.id = beers_comments_junction.comments_id
WHERE beers_comments_junction.beers_id = ${id}`