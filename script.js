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
        var removeBtn = document.createElement('button');
        var br = document.createElement('br');
        var br2 = document.createElement('br');
        var br3 = document.createElement('br');
        var editBtn = document.createElement('button');
        removeBtn.textContent="Remove User";
        editBtn.textContent="edit User";
        removeBtn.classList.add('btn' , 'btn-primary');
        editBtn.classList.add('btn' , 'btn-secondary');
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
// addUserForm.addEventListener('submit', function(e){
// 	e.preventDefault()
//     let data = this.elements  //this = e.target = addUserForm
//     let user ={}
//     userKeys.forEach( key => { user[key] = data[key].value })
//     users.push(user)
// 	addUserForm.reset()
	
//     console.log(users)
// })
// usersTable=document.querySelectorAll("#table")
// let addElement=function(eleType,eleText,parent){
// 	ele=document.createElement(elementType).ele.textContent=eleText
// 	parent.appendChild(ele)
// 	let show=function(){
// 		users.forEach((user,i)=>{
// 			tr=document.createElement("tr")
// 			addElement("td",i+1,tr)
// 			userKeys.forEach(key=>{
// 				addElement("td",user[key],tr)
// 			})
// 			usersTable.appendChild(tr)
// 		})
// 	}
//     showUsers()
// }