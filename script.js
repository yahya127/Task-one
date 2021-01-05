userKeys = []
users = []
addUserForm = document.querySelector('#addUser')
document.querySelector('#showHide').addEventListener('click', function(e){
    this.textContent == "show"? this.textContent="hide":this.textContent="show";
    document.querySelector('#formSection').classList.toggle('d-none')
})
function add (name , age , email,address,office){

    user = {
       name : name ,
      age : age,
       email : email,
       address:address,
       office:office,
       status:false
   }
   localStorage.setItem(name,name)
   localStorage.setItem(age,age)
   localStorage.setItem(email,email)
   localStorage.setItem(address,address)
   localStorage.setItem(office,office)
   users.push(user);
   
   }
   function RemoveUser(index) {
    users.splice(index , 1);
    show();
}
function editUser(user) {
    user.status= true;
    show();
}
    


function handleAction( x  , type ){
    if(type == 'remove') users.splice(x , 1);
    else if(type == 'edit') x.status= true;
    show();
}

function show(){
	document.querySelector('#allusers').textContent="";
	users.forEach((user, index)=>{
        var div=document.createElement('div');
        var hName=document.createElement('h4');
		var hAge=document.createElement('h4');
        var hEmail=document.createElement('h4');
        var hAddress=document.createElement('h4');
		var hOffice=document.createElement('h4');
        var removeBtn = document.createElement('button');
        var br = document.createElement('br');
        var br2 = document.createElement('br');
        var br3 = document.createElement('br');
        var editBtn = document.createElement('button');
        removeBtn.textContent="Remove User";
        editBtn.textContent="edit User";
        removeBtn.classList.add('btn' , 'btn-primary');
        editBtn.classList.add('btn' , 'btn-secondary');
        hName.textContent=user.name;
		hAge.textContent=user.age;
        hEmail.textContent=user.email;
        hAddress.textContent=user.address;
		hOffice.textContent=user.office;
        div.appendChild(hName)
        div.appendChild(hAge)
        div.appendChild(hEmail)
        div.appendChild(hAddress)
        div.appendChild(hOffice)
        div.appendChild(removeBtn);
        div.appendChild(br);
        div.appendChild(br2);
        div.appendChild(br3);
        div.appendChild(editBtn);
        (user.status) ? div.classList.add("alert", "alert-success") : div.classList.add("alert", "alert-danger");
        document.querySelector('#allusers').append(div)
        removeBtn.addEventListener('click' , function() {
            handleAction(index , 'remove');
	        })
        editBtn.addEventListener('click' , function() {
            handleAction(user , 'edit');
          })
        })
}

var Myform=document.querySelector('#addUser');
	Myform.addEventListener('submit',function(e){
		e.preventDefault();
        console.log(e);
        
        add(e.target.elements.name.value,
            e.target.elements.age.value,
            e.target.elements.email.value,
            e.target.elements.address.value,
            e.target.elements.office.value);
            
		show();
    })
   
//https://github.com/yahya127/Task-one.git