const fetchData = async () => {
    let data = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=0OFP1iubXivPDgr4RlxTc2wKQNAXJ8y1&limit=20&rating=g');

    console.log(data);
}
 const testObject = {
     test: 123
 }


document.addEventListener('DOMContentLoaded', function() {
    fetchData();
}, false)
 

// creates another child element within the selected element
// document.getElementById('searchBtn').textContent = 'override?';  // yes it does
// document.getElementById('searchBtn').innerHTML = '<p>Searchinggggg</p>' 

// let listItems = document.getElementsByClassName('nav-link');

// console.log(listItems);

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = 'red';
// }

// const btn = document.querySelectorAll('input[type="button"]');
// btn.style.color = 'green';

// for (let i = 0; i < btn.length; i++) {
//     btn[i].value = 'test'
// }

// var nav = document.querySelector('.navbar-nav li');

// console.log(nav);
// nav.style.border = '1px solid black'
// lastItem.style.backgroundColor = 'blue';

// var container = document.querySelector('.container-fluid');
// console.log(container);
// container.parentNode.style.border ='1px solid cyan';

// var logo = container.firstElementChild;
// console.log(logo);
// logo.style.border = '1px solid pink'

// var rest = container.lastElementChild;
// console.log(rest);
// rest.style.border = '1px solid yellow'

// const home = rest.firstElementChild.firstElementChild.firstElementChild;
// console.log(home);
// home.textContent = 'aiyoyo'

// there are also other properties like .nextSibling .nextElementSibling .previousSubling .previousElementSibling


// Creating elements

// const newDiv = document.createElement('div');

// Add class
// newDiv.className = 'hello';

// Add id
// newDiv.id = 'hello1';

// Add attr
// newDiv.setAttribute('title', 'Hello Div');

// Create text node
// var newDivText = document.createTextNode('Hello World');


// Add text to div
// newDiv.appendChild(newDivText);

// console.log(newDiv);


// Adding the newDiv to the DOM via Javascript

// const container2 = document.querySelector('.container-fluid');
// var logo2 = document.querySelector('.navbar-brand');

// container2.insertBefore(newDiv, logo2);

// ------------------------------------------  

// EVENT LISTENERS



//Project

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();
    console.log('1')

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element

    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    const deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e) {
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get lis
    let items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        }  else {
            item.style.display = 'none';
        }
    })
}

