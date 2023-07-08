import Card from '../Card/Card';

export default function Cards({characters, onClose}) {

   return(
     <div>
        {
          characters && characters.map(({id, name, status, species, gender, origin, image}) => {
            return (
              <Card 
                key = {id} 
                id = {id}
                status = {status}
                species = {species}
                gender = {gender} 
                image = {image}
                name = {name}
                onClose = {onClose}
                />
              ) 
            })
        }
      </div>

   ) 
}
