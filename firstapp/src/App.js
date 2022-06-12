import React, { useState } from 'react';
import Header from './Header';
import {Todos} from './Todos';
import {Footer} from './Footer';
import {AddTodo} from './AddTodo';

function App() {
    const onDelete = (todo) =>
    {
        console.log("I am on Delete",todo);
        setTodos(todos.filter((e)=>
        {
            console.log(e);
            return e!==todo;  // Inside filter function we passed anonymous function which takes a parameter
            // i.e CurrentValue of array OR *The first element inside an array .
            // That First element is compared with the todo that was being clicked(i.e first Todo) .
            // Are they Both equal ? 
            // Yes The clicked todo[0] and the e which refers to e[0] They both are equal
            // but Our condition says opposite to it . It will return array which is not equal 
            // So the first element of array is equal . It will not return that array element 
            // But it will return other elements of array .Which are e[1] & e[2] since others are not equal 
            // to clicked Array element 
            
        }))
    }
    const addTodo = (title,desc) =>
    {
        let sno;
        console.log("I am adding this todo",title,desc)
        if(todos.length==0)
        {
            sno=0;
        }
        else
        {
            let sno=todos[todos.length-1].sno +1;
        }
        
        const myTodo=
        {
            sno:sno,
            title:title,
            desc:desc,
        }
        setTodos([...todos,myTodo]);
        console.log(myTodo);
    }


    const[todos, setTodos] = useState([
        {
            sno:1,
            title:"Go to market",
            desc: "Buy Groceries"
        },
         
        {  
            sno:2,
            title:"Go to Mall",
            desc: "Buy Pamphelts"
        },

        {  
            sno:3,
            title:"Go to SEA",
            desc: "TO BATH"
        }
    ])
    return (
        <>
           <Header title="MyTodosList"/>
           <AddTodo addTodo={addTodo}/>
           <Todos todos={todos} onDelete={onDelete}/>
           <Footer/>
        </>
    );
}

export default App;