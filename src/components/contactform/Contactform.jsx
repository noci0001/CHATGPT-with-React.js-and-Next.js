import React from 'react';
import { useHistory } from 'react-router-dom';

const ContactForm = () => {
   const history = useHistory();

   const handleSubmit = (event) => {
      event.preventDefault();
      // Logica per gestire l'invio del form e la validazione
      // Dopo l'invio con successo, reindirizza alla pagina di conferma
      history.push('/conferma');
   };

   return (
      <form onSubmit={handleSubmit}>
         <label>
            Nome:
            <input type="text" name="nome" required />
         </label>
         <label>
            Email:
            <input type="email" name="email" required />
         </label>
         <button type="submit">Invia</button>
      </form>
   );
};

export default ContactForm;
