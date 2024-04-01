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

#### 4.2 Cluster Map of Suburbs

- **Description:** Display which suburbs contain eateries using a cluster map. Colour coding will indicate popularity based on the number of reviews.
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

We made our visualisations using JavaScript, and have displayed 4 different widgets on a webpage for users to explore. These visualizations are not just about presenting data; they are carefully designed to provide insights such as:

-	The diversity of cuisine types across Melbourne, highlighting areas with a high concentration of particular cuisines.
-	Pricing levels of eateries, helping users find options that fit their budget.
-	Geographic distribution of restaurants, bars, and cafes, allowing users to discover popular spots in specific suburbs or neighbourhoods.
-	Popularity and quality indicators based on user reviews and ratings, guiding users towards highly recommended dining experiences.

We believe we have curated a user-friendly experience which will give curious Melbourne foodies great insights into where they should explore next.  

  
## Cleaning the data:
-	Getting the coordinates (Hazel/Ashrita)
-	Getting the postcode (Hazel)

We also decided to add the cusine type for each restaurant into our csv file, as we believed this would be interesting and relevant information to our webpage users. Our team split the data set into 4 and were each allocated a range of restaurants to investigate. We manually searched for the cusine type on Trip Advisor and added it to our data set. 
  
## Using SQL : (Ashrita)
-	Why was SQL used
-	Screenshots of queries

## Making the webpage: (Hazel)
-	How you did it
  
## Instructions on how to use the widgets:
**1. Street Map (Hazel)**
-	How you did it
-	How to use it
  
**2. Cluster Map (Hazel)**
- How you did it 
- How to use it

**3. Heat Map (Gilbert)**
- How you did it
- How to use it

## 3. Filtering Eateries by Price (Marianne)

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

When added to our main wepage and undergoing some CSS changes, the widget looks like this:

**(Add screenshot of the widget here)**

One change made when linking this widget to the main webpage was to only show the top 10 eateries. This gives uses a quick snapshot of the top rated restaurants in their price range. Userers can now select the price range that fits their budget and get a list of the top 10 Melbourne Eateries in that filter. 

**4. Gilbert’s visualisation**
- How you did it 
- How to use it 

## Ethical Considerations (Marianne)
In creating our project on Melbourne's dining scene, we focused on three main areas to ensure we were upholding high ethical standards, including when using data from TripAdvisor.

The first was adhering to data copyright laws. When using the TripAdvisor data, we ensured our use complied with their terms of service and copyright rules. This meant we could use the data about restaurants without breaking any rules and only used the information in ways which TripAdvisor allows. Secondly, we made sure we weren’t breaching the Privacy Act 1988, which exists to protect people’s personal information. As our data only captured public information about the restaurant, and not names or personal details of people who left reviews, we believe we were able to adhere to this standard. Lastly, we took into consideration if Trip Advisor uses a fair algorithm when generating the list of top restaurants, or if it’s computer program would produce any bias that would affect the results. As the data collected is directly from people who have visited and rated the restaurant, we believe that this wouldn’t be a concern in our data set. For example, we weren’t asking trip advisor to predict what restaurants are good, but simply look for restaurants that people have rated highly themselves.

By focusing on these points and ensuring our use of TripAdvisor data was responsible, respectful, fair, and within the law, we aimed to create a project that provides valuable insights into Melbourne's dining scene while adhering to ethical and legal standards.

## Reference to Data

This project utilises data from [Kaggle's Top 500 Melbourne Eateries: TripAdvisor's Best](https://www.kaggle.com/datasets/kanchana1990/top-500-melbourne-eateries-tripadvisors-best).

## Reference to Code

