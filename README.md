# Project 3: Data Visualisation

## Team Members

- Ashrita
- Gilbert
- Hazel
- Marianne

## Objective

To tell a compelling story of Melbourne's dining scene using data visualisations that reveal insights into cuisine types, pricing levels, and the geographic distribution of eateries based on their popularity (customer reviews).

## Tasks

### 1. Data Enrichment - Adding 'Cuisine Type' (Due: Sun, 24/03/2024)

- **Assignment:** Each team member is responsible for enriching a segment of the dataset with 'Cuisine Type' information sourced from Google.
- Sort by name: A to Z
  - **Row 2-126:** Gilbert
  - **Row 126-376:** Hazel
  - **Row 376-501:** Marianne

### 2. Data Cleansing & Database (Due: Sun, 24/03/2024)

- **Objective:** Cleanse the dataset by splitting the 'Address' column into 'Street Address', 'Suburb', and 'Postcode'.
- **Assignee:** Ashrita

### 3. Web Interface Development (Due: Thu, 28/03/2024)

- **Task:** Create a main page that links to all visualisations and analyses.
- **Assignee:** Hazel

### 4. Visualisations (Due: Thu, 28/03/2024)

#### 4.1 Street Map with Dropdown Filters

- **Description:** Visualise eateries on a street map, incorporating dropdown menus for filtering by 'Cuisine Type'.
- **Assignee:** Gilbert

#### 4.2 Heat Map of Suburbs

- **Description:** Display which suburbs contain eateries using a heat map. Colour coding will indicate popularity based on the number of reviews.
- **Assignee:** Gilbert

#### 4.3 Restaurant Listing with Filter Functions

- **Description:** List restaurants with details including Name, Address, Cuisine Type, and Price Level, ordered by popularity. Include filter functions for 'Price Level'.
- **Assignee:** Marianne

### 5. Integration and Presentation (Due: Mon, 01/04/2024)

- **Task:** Merge all individual work into a cohesive project and prepare PowerPoint slides for presentation.
- **Assignee:** Hazel & Marianne

## Reference

