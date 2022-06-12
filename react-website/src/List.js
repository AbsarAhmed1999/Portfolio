import React from 'react';

const List = ({people})=>{
    return(
        <>
        {people.map((person)=>{
            const{id,img,name,Age}= person;
            console.log(person);
            return(
                <article key={id} className="UserInfo">
                <img src={img} width="100px" height="80px" alt="image"></img>
                <section>
                    <h4>{name}</h4>
                    <p>{Age}</p>
                </section>

                </article>
            )
        })}
        </>
    )

}

export default List;