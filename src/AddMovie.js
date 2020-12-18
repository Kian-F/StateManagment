import React from 'react';

const AddMovie = () =>{
    const getName =(e)=>{
        const name = e.target.value;
        console.log(name)
    }

return(
    <form>
        <label>Movie's Name</label>
        <input onChange={getName} type='text' name='name' value=""/>
        <label>Price</label>
        <input type='text' name='price' value=""/>

        <button type='submit'>Add</button>
    </form>
)

}

export default AddMovie;