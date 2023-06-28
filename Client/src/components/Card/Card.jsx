import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';  
import style from '../../styles/Card.css'

 function Card({onClose, id, name, species, gender, image, addFav, removeFav, myFavorites}) {

    const [isFav, setIsFav] = useState(false);
    
    const handleFavorite = () => {
       if(isFav){
         setIsFav(false);
         removeFav(id);
       }
     else {
      setIsFav(true);
      addFav({id, name, species, gender, image, onClose})
    }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });   
   }, [myFavorites]);

   return (
      <div className='containter'>
         <Link to = {`detail/${id}`}>
            <h2 className='name'>{name}</h2>
         </Link>
         <div className='detail'>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
         </div>
         <img src={image} alt={name} className='img'/>
         <div className='button'>
            <button onClick={() => onClose(id)}>X</button>
         </div>
         <div className='simbols'>
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
