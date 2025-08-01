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
