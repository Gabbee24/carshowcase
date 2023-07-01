'use client'
import { useState } from "react"
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'
// import PhoneInputWithCountrySelect from "react-phone-number-input"

const page = () => {
    const [value, setValue] = useState()
  return (
    <div className="phone">
        <PhoneInput
            placeholder= 'enter phone number'
            value={value}
            onChange={setValue}
            />
            {value}
    </div>

    )
}

export default page

// AIzaSyDcLL-MArh26JD2H7YdgLgEyO9hShSvU9k