// Fetching JSON Format file
fetch("https://run.mocky.io/v3/bf175661-5e9f-4112-8580-d587759ff72e")

    // If fetched file Successfully, parsing in JSON format in console
    .then((response) => response.json())

    // Selecting "products" object from JSON File
    .then((data) => data.products)

    // Assigning Variables to fetch different data from object "products"
    .then((data) => {
        id_check_Gender(data);
        id_check_Categories(data);
        id_check_Brand(data);
        id_Display_card(data);

        select_Data(data);
    })

    // If there will any error will catch function will work and we can see error in console
    .catch((error) => {
        console.log(`Error: ${error}`);
    })


// id_check_Gender is used to show Gender, it will fetch unique values from "products" object value under array[] of "gender"

id_check_Gender = (data) => {

    // Initiating an array to store data from an array "gender" 
    var genderArray = [];

    // fetching all data from "gender" array with help of forEach Loop, here using push function to add values (in last) in string and storing in genderArray 
    data.forEach(element => {

        genderArray.push(element["gender"]);

    });

    // Value in an Array
    // console.log(genderArray);

    // getting unique values with set function and in set function var genderArray convert into object, we can see through in console
    var genderArray = new Set(genderArray);
    // console.log(genderArray);

    // Assigning variable 
    let htmlContent = `<div class="my-2">FILTERS</div>`;

    // For of is used for to fetch data from Objects and genderArray is an object
    for (const element of genderArray) {
        htmlContent += `<div class="custom-control custom-radio">
        <input type="radio" id="Radio_button-${element}" value="${element}" name="genderFilter" class="custom-control-input">
        <label class="custom-control-label" for="Radio_button-${element}">${element}</label>
    </div>`;

    };

    // Calling DOM through ID and inserting values
    document.getElementById("check_Gender").innerHTML = htmlContent;

};


// id_check_Categories is used to show categories, it will fetch unique values from "products" object value under array[] of "category"

id_check_Categories = (data) => {

    // Initiating an array to store data from an array "category"
    var categoryArray = [];

    // fetching all data from "category" array with help of forEach Loop, here using push function to add values (in last) in string and storing in categoryArray 
    data.forEach(element => {

        categoryArray.push(element["category"]);

    });

    // Value in an Array
    // console.log(categoryArray);

    // getting unique values with set function and in set function var categoryArray convert into object, we can see through in console
    var categoryArray = new Set(categoryArray);

    // Assigning variable 
    let htmlContent = `<div class="my-2">CATEGORIES</div>`;

    // For of is used for to fetch data from Objects and genderArray is an object
    for (const element of categoryArray) {
        htmlContent += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${element}" id="checkbox-input-${element}" name="categoryFilter">
        <label class="form-check-label" for="checkbox-input-${element}">${element}</label>
    </div>`;

    };
    // Calling DOM through ID and inserting values
    document.getElementById("check_Categories").innerHTML = htmlContent;

};

// id_check_Brand is used to show brands, it will fetch unique values from "products" object value under array[] of "brand"

id_check_Brand = (data) => {

    // Initiating an array to store data from an array "brand"
    var brandArray = [];

    // fetching all data from "brand" array with help of forEach Loop, here using push function to add values (in last) in string and storing in brandArray 
    data.forEach(element => {

        brandArray.push(element["brand"]);

    });

    // Value in an Array
    // console.log(brandArray);

    // getting unique values with set function and in set function var brandArray convert into object, we can see through in console
    var brandArray = new Set(brandArray);

    // Assigning variable 
    let htmlContent = `<div class="my-2">BRAND</div>`;

    // For of is used for to fetch data from Objects and genderArray is an object
    for (const element of brandArray) {
        htmlContent += `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="${element}" id="checkbox-input-${element}">
            <label class="form-check-label" for="checkbox-input-${element}">${element}</label>
        </div>`;

    };
    // Calling DOM through ID and inserting values   
    document.getElementById("check_Brand").innerHTML = htmlContent;

};

// id_Display_card is used to show cards, it will fetch values for each product and show it in same card, from "products" object value under array[]such as "landingPageUrl" "brand" and more..

id_Display_card = (data) => {

    // Assigning variable
    let htmlContent = ''

    // ForEach loop is used to fetch data from object "products"
    data.forEach(element => {
         
        htmlContent += `
            <div class="col-md-3 my-1">
        <div class="card border-0 shadow-sm p-3 mb-5 bg-white rounded px-0 py-0" style="width: 17.5rem;"><a href="https://www.myntra.com/${element.landingPageUrl}" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
            <img src="${element.searchImage}" class="card-img-top" alt="..." style="width:245; height:326;">
            <div class="card-body text-wrap" style="height: 130px;">
                <h5 class="card-title">${element.brand}</h5>
                <h6 class="ard-subtitle mb-2 text-muted">${element.productName}</h6>
                <p class="card-text">Rs. ${element.price} <s style="color:#FFD39F">Rs. ${element.mrp}</s>
                    ${element.discountDisplayLabel} </p>
                    </div>
                    </div>
                    </div></a>`
    });
    
    // Calling DOM through ID and inserting values
    document.getElementById("display_card").innerHTML = htmlContent;

};


