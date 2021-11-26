import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          C'est parti ! Commences en donnant tes informations dnas les champs ci-dessous.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nom d'utilisateur</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder="Entres ton nom d'utilisateur"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Entres ton email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mot de passe</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Entres ton mot de passe'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmation mot de passe</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirmes ton mot de passe'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Créer un compte
        </button>
        <span className='form-input-login'>
          Déjà inscris ? se connecter <a href='#'>ici</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;