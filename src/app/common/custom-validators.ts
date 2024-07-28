import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static tel (control : AbstractControl) : ValidationErrors | null {
        if(control.value === '' ) {
            return null
        }
        if(!control.value.match(/^\+{0,1}[0-9]+$/)) {
            return {tel : 'Номен телефона должен содержать только цифры'}
        }
        if(!control.value.match(/[0-9]{11}/)) {
            return {tel : 'Номен телефона должен содержать 11 цифр'}
        }
        return null
    }
}