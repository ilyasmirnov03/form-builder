import { FormBuilder, FormField } from '../../lib';

const fb = new FormBuilder('.form', {
  name: new FormField('')
});
console.log(fb.fields.name.value);
