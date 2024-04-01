-- Drop table if exists
DROP TABLE restaurant_reviews;

--creating a table
CREATE TABLE restaurant_reviews (
	name VARCHAR(200),
	cuisinetype VARCHAR(50),
	rankingPosition INT,
	priceLevel VARCHAR(15),
	category VARCHAR(30),
	rating FLOAT,
	address TEXT PRIMARY KEY,
	numberOfReviews INT,
	latitude FLOAT,
	longitude FLOAT,
	postcode NUMERIC, 
	
	);
	
-- View table columns and datatypes
SELECT * FROM restaurant_reviews;


--Avg rating of each cusine and no.of restaurants in Melbourne
SELECT cuisinetype, ROUND(AVG(rating)::numeric,1) AS avg_rating, COUNT(*) AS num_restaurants
FROM restaurant_reviews
GROUP BY cuisinetype
ORDER BY avg_rating DESC, num_restaurants DESC;

--Average price Level of each cusine type
SELECT cuisinetype,
       CASE 
           WHEN AVG(CASE WHEN priceLevel = '$' THEN 1 ELSE 0 END) > 0.5 THEN '$'
           WHEN AVG(CASE WHEN priceLevel = '$$' THEN 1 ELSE 0 END) > 0.5 THEN '$$'
           WHEN AVG(CASE WHEN priceLevel = '$$ - $$$' THEN 1 ELSE 0 END) > 0.5 THEN '$$ - $$$'
           WHEN AVG(CASE WHEN priceLevel = '$$$$' THEN 1 ELSE 0 END) > 0.5 THEN '$$$$'
           ELSE MAX(priceLevel) --Using the max function when there isn't a clear majority of one particular price level for a cuisine type
		   END AS avg_price_level
FROM restaurant_reviews
GROUP BY cuisinetype;

--No.of restaurants in each price level
SELECT priceLevel, COUNT(*) AS num_restaurants
FROM restaurant_reviews
GROUP BY priceLevel
ORDER BY priceLevel;


--Top rated restaurants in Melbourne CBD
SELECT name, address, cuisinetype, rating, numberOfReviews
FROM restaurant_reviews
WHERE postcode = '3000'
ORDER BY rating DESC
LIMIT 10;


--Top 10 restaurants with highest no.of reviews and the highest rating
SELECT cuisinetype, name, address, MAX(numberOfReviews) AS max_reviews, MAX(avg_rating) AS max_avg_rating
FROM (
    SELECT cuisinetype, name, address, AVG(rating) AS avg_rating, MAX(numberOfReviews) AS numberOfReviews
    FROM restaurant_reviews
    GROUP BY cuisinetype, name, address
) AS subquery
GROUP BY cuisinetype, name, address
ORDER BY max_reviews DESC, max_avg_rating DESC
LIMIT 10;