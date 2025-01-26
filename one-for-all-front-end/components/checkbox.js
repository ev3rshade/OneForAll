import { useState } from "react";
    

export const CheckBox = ({ label, onChange}) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
            <label id='hello'>
                <input type="checkbox" 
                       checked={isChecked}  
                       onChange={() => {{setIsChecked((prev) => !prev); onChange}}}/>
                <span>{label}</span>
            </label>
        </div>
    )
}