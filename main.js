var form =document.getElementById("addForm");
var itemList=document.getElementById("items");


//Form submit event
form.addEventListener('submit',addItem);

// delete button
itemList.addEventListener("click",removeItem);



//add item
function addItem(e){
    e.preventDefault();
    

//     //get input value
    var newItem=document.getElementById('item').value;
    
    var newItem1=document.getElementById('item3').value;
    
    //Create new li element
    var li=document.createElement("li");
    //add class
    li.className="list-group-item";
    
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    li.appendChild(document.createTextNode(newItem1));



    //create del button element
    var deleteBtn=document.createElement('button');

    //add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode("x"));

    
    //Edit button
    let editBtn = document.createElement('button');

    editBtn.className = 'btn  btn-sm float-right Edit';

    editBtn.appendChild(document.createTextNode('Edit'));

    //append button to li
    li.appendChild(deleteBtn);
    li.prepend(editBtn3);

    //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li =e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
const searchBar = document.getElementById('filter');
const list = document.getElementById('items');

searchBar.addEventListener('keyup', function (event) {
const searchText = event.target.value.toLowerCase();
// Get all the list items
const items = list.getElementsByTagName('li');

// Loop through each item and show or hide it based on the search text
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.innerText.toLowerCase();

    if (text.indexOf(searchText) !== -1) {
    item.style.display = 'block';
    } else {
    item.style.display = 'none';
    }
}
});

//Creating Default Edit buttons

// Select all the li elements and store them in a variable
const listItems = document.getElementsByTagName('li');

// Loop through each list item and create a button element with class and text
for (let i = 0; i < listItems.length; i++) {
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right Edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    
// Add the button to the beginning of each list item
    listItems[i].prepend(editBtn);
    }

//Creating Temporary Edit
let editBtn3 = document.createElement('button');
editBtn3.className = 'btn  btn-sm float-right Edit';
editBtn3.appendChild(document.createTextNode('Edit'));
d.prepend(editBtn3)
