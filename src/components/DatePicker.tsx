import {LegacyRef, forwardRef} from 'react';
import {twMerge} from 'tailwind-merge';
import _DatePicker, {ReactDatePickerProps,
registerLocale
} from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', ptBR);

interface InputProps extends ReactDatePickerProps {
 error?:boolean;
 errorMessage?: string;
}


function DatePicker (
    {className, error, errorMessage,...props}: InputProps, 
       
        ref: LegacyRef<HTMLInputElement> | undefined
     ) {
        const DatePickerClassName =twMerge(
            className,"rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDark transition-all",
            error?"border-red-500": "focus:ring-purple"
        );
    
        return (
            <div className='flex w-full flex-col'>
                <_DatePicker locale='pt-BR' wrapperClassName='w-full' className={DatePickerClassName} {...props}/>
                {error && errorMessage && (
                    <span className='mt-1 text-xs text-red-500'>{errorMessage}</span>
                )}
            </div>
        );
    }
    
    
    export default forwardRef (DatePicker);