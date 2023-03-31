var form =document.getElementById("addForm");
var itemList=document.getElementById("items");
var filter=document.getElementById("filter");
//Form submit event
form.addEventListener('submit',addItem);

// delete button
itemList.addEventListener("click",removeItem);

//filter items
filter.addEventListener("keyup",filterItems);

//add item
function addItem(e){
    e.preventDefault();
    

//     //get input value
    var newItem=document.getElementById('item').value;
    var newItem1=document.getElementById('item').value;
    
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

    //append button to li
    li.appendChild(deleteBtn);
    //Edit button
    let editBtn = document.createElement('button');

    editBtn.className = 'btn  btn-sm float-right Edit';

    editBtn.appendChild(document.createTextNode('Edit'));

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
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //get list
    var items=itemList.getElementsByTagName("li");
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    });

}

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