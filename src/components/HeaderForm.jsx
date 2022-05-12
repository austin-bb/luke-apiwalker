import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HeaderForm = () => {
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
        clearForm()
    }

    const clearForm = () => {
        setId("")
        setCategory("")
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <p>
                    Search for: 
                    <select name="category" value={category}
                        onChange={e => setCategory(e.target.value)} style={{ margin: 5}}>
                        <option hidden>Choose a Category</option>
                        <option value="people">People</option>
                        <option value="planets">Planet</option>
                    </select>
                    ID: 
                    <input type="text" name="id" value={id} 
                        onChange={e => setId(e.target.value)} style={{ margin: 5}}/>
                    <button type="submit"> Search</button>
                </p>
            </form>

        </div>
    )
}

export default HeaderForm