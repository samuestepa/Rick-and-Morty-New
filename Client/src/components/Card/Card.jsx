import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';  
import style from '../../styles/Card.css'

 function Card({onClose, id, name, species, gender, status, origin, image, addFav, removeFav, myFavorites}) {

    const [isFav, setIsFav] = useState(false);
    
    const handleFavorite = () => {
       if(isFav){
         setIsFav(false);
         removeFav(id);
       }
     else {
      setIsFav(true);
      addFav({id, name, status, species, gender, origin, image, onClose})
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
      <div key={id} className={style.contenedor}>
         
         <button onClick={handleFavorite}>{isFav ? "❤️":"🤍"}</button>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className="card-name">{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={style.imgCard} src={image} alt={name} />
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
