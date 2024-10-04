let sandwiches = [
    {
        name: "Classic Club burger",
        price: 4.99,
        details: "Layers of turkey, ham, crispy bacon, lettuce, tomato, and mayonnaise on toasted multigrain bread. Served with a side of chips.",
        imageSrc: "images (6).jpg"
    },
    {
        name: " Cripsy plate ",
        price: 9.99,
        details:"Enjoy the irresistible crunch of a crispy plate! Each bite delights with satisfying textures and flavors, making every meal a celebration!",
        imageSrc: "delicious-crispy-fried-chicken-drumsticks-with-biscuits-gravy-white-plate-elegant-table_996993-11152.avif"
    }
    ,
    {
        name: "crispy mozzeralla",
        price: 5.99,
        details: "Savor the bliss of crispy mozzarella! Each golden bite offers a crunchy exterior and gooey, melty goodness inside—a delicious treat you won’t be able to resist!",
        imageSrc: "crispy-breaded-chicken-burger-mozzarella-600w-1418912660.webp"
    }

];
let drinks = [
    {
        name: "Zesty Cooler",
        price: 1.5,
        details: "A refreshing blend of freshly squeezed lemons and sparkling water, perfectly sweetened and garnished with a lemon slice and mint—your ideal thirst-quencher!",
        imageSrc: "strawberry-and-orange-spritz-13943-1.jpg"
    },
    {
        name: "Fruit Fiesta",
        price: 2.00,
        details: "A vibrant blend of zesty oranges, sweet strawberries, and tangy pineapples, bursting with tropical goodness—perfect for brightening any day!",
        imageSrc: "images.jpg"
    },
    {
        name: "Blushing Cherry Fizz",
        price: 1.8,
        details: " A refreshing blend of juicy cherries and sparkling water, with a hint of lime. Topped with fresh mint and a cherry, it’s the perfect thirst-quencher!",
        imageSrc: "cherry-limeade_batch65_beauty-288-809897bbc03f45108eaadcbf92eef781.jpg"
    }

];


let form = document.querySelector(".add-item-container");
let category = document.getElementById("category");
let image = document.getElementById("image");
let name = document.getElementById("name");
let price = document.getElementById("price");
let details = document.getElementById("details");
let errorMessageDiv = document.getElementById("error");


let sandwichItems = document.getElementById("sandwich-items");
let drinkItems = document.getElementById("drink-items");


function renderItems() {
    sandwichItems.innerHTML = '';
    sandwiches.forEach(sandwich => {
        sandwichItems.innerHTML += `
            <div class="item">
                <img src="${sandwich.imageSrc}" alt="${sandwich.name}">
                <h2>${sandwich.name}</h2>
                <p class="price">$${sandwich.price}</p>
                <p class="details">${sandwich.details}</p>
            </div>
        `;
    });

    drinkItems.innerHTML = '';
    drinks.forEach(drink => {
        drinkItems.innerHTML += `
            <div class="item">
                <img src="${drink.imageSrc}" alt="${drink.name}">
                <h2>${drink.name}</h2>
                <p class="price">$${drink.price}</p>
                <p class="details">${drink.details}</p>
            </div>
        `;
    });
}


function remove() {
    form.classList.add('hidden');
}

function add() {
    main.s
    form.classList.remove('hidden');
}

// Validate input fields
function validateInputs() {
    let isValid = true;
    errorMessageDiv.innerHTML = '';

    if (name.value.trim() === '') {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please enter product name.</p>';
    }
    if (price.value.trim() === '') {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please enter product price.</p>';
    }
    if (details.value.trim() === '') {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please enter product details.</p>';
    }
    if (image.files.length === 0) {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please select an image.</p>';
    }
    if (category.value === '') {
        isValid = false;
        errorMessageDiv.innerHTML += '<p>Please select a category.</p>';
    }

    if (errorMessageDiv.innerHTML) {
        errorMessageDiv.style.display = 'block';
    } else {
        errorMessageDiv.style.display = 'none';
    }

    return isValid;
}

function addItemToArray(imageSrc, name, price, details, category) {
    let newItem = {
        name: name,
        price: parseFloat(price), 
        details: details,
        imageSrc: imageSrc
    };

    if (category === 'sandwiches') {
        sandwiches.push(newItem);
    } else if (category === 'drinks') {
        drinks.push(newItem);
    }

    renderItems();  
}


document.querySelector(".add-item-form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateInputs()) {
        // Create a local URL for the image
        let imageURL = URL.createObjectURL(image.files[0]);

        // Add the new item to the corresponding array
        addItemToArray(imageURL, name.value, price.value, details.value, category.value);

        // Clear the form and hide it
        form.reset();
        remove();
    }
});

// Initial render of items (which will be empty at first)
renderItems();