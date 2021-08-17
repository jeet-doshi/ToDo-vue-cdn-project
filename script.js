new Vue({
    
    el: '#app',


    data: {
        todo: '',
        todos: [],
        isError: false,
    },

    methods: {
        storeTodo() {
            if(this.todo!=""){
                this.todos.push(this.todo)
                this.todo =''
                this.isError= false
            } else {
                this.isError= true
            }
           
        },

        deleteTodo(index) {
            this.todos.splice(index, 1)
        }

    },

})




// function addMore() {
//     document.getElementById('error').innerHTML="";
    
//     let name=document.getElementById('name').value;
//     if(name=='') {
//         document.getElementById('error').innerHTML="*Please enter a value";
//     }else {
//         let box=document.getElementById('box');

//         let li=document.createElement('li');
//         li.textContent=name

//         let a=document.createElement('button');
//         a.textContent="Remove";
//         a.href="javascript:void(0)";
//         a.className="remove-btn";
//         li.appendChild(a);

//         box.appendChild(li);

//     }
//     document.getElementById('name').value=""; 
// }


// let btn=document.querySelector('ul');
// btn.addEventListener('click', function(e) {
//     let box=document.getElementById('box');
//     let li=e.target.parentNode;
//     box.removeChild(li);
// }); 

































