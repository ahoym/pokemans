import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import { object, string } from 'yup';

function InnerForm({ errors, handleSubmit, isSubmitting, touched }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="text" name="currentPokemon" placeholder="Pokemon name" />
      {errors.currentPokemon &&
        touched.currentPokemon && <p>{errors.currentPokemon}</p>}

      <button type="submit" disabled={isSubmitting}>
        Search
      </button>
    </form>
  );
}

export default class Search extends Component {
  handleSubmit = (values, formikActions) => {
    this.props.onSubmit(values);
    formikActions.setSubmitting(false);
  };

  render() {
    // This plays no "business" purpose, but is here to test that validation
    // constraints for the form can be dynamic
    const minLength = this.props.hasSearchTerm ? 2 : 3;
    const validationSchema = object().shape({
      currentPokemon: string().min(minLength),
    });

    return (
      <div>
        <h1>Search for a pokemon name here!</h1>

        <Formik
          initialValues={{ currentPokemon: '' }}
          component={InnerForm}
          onSubmit={this.handleSubmit}
          validationSchema={validationSchema}
          validateOnChange={false}
        />
      </div>
    );
  }
}
