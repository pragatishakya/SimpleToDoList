//functionality- add item, delete item ,search item

let form=document.getElementById('addForm')
let itemList= document.getElementById('items')
let filter= document.getElementById('filter')

//add-item
form.addEventListener("submit",function(e){
    e.preventDefault()
    let item=document.getElementById('item').value
    addRow(item)
    insertRow(item)
}) 

//delete-item
itemList.addEventListener("click", function(e){
    deleteRow(e);
})

//search-element
filter.addEventListener("keypress", function(e){
    let value=e.target.value
    let li=document.getElementsByTagName("li")
    Array.from(li).forEach(function(item){
        if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1)
            item.style.display='block'
        else
            item.style.display='none'
    })
})

//function to ADD row in front page
function addRow(item){
    let li=document.createElement('li')   //<li></li>  
    li.appendChild(document.createTextNode(item)) //<li>abc</li> 
    li.className='list-group-item'
    let button=document.createElement('button')  //<button></button>
    button.appendChild(document.createTextNode('X'))  //<button>X</button>
    button.className="btn btn-danger btn-sm float-right delete"
    li.appendChild(button)
    itemList.appendChild(li)
    document.getElementById('item').value=''
}

//function to DELETE row in front page
function deleteRow(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure you want to delete the item?")){
            // e.target.parentElement.style.display='none'
            itemList.removeChild(e.target.parentElement)
        }
    }
    else{
        alert("If you want to delete this item then press on red cross button")
    }
}

//function to ADD row in LocalStorage
function insertRow(item){
    localStorage.setItem("items",item);
}