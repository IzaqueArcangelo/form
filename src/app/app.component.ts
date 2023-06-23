import { Component } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { and, createAjv, isControl, optionIs, rankWith, schemaTypeIs, scopeEndsWith, Tester } from '@jsonforms/core';
import { CustomAutocompleteControlRenderer } from './custom.autocomplete';
import { DataDisplayComponent } from './data.control';
import { LangComponent } from './lang.control';
import uischemaAsset from '../assets/uischema.json';
import schemaAsset from '../assets/schema.json';
import dataAsset from './data';
import uischemaForm from '../assets/form/uischema.json';
import schemaForm from '../assets/form/schema.json';
import form from './form';
import { parsePhoneNumber } from 'libphonenumber-js';
import { DateAdapter } from '@angular/material/core';
//import  * as localize from 'ajv-i18n/localize/pt-BR';

const departmentTester: Tester = and(
  schemaTypeIs('string'),
  scopeEndsWith('department')
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  renderers = [
    ...angularMaterialRenderers,
    { tester: rankWith(5, departmentTester), renderer: CustomAutocompleteControlRenderer },
    {
      renderer: DataDisplayComponent,
      tester: rankWith(
        6,
        and(
          isControl,
          scopeEndsWith('___data')
        )
      )
    },
    {
      renderer: LangComponent,
      tester: rankWith(
        6,
        and(
          isControl,
          optionIs('lang', true)
        )
      )
    },
  ];
  uischema = uischemaForm;
  schema = schemaForm;
  data = form;
  i18n = { locale: 'pt-BR' }
  //i18n = { locale: 'de-DE' }
  dateAdapter;
  ajv = createAjv({
    schemaId: 'id',
    allErrors: false
  });


  constructor(dateAdapter: DateAdapter<Date>) {
    const validate = this.ajv.compile(this.schema)
    const valid = validate(this.data)
    const localize = {
      en: require('ajv-i18n/localize/en'),
      pt: require('ajv-i18n/localize/pt-BR'),
    }
  
    this.ajv.addFormat('time', '^([0-1][0-9]|2[0-3]):[0-5][0-9]$');
    this.dateAdapter = dateAdapter;
    dateAdapter.setLocale(this.i18n.locale);
    this.ajv.addFormat('tel', maybePhoneNumber => {
      try {
        //parsePhoneNumber(maybePhoneNumber, 'DE');
        parsePhoneNumber(maybePhoneNumber, 'BR');

        //tentando traduzir
        if (!valid) {
          // ru for Russian
          localize.pt(validate.errors)
          // string with all errors and data paths
          console.log(this.ajv.errorsText(validate.errors, {separator: '\n'}))
        }
        return true;
      } catch (_) {
        return false;
      }
    });
  }
}
