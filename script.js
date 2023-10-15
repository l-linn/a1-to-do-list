function newItem(){
    let list = $('#list');
    let li = $('<li></li>'); //create a new li item
    let inputValue = $('#input').val(); //get the value of the input
    li.append(inputValue);
    
    //validating the input
    inputValue === ''? alert('Can\'t add an empty item to the list.!' ):list.append(li);
    
    //add event listener in jquery
    li.on('dblclick', () => li.toggleClass('strike'));
    
    //add a delete button
    let deleteButton = $('<div></div>');//anything in html tags is fine
    deleteButton.append(document.createTextNode('X'))
    li.append(deleteButton);

    //add delete event to delete button
    deleteButton.on('click',() => li.addClass("delete"));

    $('#list').sortable();

};


