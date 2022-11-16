import {useState} from 'react';

const useSelectForm = (initialState) =>{
    const [selectForm, setSelectForm] = useState(initialState)
    
    const handleInputChange = (event, name) => {
        // const {name} = event.target
        setSelectForm({...selectForm, [name]: event})
    }
    
    const clear = () => {
        setSelectForm(initialState)
    }
    
    return [selectForm, handleInputChange, clear]
}

export default useSelectForm