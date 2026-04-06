#  Weather API Dashboard

##  Project Overview

This project is a simple web application that demonstrates the use of RESTful APIs using JavaScript Fetch API. It allows users to:

* Get real-time weather data
* Save locations
* Edit saved locations
* Delete saved locations

---

##  Features

###  GET Request

Fetches live weather data from OpenWeatherMap API.

###  POST Request

Saves a new location using JSONPlaceholder API.

###  PUT Request

Updates an existing saved location.

###  DELETE Request

Deletes a saved location.

---

##  Technologies Used

* HTML
* CSS
* JavaScript (Fetch API)
* OpenWeatherMap API
* JSONPlaceholder API

---

##  Project Structure

```
project-folder/
*  index.html   # User Interface
*  script.js    # Application Logic
```

---

##  Setup Instructions

1. Clone or download the project
2. Open `script.js`
3. Replace the API key:

```js
const WEATHER_API_KEY = 'YOUR_API_KEY';
```

4. Open `index.html` in a browser

---

##  How to Use

###  GET Weather

* Enter a city name
* Click **Get Weather**

###  POST Location

* Fill in location details
* Click **Save Location**

###  PUT (Edit)

* Click **Edit**
* Update details
* Click **Update**

###  DELETE

* Click **Delete** to remove location

##  Notes

* JSONPlaceholder API is used for testing (data is not permanently stored)
* Weather data is fetched in real-time

##  APIs Used

* https://openweathermap.org/
* https://jsonplaceholder.typicode.com/

##  GitHub Repository

https://github.com/kinley2007wangmo/WEB101_02250356.git

##  Conclusion

This project demonstrates basic CRUD operations using REST APIs and helps understand how frontend applications interact with external services.
