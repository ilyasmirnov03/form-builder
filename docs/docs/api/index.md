# Form Builder

Form Builder is a library for better FormData use in plain JavaScript.

_Inspired by Angular Form Builder_.

## Usage

The most basic use case consists of importing the ``FormBuilder`` object and declaring your form:

```typescript
const form = new FormBuilder(".form", {
    email: new FormPart<string>(""),
    password: new FormPart<string>("")
});
```

With this setup, somewhere in your template you can have the following HTML:

```html
<form class="form">
    <input type="email" name="email">
    <input type="password" name="password">
</form>
```

In this example, the Form Builder object will create a FormData instance from the provided ``".form"`` selector
and will create FormPart objects linked to the inputs found in the html form via their name property.

It will throw an error if the provided form selector doesn't match anything. Likewise, it will throw an error
if any provided FormInput hasn't been found using the inputs' name property.

## Philosophy

Form Builder is only the control layer for your forms. You can style your form as you like, as long as
it is written using valid html form syntax. It is (hopefully) re-usable across different UI frameworks as it
is plain JavaScript using native FormData object and bringing in some types for TypeScript users.
