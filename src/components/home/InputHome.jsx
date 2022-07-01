import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setNameGlobal} from "../../store/slices/userName.slice"
import { useNavigate} from "react-router-dom"

const InputHome = ({setValidName}) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onSubmitFunction = (e) =>{ 
    if(e.target.children[0].value != ""){
      setValidName(true)
      e.preventDefault()
      dispatch(setNameGlobal(e.target.children[0].value))
      navigate("/pokedex")
    }
  }
  


  return (
    <div>
        <form onSubmit={onSubmitFunction} action="">
            <input type="text" />
            <button >Comenzar</button>
        </form>
    </div>
  )
}

export default InputHome