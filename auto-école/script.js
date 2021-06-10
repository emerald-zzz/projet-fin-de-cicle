function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  const btnsb = document.getElementById('entname');
  const input = document.getElementById('txt-fld');
  const list = document.getElementById('list-nom');
  const msg = document.getElementById('msg');
   var n = 0;
btnsb.addEventListener('click', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    if (input.value !== '' && n!==15) {
        //Create li
        const newName = document.createElement('li');
       newName.innerText = input.value;
       // newTodo.classList.add('todo-item');

        //trash button
      const trashButton = document.createElement('button');
        trashButton.classList.add("trash-btn");
        newName.appendChild(trashButton);

        //Append to the list
        list.appendChild(newName);

        //clear input value 
        input.value = "";
      n++;
      console.log(n);
    }
    else if ( n=15){
    msg.innerText='le nombre de candidats ne peut pas dépasser 15 ';
    input.disabled=true;
    }

}
list.addEventListener('click', deletecheck);
function deletecheck(e) {
    const item = e.target;

    
    if (item.classList[0] === "trash-btn") {
        const name = item.parentElement;
        name.remove(); 
    }

  n--;
  if (n<15){
    input.disabled=false;
    msg.innerText='entrez le nom et le prénom de candidat ici ⬇';
  }
}
