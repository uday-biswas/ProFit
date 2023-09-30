import './ProductForm.css'
import { useState } from 'react';

const ProductForm = (props) => {
    const [newName, setNewName] = useState('');
    const [newRating, setNewRating] = useState('');
    const [experience, setExperience] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [image, setImage] = useState('');
    const [newId, setId] = useState(4);
    const [description, setDescription] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleRatingChange = (event) => {
        setNewRating(event.target.value);
    }

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    }

    const handleSpecialityChange = (event) => {
        setSpeciality(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setId(newId + 1);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            id: newId,
            name: newName,
            rating: newRating,
            experience: experience,
            speciality: speciality,
            image: image,
            description: description
        }
        props.addPsycho(newProduct);
        setNewName('');
        setNewRating('');
        setExperience('');
        setSpeciality('');
        setImage('');
        setDescription('');
    }

    const removeForm = () => {
        props.cancelPsycho();
        setNewName('');
        setNewRating('');
        setExperience('');
        setSpeciality('');
        setImage('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <table className='table'>
                <tr>
                    <td>
                        <label htmlFor="name">Name: </label>
                    </td>
                    <td>
                        <input type="text" id="name" name="name" value={newName} onChange={handleNameChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="rating">Rating: </label>
                    </td>
                    <td>
                        <input type="text" id="rating" name="rating" value={newRating} onChange={handleRatingChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="experience">Experience: </label>
                    </td>
                    <td>
                        <input type="text" id="experience" name="experience" value={experience} onChange={handleExperienceChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="speciality">Speciality: </label>
                    </td>
                    <td>
                        <input type="text" id="speciality" name="speciality" value={speciality} onChange={handleSpecialityChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="image">Image: </label>
                    </td>
                    <td>
                        <input type="text" id="image" name="image" value={image} onChange={handleImageChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="description">Description: </label>
                    </td>
                    <td>
                        <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} />
                    </td>
                </tr>
                <tr></tr>
                <tr>
                    <td colSpan={2}>
                        <button type="submit" className='space'> Add </button>
                        <button onClick={removeForm} className='space'>Cancel</button>
                    </td>
                </tr>
            </table>
        </form>
    )
}

export default ProductForm;
