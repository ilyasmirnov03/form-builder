# Form Builder

Form Builder is a library for better FormData use in plain JavaScript.

_Inspired by Angular Form Builder_.

Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [FormBuilder](#form-builder)
  - [FormField](#form-field)

## Installation

To use FormBuilder, include the source files in your project:

import { FormBuilder, FormField } from '@is/form-builder';

## Quick Start

Ensure your DOM includes a ```<form>``` element with a reachable selector.

```typescript
const fb = new FormBuilder("#my-form", {
  username: new FormField(""),
  age: new FormField(0, (v) => parseInt(v, 10)),
});

fb.onSubmit((values) => {
  console.log("Form submitted:", values);
});

fb.fields.username.onChange((newValue) => {
  console.log("New value of username input:", newValue);
});
```

Ensure that inputs inside your HTML form element have name attributes matching the keys in the FormBuilder definition.

## API Reference

# Class: FormBuilder\<TFields\>

Defined in: [form-builder.ts:15](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-builder.ts#L15)

Form builder is the form-building class that holds the provided inputs together.

## Type Parameters

### TFields

`TFields` *extends* `Record`\<`string`, [`FormField`](FormField.md)\<`any`\>\>

## Constructors

### new FormBuilder()

> **new FormBuilder**\<`TFields`\>(`selector`, `formDefinition`): `FormBuilder`\<`TFields`\>

Defined in: [form-builder.ts:54](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-builder.ts#L54)

Constructor of the form builder class.

#### Parameters

##### selector

`string`

The selector of the form element.

##### formDefinition

`TFields`

Form definition

#### Returns

`FormBuilder`\<`TFields`\>

#### Throws

Error when provided selector doesn't match any element.

#### Throws

TypeError when found target with provided selector isn't a form element.

## Accessors

### fields

#### Get Signature

> **get** **fields**(): `TFields`

Defined in: [form-builder.ts:30](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-builder.ts#L30)

Get fields of form.

##### Returns

`TFields`

***

### target

#### Get Signature

> **get** **target**(): `HTMLFormElement`

Defined in: [form-builder.ts:76](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-builder.ts#L76)

Get the target element.

##### Throws

Error if target is not available yet, i.e. == null.

##### Returns

`HTMLFormElement`

***

### value

#### Get Signature

> **get** **value**(): `FormValues`\<`TFields`\>

Defined in: [form-builder.ts:37](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-builder.ts#L37)

Get value of the form.

##### Returns

`FormValues`\<`TFields`\>

## Methods

### onSubmit()

> **onSubmit**(`callback`): `void`

Defined in: [form-builder.ts:86](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-builder.ts#L86)

Subscribe to the submit event.

#### Parameters

##### callback

(`value`) => `void`

#### Returns

`void`

# Class: FormField\<T\>

Defined in: [form-field.ts:7](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-field.ts#L7)

Form part is a description of an input in the FormBuilder class.

## Type Parameters

### T

`T`

## Constructors

### new FormField()

> **new FormField**\<`T`\>(`value`, `valueTransformer`?): `FormField`\<`T`\>

Defined in: [form-field.ts:37](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-field.ts#L37)

FormField constructor

#### Parameters

##### value

`T`

Initial value.

##### valueTransformer?

(`v`) => `T`

This function will get called on input change with the input element value.
Checkboxes inputs will send "true" or "false" and all number inputs will send the number as a stirng.

#### Returns

`FormField`\<`T`\>

## Accessors

### value

#### Get Signature

> **get** **value**(): `T`

Defined in: [form-field.ts:27](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-field.ts#L27)

Field's value getter.

##### Returns

`T`

## Methods

### onChange()

> **onChange**(`callback`): `void`

Defined in: [form-field.ts:72](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-field.ts#L72)

Callback to execute on input's value change.

#### Parameters

##### callback

(`value`) => `void`

Function that will get executed with the input's new value.

#### Returns

`void`

***

### setName()

> **setName**(`name`, `form`): `void`

Defined in: [form-field.ts:48](https://github.com/ilyasmirnov03/form-builder/blob/5063e219623798ecff49a45679be5f9714656f7c/lib/form-field.ts#L48)

Sets the name and the input element of this field.

#### Parameters

##### name

`string`

Name of the input.

##### form

`HTMLFormElement`

Parent form element of the field.

#### Returns

`void`

#### Throws

TypeError if found form element is not of valid type.

