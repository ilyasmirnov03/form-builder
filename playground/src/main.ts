import { FormBuilder, FormField } from '../../lib';

const fb = new FormBuilder('.form', {
  name: new FormField('mario'),
  amount: new FormField(0),
  job: new FormField('programmer'),
  description: new FormField('very long description'),
  happy: new FormField(true),
  meal: new FormField('soup'),
});
console.log(fb.fields);
