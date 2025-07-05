import { FormBuilder, FormField } from '../../lib';

const fb = new FormBuilder('.form', {
  name: new FormField('mario'),
  amount: new FormField(0),
  job: new FormField<{ title: string } | null>(null, (v) => {
    return { title: v };
  }),
  description: new FormField('very long description'),
  happy: new FormField(true),
  meal: new FormField('soup'),
  time: new FormField(''),
  range: new FormField(0),
});

console.log(fb.fields);

fb.fields.job.onChange((v) => {
  console.log(v);
});

fb.onSubmit((v) => {
  console.log(v);
});

