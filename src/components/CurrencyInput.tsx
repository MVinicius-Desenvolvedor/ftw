import _CurrencyInput, { CurrencyInputProps} from "react-currency-input-field";
import { twMerge } from "tailwind-merge";

interface InputProps extends CurrencyInputProps {
    error?:boolean;
    errorMessage?: string;
   }
   



   function CurrencyInput (
    {className, error, errorMessage,...props}: InputProps
     ) {
        const InputClassName =twMerge(
            className,
            "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDark transition-all",
            error?"border-red-500": "focus:ring-primary", error? "border-red-500" : ""
        );
    
        return (
            <div className='flex w-full flex-col'>
                <_CurrencyInput lang='pt-BR' className={InputClassName} intlConfig={{locale: "pt-BR", currency:"BRL"}} {...props}/>
                {error && errorMessage && (
                    <span className='mt-1 text-xs text-red-500'>{errorMessage}</span>
                )}
            </div>
        );
    }
    
    
    export default CurrencyInput;  
