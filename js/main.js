// Fetching JSON Format file
fetch("/json/myntra_api.json")

    // If fetched file Successfully, parsing in JSON format in console
    .then((response) => response.json())

    // Selecting "products" object from JSON File
    .then((data) => data.products)

    // Assigning Variables to fetch different data from object "products"
    .then((data) => {
        idCheckGender(data);
        idCheckCategories(data);
        idCheckBrand(data);
        idDisplayCard(data);

        // This is Filtered Function
        selectData(data);
    })

    // If there will any error will catch function will work and we can see error in console
    .catch((error) => {
        console.log(`Error: ${error}`);
    })


// idCheckGender is used to show Gender, it will fetch unique values from "products" object value under array[] of "gender"

idCheckGender = (data) => {

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
        <input type="radio" id="radioButton-${element}" value="${element}" name="genderFilter" class="custom-control-input" onclick="genderFilterFunction()">
        <label class="custom-control-label" for="radioButton-${element}">${element}</label>
    </div>`;

    };

    // Calling DOM through ID and inserting values
    document.getElementById("checkGender").innerHTML = htmlContent;

};


// idCheckCategories is used to show categories, it will fetch unique values from "products" object value under array[] of "category"

idCheckCategories = (data) => {

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
        <input class="form-check-input" type="checkbox" value="${element}" id="checkboxInput-${element}" name="categoryFilter" onclick="categoriesFilterFunction()">
        <label class="form-check-label" for="checkboxInput-${element}">${element}</label>
    </div>`;

    };
    // Calling DOM through ID and inserting values
    document.getElementById("checkCategories").innerHTML = htmlContent;

};

// idCheckBrand is used to show brands, it will fetch unique values from "products" object value under array[] of "brand"

idCheckBrand = (data) => {

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
            <input class="form-check-input" type="checkbox" value="${element}" id="checkboxInput-${element}" name="brandFilter" onclick="brandsFilterFunction()">
            <label class="form-check-label" for="checkboxInput-${element}">${element}</label>
        </div>`;

    };
    // Calling DOM through ID and inserting values   
    document.getElementById("checkBrand").innerHTML = htmlContent;

};

// idDisplayCard is used to show cards, it will fetch values for each product and show it in same card, from "products" object value under array[]such as "landingPageUrl" "brand" and more..

idDisplayCard = (data) => {

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
    document.getElementById("displayCard").innerHTML = htmlContent;

};

// Applying Filters

// Assigning a Variable into array to insert filtered data

var filteredData = [];

// Fetching Filtered Data

const selectData = (data) => {
    filteredData = data;
};


// Gender Radio Function

function genderFilterFunction() {
    
    // Storing value in "genderValue" variable with help of name attribute 
    var genderValue = document.querySelector('input[name="genderFilter"]:checked').value;
    
    // Filtering the selected data  and display accordingly
    var data = filteredData.filter(
        (genderValueFiltered) => genderValueFiltered.gender === genderValue);
    idDisplayCard(data);
};


// Categories CheckBox Function

function categoriesFilterFunction() {

    // Storing value in "categoryValue" variable with help of name attribute
    var categoryValue = document.querySelectorAll('input[name="categoryFilter"]:checked');
    
    // For multiple checks box creating an array named "categoryArray"
    var categoryArray = [];

    // Checking each check box wether checked or non checked with help of Ternary operator 
    categoryValue.forEach(catElement => { catElement.checked ? categoryArray.push(catElement.value) : null; });

    // New variable for multiple Checked-BOX 
    var categoryArrayResult = [];

    // Fetching Filtered Category data
    categoryArray.forEach(value => {
        categoryArrayResult = categoryArrayResult.concat(filteredData.filter((checkBoxData) => checkBoxData.category.includes(value)))
    });

    // Setting condition whether if check box are checked or not with hep of Ternary operator
    categoryArrayResult.length !== 0 ? idDisplayCard(categoryArrayResult) : idDisplayCard(filteredData);
};

// Brand CheckBox Function

function brandsFilterFunction() {

    // Storing value in "brandValue" variable with help of name attribute
    var brandValue = document.querySelectorAll('input[name="brandFilter"]:checked');

    // For multiple checks box creating an array named "brandArray"
    var brandArray = [];

    // Checking each check box wether checked or non checked with help of Ternary operator
    brandValue.forEach(brnElement => { brnElement.checked ? brandArray.push(brnElement.value) : null; });

    // New variable for multiple Checked-BOX 
    var brandArrayResult = [];

    // Fetching Filtered Brand data
    brandArray.forEach(value => {
        brandArrayResult = brandArrayResult.concat(filteredData.filter((checkBoxData) => checkBoxData.brand.includes(value)))
    });

    // Setting condition whether if check box are checked or not with hep of Ternary operator
    brandArrayResult.length !== 0 ? idDisplayCard(brandArrayResult) : idDisplayCard(filteredData);
};

// Search Function

function navSearchFunction() {

    // Storing value in "searchKeyword" variable with help of name attribute
    var searchKeyword = document.getElementById("navSearch").value.toUpperCase();

    // Fetching Result and Display Data accordingly
    var searchResult = filteredData.filter((searchItem) => searchItem.product.toUpperCase().includes(searchKeyword));

    idDisplayCard(searchResult);
};
