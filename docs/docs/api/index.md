# Form Builder

Form Builder is a library for better FormData use in plain JavaScript.

_Inspired by Angular Form Builder_.

Table of Contents

    Installation

    Quick Start

    API Reference

        FormBuilder

        FormField

    Usage Example

    License

## Installation

To use FormBuilder, include the source files in your project:

import { FormBuilder, FormField } from 'form-builder';

    Note: Ensure your DOM includes a <form> element with an ID or selector that matches your FormBuilder instantiation.

## Quick Start

```typescript
const fb = new FormBuilder("#my-form", {
  username: new FormField(""),
  age: new FormField(0, (v) => parseInt(v, 10)),
});

fb.onSubmit((values) => {
  console.log("Form submitted:", values);
});
```

Ensure that inputs inside your HTML form element have name attributes matching the keys in the FormBuilder definition.

## API Reference

## Philosophy

Form Builder is only the control layer for your forms. You can style your form as you like, as long as
it is written using valid html form syntax. It is (hopefully) re-usable across different UI frameworks as it
is plain JavaScript using native FormData object and bringing in some types for TypeScript users.);
