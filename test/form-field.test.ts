import { FormBuilder, FormField } from "../lib";
import { provideGlobal } from "./provide-global";

const domWithForm = `<!DOCTYPE html><html><body><form class="form">
<input type="text" name="text" />
<input type="number" name="number" />
<input type="checkbox" name="checkbox" />
</form></body></html>`;

describe('FormField', () => {
  provideGlobal(domWithForm);

  test('Should get assigned value passed in the constructor', () => {
    const fb = new FormBuilder('.form', {
      text: new FormField("hello"),
    });
    expect(fb.fields.text.value).toEqual("hello");
  });

  test('Should convert number input value to number type', () => {
    const fb = new FormBuilder('.form', {
      number: new FormField(10),
    });
    const input = document.querySelector('input[type="number"]') as HTMLInputElement;
    input.value = "20";
    const event = new Event('change');
    input.dispatchEvent(event);
    expect(fb.fields.number.value).toEqual(20);
  });

  test('Checkbox input value should be a boolean', () => {
    const fb = new FormBuilder('.form', {
      checkbox: new FormField(false),
    });
    const input = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    input.checked = true;
    const event = new Event('change');
    input.dispatchEvent(event);
    expect(fb.fields.checkbox.value).toEqual(true);
  });

  test('Shuold use transformer function passed in the constructor', () => {
    const fb = new FormBuilder('.form', {
      text: new FormField<{ text: string } | null>(null, (v) => {
        return { text: v };
      }),
    });

    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    input.value = 'world';
    const event = new Event('change');
    input.dispatchEvent(event);

    expect(fb.fields.text.value?.text).toEqual('world');
  });

  test('Should send new value in onChange', () => {
    let valueToCheck: number | null = null;
    const fb = new FormBuilder('.form', {
      number: new FormField(10),
    });
    fb.fields.number.onChange((v) => {
      valueToCheck = v;
    });
    const input = document.querySelector('input[type="number"]') as HTMLInputElement;
    input.value = "20";
    const event = new Event('change');
    input.dispatchEvent(event);
    expect(valueToCheck).toEqual(20);
  });

  test('Should send transformed value in onChange', () => {
    let valueToCheck: Partial<{ number: number }> = {};
    const fb = new FormBuilder('.form', {
      number: new FormField<{ number: number }>({ number: 0 }, (v) => {
        return {
          number: Number(v),
        }
      }),
    });
    fb.fields.number.onChange((v) => {
      valueToCheck = v;
    });
    const input = document.querySelector('input[type="number"]') as HTMLInputElement;
    input.value = "20";
    const event = new Event('change');
    input.dispatchEvent(event);
    expect(valueToCheck?.number).toEqual(20);
  });

});

