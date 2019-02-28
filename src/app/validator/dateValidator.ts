import { AbstractControl } from '@angular/forms';

export class DateValidator {

    static dateValidator(c: AbstractControl): { [key: string]: boolean } | null {
        
        if (c.pristine) {
            return null;
        }
        if ((c.value !== undefined && c.value !== '' && c.value != null)) {
    
            let month = null;
            let day = null;
            let year = null;

            let currentTaxYear = Number(new Date().getFullYear());
            let currentMonth = Number(new Date().getMonth()+1);
            let currentDay = Number(new Date().getDate());
            
            if (c.value.indexOf('-') > -1) {
                var res = c.value.split("-");           
                if (res.length > 1) {
                    year = res[0];
                    month = res[1];
                    day = res[2]
                }                              
            }
            else {
                return {'dateInvalid': true}           
            }

            if (isNaN(month) || isNaN(day) || isNaN(year)) {
                return { 'dateInvalid': true };
            } 
            month = Number(month);
            day = Number(day);
            year = Number(year);

            if (month < 1 || month > 12) { // check month range
                return { 'dateInvalid': true };
            }
            
            if (day < 1 || day > 31) {
                return { 'dateInvalid': true };
            }

            if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
                return { 'dateInvalid': true };
            }
            
            if (month == 2) { // check for february 29th
                var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
                if (day > 29 || (day === 29 && !isleap)) {
                    return { 'dateInvalid': true };
                }
            }

            if (year < currentTaxYear || month < currentMonth || day < currentDay) {
                return { 'prevDate': true };
            }
            if( year > (currentTaxYear+2)){
                return {"tooLate": true}
            }
        }
        return null;
    }
}