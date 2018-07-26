import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import { Button, Heading, Spacer, Text } from 'src/libraries/legos';
import { inputStyle } from 'src/libraries/legos/Input/styles';

function InnerForm({ errors, handleSubmit, isSubmitting, touched }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        className={inputStyle}
        type="text"
        name="currentPokemon"
        placeholder="Pokemon name"
      />
      <Spacer direction="x" size="lg" />

      <Button color="info" type="submit" disabled={isSubmitting} mode="inverse">
        Search
      </Button>

      {errors.currentPokemon &&
        touched.currentPokemon && (
          <Text color="danger">{errors.currentPokemon}</Text>
        )}
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
        <Heading level="4">Search for a pokemon name here!</Heading>
        <Spacer size="s" />

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
