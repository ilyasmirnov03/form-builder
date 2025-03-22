# Class: FormBuilder

Defined in: [form-builder.ts:8](https://github.com/ilyasmirnov03/form-builder/blob/34944a3142b9896dda1d2e802592b1958501d5ac/lib/form-builder.ts#L8)

Form builder is the form-building class that holds the provided inputs together.

## Constructors

### new FormBuilder()

> **new FormBuilder**(`selector`, `formDefinition`): `FormBuilder`

Defined in: [form-builder.ts:27](https://github.com/ilyasmirnov03/form-builder/blob/34944a3142b9896dda1d2e802592b1958501d5ac/lib/form-builder.ts#L27)

Constructor of the form builder class.

#### Parameters

##### selector

`string`

The selector of the form element.

##### formDefinition

`FormDefinition`

Form definition

#### Returns

`FormBuilder`

#### Throws

Error when provided selector doesn't match any element.

#### Throws

TypeError when found target with provided selector isn't a form element.

## Accessors

### target

#### Get Signature

> **get** **target**(): `HTMLFormElement`

Defined in: [form-builder.ts:45](https://github.com/ilyasmirnov03/form-builder/blob/34944a3142b9896dda1d2e802592b1958501d5ac/lib/form-builder.ts#L45)

Get the target element.

##### Throws

Error if target is not available yet, i.e. == null.

##### Returns

`HTMLFormElement`
