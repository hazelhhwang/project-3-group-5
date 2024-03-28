-- Drop table if exists
DROP TABLE restaurant_reviews;

--creating a table
CREATE TABLE restaurant_reviews (
	name VARCHAR(200),
	cusinetype VARCHAR(50),
	rankingPosition INT,
	priceLevel VARCHAR(15),
	category VARCHAR(30),
	rating FLOAT,
	address TEXT,
	numberOfReviews INT,
	latitude FLOAT,
	longitude FLOAT,
	postcode NUMERIC
	);
	
-- View table columns and datatypes
SELECT * FROM restaurant_reviews;

--Top 3 restaurants based on their ranking position
SELECT name, rankingPosition, address, numberOfReviews
FROM restaurant_reviews
WHERE rankingPosition IN (1, 2, 3)
ORDER BY numberOfReviews DESC;

--Avg rating of each cusine and no.of restaurants in Melbourne
SELECT cusinetype, ROUND(AVG(rating)::numeric,1) AS avg_rating, COUNT(*) AS num_restaurants
FROM restaurant_reviews
GROUP BY cusinetype
ORDER BY avg_rating DESC, num_restaurants DESC;


--Top rated restaurants in Melbourne CBD
SELECT name, cusinetype, rating, numberOfReviews
FROM restaurant_reviews
WHERE postcode = '3000'
ORDER BY rating DESC
LIMIT 10;


--Top 10 restaurants with highest no.of reviews and the highest rating
SELECT cusinetype, name, address, MAX(numberOfReviews) AS max_reviews, MAX(avg_rating) AS max_avg_rating
FROM (
    SELECT cusinetype, name, address, AVG(rating) AS avg_rating, MAX(numberOfReviews) AS numberOfReviews
    FROM restaurant_reviews
    GROUP BY cusinetype, name, address
) AS subquery
GROUP BY cusinetype, name, address
ORDER BY max_reviews DESC, max_avg_rating DESC
LIMIT 10;
