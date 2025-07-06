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
