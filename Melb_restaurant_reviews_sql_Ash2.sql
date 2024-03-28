-- Drop table if exists
DROP TABLE Melb_restaurant_reviews;

--creating a table
CREATE TABLE Melb_restaurant_reviews (
	name VARCHAR(200),
	cusinetype VARCHAR(50),
	rankingPosition INT,
	priceLevel VARCHAR(15),
	category VARCHAR(30),
	rating FLOAT,
	address VARCHAR(500),
	numberOfReviews INT,
	latitude FLOAT,
	longitude FLOAT
	);
	
-- View table columns and datatypes
SELECT ALL * FROM Melb_restaurant_reviews;