This project utilises data from [Kaggle's Top 500 Melbourne Eateries: TripAdvisor's Best](https://www.kaggle.com/datasets/kanchana1990/top-500-melbourne-eateries-tripadvisors-best).

## Overview: (Marianne)

Melbourne is famous for its food culture. People travel to Melbourne just to experience all the amazing restaurants, bars, and cafes it has on offer. With such an abundance of choices, deciding where to dine can often feel overwhelming. To address this, our team has developed a user-friendly webpage designed to simplify these decisions for both locals and tourists alike.

We did this by utilising Trip Adviser data from Kaggle with information about the “Top 500 Melbourne Eateries”. This data set had information about name, price, address, number of reviews, and rating. 

We made our visualisations using JavaScript, and have displayed 4 different widgets on a webpage for users to explore. These visualisations are not just about presenting data; they are carefully designed to provide insights such as:

-	The diversity of cuisine types across Melbourne, highlighting areas with a high concentration of particular cuisines.
-	Pricing levels of eateries, helping users find options that fit their budget.
-	Geographic distribution of restaurants, bars, and cafes, allowing users to discover popular spots in specific suburbs or neighbourhoods.
-	Popularity and quality indicators based on user reviews and ratings, guiding users towards highly recommended dining experiences.

We believe we have curated a user-friendly experience which will give curious Melbourne foodies great insights into where they should explore next.  

  
## Cleaning the data:
-	Getting the coordinates (Hazel/Ashrita)
-	Getting the postcode (Hazel)

Initially, we utilised Geoapify to obtain latitude and longitude data. Even though we were able to get the required data, as our project progressed, we realised that Geoapify's accuracy did not meet our requirements for creating data visualisations. Consequently, we transitioned to the Google API to generate the visualisations.

We also decided to add the cuisine type for each restaurant into our CSV file, as we believed this would be interesting and relevant information to our webpage users. Our team split the data set into 4 and were each allocated a range of restaurants to investigate. We manually searched for the cuisine type on Trip Advisor and added it to our data set. 
  
## Using Database(PostgreSQL) - Ashrita

**Why PostgreSQL?**

The data utilised in this project is organised in a structured format, with all information contained within a single table and the relational structure is straightforward. Also, there is no need for extensive Create, Read, Update, Delete (CRUD) operations in the later stages of the project. Therefore, we chose PostgreSQL.

**Actions performed in PostgreSQL**
  
Initially, created a database called *Melb_restaurant_reviews* and then a table called *restaurant_reviews* using CREATE TABLE function.
We have then imported the csv file into the table. All SQL queries can be found in the restaurant_reviews_updated.sql file, structured to retrieve the following information:

1. Average rating of each cuisine type and number of restaurants for each cuisine in Melbourne
   
<img width="724" alt="cuisinetype_avgrating_no of_rest" src="https://github.com/hazelhhwang/project-3-group-5/assets/147963279/9c520ec3-b3c0-4391-bcb9-0c12b0526c63">

2. Average price level of each cuisine type

<img width="728" alt="cuisinetype_Avg_price" src="https://github.com/hazelhhwang/project-3-group-5/assets/147963279/9f4a29f7-74a9-4d94-a2fe-971a384bad2f">


3. Number of restaurants in each price level

<img width="165" alt="PriceLevel-no of restaurants" src="https://github.com/hazelhhwang/project-3-group-5/assets/147963279/246c814e-7832-4c89-af6d-33b4fcce63f8">

4. Top-rated restaurants in Melbourne CBD

<img width="626" alt="top_rated_rest_cbd" src="https://github.com/hazelhhwang/project-3-group-5/assets/147963279/2d629bb3-dfeb-4091-bd31-d16be2103cfb">

5. Top 10 restaurants with the highest number of reviews and the highest rating

<img width="518" alt="Top_10_rest_max_reviews_max_rating" src="https://github.com/hazelhhwang/project-3-group-5/assets/147963279/4fe73aa7-aab1-43f5-91c8-d6e20651ca1b">

## Data Analysis - Observations and Limitations (Ashrita)

**Observations**
- With the highest number of reviews, it can be concluded that Thai cuisine is the most popular cuisine in Melbourne with 6029 reviews.
- Italian cuisine leads in terms of the number of restaurants in Melbourne, boasting an average rating of 4.3.
- An examination of the price levels reveals that 55 restaurants fall into the lowest price bracket, indicating affordability, while 382 establishments are situated in the mid-range, offering a balance between budget-friendliness and luxury. Additionally, 58 restaurants are classified as expensive.
- An analysis of the top-rated restaurants in Melbourne's CBD shows that 50% of them are Italian, all earning a perfect rating of 5.
- Among the top 10 restaurants in Melbourne with the highest number of reviews and the highest rating, Thai cuisine represents 30% of the establishments.

**Limitations**
- The data spans from 02/04/2004 to 16/01/2024, and its accuracy may vary due to potential changes in restaurant statuses, such as closures or openings, occurring after the   data collection period.
-	The dataset provides restaurant information at a particular point in time and may not reflect changes in ratings, reviews, or restaurant offerings over time.
-	Ratings are subjective and can be influenced by various factors such as individual preferences, biases, and experiences, which may not accurately reflect the quality of a   restaurant.
-	The cuisine types were added manually to the CSV file by referencing TripAdvisor, indicating the possibility of variations from other websites.

## Creating the webpage: (Hazel)

This provides a step-by-step guide on how the `index.html` file for Project 3: Data Visualisation of Melbourne's Dining Scene was created.

### Steps to Create `index.html`:

1. **HTML Skeleton**:
   - Created an HTML file named `index.html`.
   - Added the basic structure of an HTML document using `<!DOCTYPE html>` and `<html>`, `<head>`, and `<body>` tags.

2. **Document Metadata**:
   - Set the document's character encoding to UTF-8 using `<meta charset="UTF-8">`.
   - Added a title for the webpage using `<title>Project 3: Data Visualisation of Melbourne's Dining Scene</title>`.

3. **External Resources**:
   - Linked the Leaflet CSS file from a CDN using `<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">`.
   - Linked Google Fonts for custom typography:
     ```html
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
     ```

4. **Custom CSS**:
   - Included an external CSS file for custom styles: `<link rel="stylesheet" href="static/css/style.css">`.
   - Applied inline CSS for specific styling requirements within the `<style>` tags.

5. **Page Content**:
   - Added a main title using `<h1 class="main-title">EXPLORE MELBOURNE'S DINING SCENE</h1>`.
   - Created sections for different visualisations and content, each with a title using `<h2 class="section-title">`.
   - Included container divs (`<div class="container">`) to structure the content within each section.

6. **Dropdown Menus**:
   - Added dropdown menus for filtering by cuisine type and price level using `<select>` elements with respective IDs.
   - Included default options and placeholders within the dropdown menus.

7. **Map Containers**:
   - Created div elements (`<div id="streetMap" class="visualisation">` and `<div id="clusterMap" class="visualisation">`) to serve as containers for the street map and cluster map visualisations, respectively.
   - Included placeholders for map visualisations.

8. **Restaurant List**:
   - Added a section for displaying the top 10 restaurants by price level using `<div id="restaurantsContainer" class="visualisation">`.
   - Included a dropdown menu for filtering by price level within this section.

9. **JavaScript Dependencies**:
   - Linked the Leaflet.js library from a CDN using `<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>`.
   - Included custom JavaScript files for map rendering and data manipulation:
     ```html
     <script src="static/js/street-map.js"></script>
     <script src="static/js/heat-map.js"></script>
     <script src="static/js/script.js"></script>
     ```

The `index.html` file serves as the main entry point for the project, providing the structure and layout for visualising Melbourne's dining scene. It incorporates HTML markup, external resources, custom CSS styles, and JavaScript dependencies to create an interactive and engaging web experience for users.

  
# Instructions on how to use the widgets:
## 1. Street Map (Hazel)

This outlines the process of creating the `street-map.js` file.

### Steps to Create `street-map.js`:

1. **Event Listener for DOM Content Loaded**:
   - Added an event listener to wait for the DOM content to be fully loaded before executing the script using `document.addEventListener('DOMContentLoaded', function() {...});`.

2. **Leaflet Map Initialisation**:
   - Initialised a Leaflet map instance with the ID 'streetMap' and set the initial view coordinates to Melbourne's latitude and longitude using `L.map('streetMap').setView([-37.8136, 144.9631], 13);`.
   - Added a tile layer from OpenStreetMap as the base layer using `L.tileLayer(...).addTo(streetMap);`.

3. **Fetching JSON Data**:
   - Defined a function `fetchJSONData(filePath)` to fetch JSON data from the specified file path asynchronously using the Fetch API.
   - Parsed the response as JSON and passed it to `processJSONData(data)` for further processing.

4. **Processing JSON Data**:
   - Implemented the `processJSONData(data)` function to iterate over the JSON data.
   - Created markers for each restaurant location on the map using `L.marker([...])`.
   - Bound popup content to each marker displaying restaurant details such as name, cuisine, price level, and address.
   - Grouped markers by cuisine type and stored them in the `markers` object.

5. **Dropdown Population**:
   - Implemented the `populateCuisineDropdown()` function to populate the cuisine type dropdown menu (`<select>`) based on the available cuisine types extracted from the `markers` object.
   - Sorted the cuisine types alphabetically before populating the dropdown.

6. **Marker Filtering**:
   - Created the `filterMarkers(cuisine)` function to filter markers based on the selected cuisine type.
   - Removed all markers from the map and re-added only the markers corresponding to the selected cuisine type.
   - Implemented event listener for the cuisine type dropdown to trigger marker filtering.

7. **Initialisation**:
   - Invoked the `fetchJSONData('static/data/data_with_coordinates.json')` function to fetch and process the JSON data upon DOM content loading.


### Interacting with the `street-map.js` Widget:

Users can interact with the Street Map widget in the following ways:
   - **Cuisine Filtering**: Utilise the dropdown menu labeled 'Filter by Cuisine Type' to select a specific cuisine type. This action filters the displayed markers on the map to show only restaurants offering the selected cuisine.
   - **Viewing Restaurant Details**: Click on any marker on the map to view detailed information about the corresponding restaurant, including its name, cuisine type, price level, and address.

  
## 2. Cluster Map (Hazel)

This outlines the process of creating the `cluster-map.js` file.

### Steps to Create `cluster-map.js`:

1. **Event Listener for DOM Content Loaded**:
   - Added an event listener to wait for the DOM content to be fully loaded before executing the script using `document.addEventListener('DOMContentLoaded', function() {...});`.

2. **Leaflet Map Initialisation**:
   - Initialised a Leaflet map instance with the ID 'clusterMap' and set the initial view coordinates to Melbourne's latitude and longitude using `L.map('clusterMap').setView([-37.8136, 144.9631], 13);`.
   - Added a tile layer from OpenStreetMap as the base layer using `L.tileLayer(...).addTo(clusterMap)`.

3. **Definition of Legend Colours**:
   - Defined a colour scheme for the legend by specifying ranges of the number of reviews and their corresponding colours in the `legendColors` object.

4. **Fetching and Parsing JSON Data**:
   - Utilised the Fetch API to fetch JSON data from the specified file path ('static/data/data_with_coordinates.json').
   - Parsed the fetched JSON data using the `.json()` method.

5. **Processing JSON Data and Creating Markers**:
   - Upon successful retrieval of JSON data, iterated over the restaurant data using the `forEach` method.
   - Extracted relevant information such as restaurant name, cuisine type, number of reviews, latitude, and longitude.
   - Based on the number of reviews, determined the fillColor for each marker according to the predefined legendColors.
   - Created circular markers for each restaurant using `L.circleMarker([latitude, longitude], markerStyle)`, where `markerStyle` includes properties such as radius, fillColor, color, etc.
   - Bound popup content to each marker displaying restaurant details like name, cuisine type, and number of reviews.
   
6. **Populating Legend and Adding Legend Control**:
   - Populated the legendRanges and legendColorsArr arrays with ranges and corresponding colours extracted from the legendColors object.
   - Added a legend to the map's bottom-right corner using `L.control({position: 'bottomright'})`.
   - Defined the legend's content dynamically based on the legendRanges and legendColorsArr arrays.
   - Added the legend to the clusterMap using the `addTo(clusterMap)` method.

7. **Function for Updating Legend**:
   - Implemented a function `updateLegend()` to dynamically update the legend content.
   - Cleared existing legend content and repopulated it with updated values.
   
8. **Error Handling**:
   - Implemented error handling to catch and log any errors that occur during the process of fetching and processing JSON data.


### Interacting with the `cluster-map.js` Widget:

Users can interact with the Cluster Map widget in the following ways:
   - **Viewing Marker Information**: Click on any marker on the map to view detailed information about the corresponding restaurant, including its name, cuisine type, and number of reviews.
   - **Legend**: The legend displayed at the bottom right corner of the map provides information about the colour codes representing different ranges of the number of reviews. Users can refer to this legend to understand the significance of each colour on the map.



## 3. Maps and Charts (Gilbert) 
**Maps were produced using libraries that were not covered in the class, namely, Folium and Geoplotlib. Meanwhile, the charts were done through Matplotlib, Seaborn, Pair Plot, and Pyplot.**

- The Dot Map was coded in Jupyter Notebook utilising a GeoJSON file and Geoplotlib to plot a Dot Map, a crude presentation of every point of each restaurant in the greater Melbourne area. This elementary visualisation provides an immediate idea of the relative or absolute location of the eateries. It identifies the zones with lower or higher density and gives a "bird's eye view" of the points in considertion. However, when using longitude and latitude it is necessary to use 'lon' and 'lat' instead. Using Geoplotlib was also as straight forward as reading the file and then plotting the map.
  
 ![Screenshot 2024-04-03 at 4 10 13 pm](https://github.com/hazelhhwang/project-3-group-5/assets/152139070/9676f88e-2dc4-4c4c-875a-afe4fcc7a592)


- Likewise, the Heat Map was done using Jupyter Notebook and Folium which is a Pyhton wrapper for Leaflet.js. which is simple to use for creating maps making it behave in many ways as Leaflet would. Tile layers were also incorporated in the map.
- Another map showed the Ranking Position of each eatery relative to where it is located in Melbourne. Most of the high ranking ones are located the outskirts of the CBD while the lower ranking ones tend to congregate in the city proper.
- Links where placed in the webpage to access the Heat Map and Ranking Position Map as these were coded in Jupyter Notebook and HTML.

**Step 1: Importing Dependencies**
  
 ![foliom import](https://github.com/hazelhhwang/project-3-group-5/assets/152139070/ac8a93f2-4b6c-4659-a4e6-f9a038d85093)

**Step 2: Reading the CSV file**
 
![Screenshot 2024-04-03 at 4 35 02 pm](https://github.com/hazelhhwang/project-3-group-5/assets/152139070/543ddf73-0923-409c-92ac-ab04f8df7b2d)

**Step 3: Creating the map, converting data, and create heat map layer** 

![Screenshot 2024-04-03 at 4 36 42 pm](https://github.com/hazelhhwang/project-3-group-5/assets/152139070/56b321f2-e067-4364-b52f-8a0f8f59cfca)

- Options for other tile layers were placed.
   
![TileLayers](https://github.com/hazelhhwang/project-3-group-5/assets/152139070/99296cdb-5a97-47e6-8f7e-747d1835ad4c)

**Step 4: Plotting the map and saving the file**

![Screenshot 2024-04-03 at 4 40 17 pm](https://github.com/hazelhhwang/project-3-group-5/assets/152139070/1b21ee6d-97c5-4ceb-917e-b5525334c242)



**The bar charts were done using Matplotlib with Seaborn, Pyplot, and Pair Plot APIs. The date were extracted from the CSVs gathered from PostgreSQL results. The codes were pretty standard and import of dependencies, reading the CSV files, and writing the simple codes were basically the steps necessary to come up with the charts.** 


![Screenshot 2024-04-03 at 4 00 43 pm](https://github.com/hazelhhwang/project-3-group-5/assets/152139070/8c8ce624-9f03-4f70-b8a3-5eff79bf4d38)

## 4. Filtering Eateries by Price (Marianne)

To enhance user interaction with Melbourne's top 500 eateries, we implemented a price filter widget, allowing users to explore restaurants based on their price level. This widget was developed using JavaScript and integrated with a JSON dataset, which was converted from the original CSV file. The JavaScript fetch API was utilized to asynchronously retrieve the dataset, ensuring the page remains responsive while loading the data.

**Step 1: Fetching and Processing Data**

The initial step involves fetching the restaurant data from a JSON file using the Fetch API. Upon successful retrieval, the data is processed to populate the price filter dropdown and display the restaurant listings.

<img width="538" alt="image" src="https://github.com/hazelhhwang/project-3-group-5/assets/150411822/b7ab3b6f-8fe8-4da1-97ba-931aef2c6b63">


This block waits for the document content to fully load and then attempts to fetch the restaurant data. Once the data is fetched and converted to JSON format, two functions are called: one to populate the price level dropdown and another to initially display all restaurants.

**Step 2: Populating the Dropdown**

The populatePriceLevelDropdown function is responsible for creating unique dropdown options based on the priceLevel properties found in the dataset. It employs a custom sort order to ensure the price levels are displayed logically from lowest to highest.

<img width="438" alt="image" src="https://github.com/hazelhhwang/project-3-group-5/assets/150411822/b6b31ede-8560-49a0-abb0-da3e64e7d8eb">


This function first creates a unique set of price levels, sorts them according to a predefined order, and then dynamically adds these options to the dropdown menu in the HTML document.

**Step 3: Displaying Restaurants**

The displayRestaurants function shows restaurants on the page, filtering them based on the selected price level if any. It starts by filtering the dataset to match the selected price level, sorts the filtered results by the number of reviews (indicating popularity), and then dynamically creates HTML elements to display the filtered restaurant data.

<img width="508" alt="image" src="https://github.com/hazelhhwang/project-3-group-5/assets/150411822/823d8531-16b9-4453-aee2-c2b348396077">


**Step 4: Handling User Input**

Lastly, an event listener is added to the dropdown menu to respond to user selections. When a new price level is selected, it fetches the data again (though, ideally, it should use the already loaded data to avoid unnecessary network requests) and displays the restaurants according to the selected price level.

<img width="620" alt="image" src="https://github.com/hazelhhwang/project-3-group-5/assets/150411822/3bfd725e-0417-4cd3-a48d-d481fd787015">

One change made when linking this widget to the main webpage was to only show the top 10 eateries. This gives uses a quick snapshot of the top rated restaurants in their price range. Userers can now select the price range that fits their budget and get a list of the top 10 Melbourne Eateries in that filter. 


## Ethical Considerations (Marianne)
In creating our project on Melbourne's dining scene, we focused on three main areas to ensure we were upholding high ethical standards, including when using data from TripAdvisor.

The first was adhering to data copyright laws. When using the TripAdvisor data, we ensured our use complied with their terms of service and copyright rules. This meant we could use the data about restaurants without breaking any rules and only used the information in ways which TripAdvisor allows. Secondly, we made sure we weren’t breaching the Privacy Act 1988, which exists to protect people’s personal information. As our data only captured public information about the restaurant, and not names or personal details of people who left reviews, we believe we were able to adhere to this standard. Lastly, we took into consideration if Trip Advisor uses a fair algorithm when generating the list of top restaurants, or if it’s computer program would produce any bias that would affect the results. As the data collected is directly from people who have visited and rated the restaurant, we believe that this wouldn’t be a concern in our data set. For example, we weren’t asking trip advisor to predict what restaurants are good, but simply look for restaurants that people have rated highly themselves.

By focusing on these points and ensuring our use of TripAdvisor data was responsible, respectful, fair, and within the law, we aimed to create a project that provides valuable insights into Melbourne's dining scene while adhering to ethical and legal standards.

## Reference to Data

This project utilises data from [Kaggle's Top 500 Melbourne Eateries: TripAdvisor's Best](https://www.kaggle.com/datasets/kanchana1990/top-500-melbourne-eateries-tripadvisors-best).

## Reference to Code
- Bootstrap (HTML, CSS, and JavaScript framework for developing responsive and mobile-first websites)
- Chat GPT
- DOM Manipulation (The process of dynamically interacting with the Document Object Model (DOM) to update and modify webpage content)
- Event Listeners (Components responsible for detecting and responding to user actions or changes in the DOM, enabling interactive functionality on webpages)
- Fetch API (Web API for making asynchronous HTTP requests)
- Geoapify (for coordinates)
- Google API (for coordinates)
- Google Fonts (External fonts: Rubik Doodle Shadow & Rubik)
- JavaScript (Programming language used for DOM manipulation, event handling, and data processing)
- jQuery (JavaScript library for simplifying HTML DOM tree traversal and manipulation)
- Leaflet.awesome-markers (Leaflet plugin for adding colorful iconic markers)
- Leaflet.css (Cascading Style Sheet (CSS) specically designed for the Leaflet JavaScript library)
- Leaflet.heat (Leaflet plugin for adding heatmaps)
- Leaflet.js (JavaScript library for interactive maps)
