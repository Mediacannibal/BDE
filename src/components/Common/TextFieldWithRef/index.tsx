import React, { useEffect, useState } from 'react'
import './style.css';
import '../../../components/app.css'

const TextField = (props: any) => {

    const [input_data, setinput_data] = useState("")

    const [input_min_length, setinput_min_length] = useState(0)

    const [input_replace_regex, setinput_replace_regex] = useState([/'$^'/, ""])

    const [input_format_validation_regex, setinput_format_validation_regex] = useState(/^/)

    const [isActive, setisActive] = useState(false)

    const [error_message, seterror_message] = useState("")

    useEffect(() => {

        if (props.min_length !== undefined) {
            setinput_min_length(props.min_length)
        }
        if (props.replace_regex !== undefined) {
            setinput_replace_regex([props.replace_regex, ""])
        }
        if (props.format_validation_regex !== undefined) {
            setinput_format_validation_regex(props.format_validation_regex)
        }

        if (props.inputtype === 'firstname') {
            setinput_replace_regex([/[0-9`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""])
        }
        if (props.inputtype === 'lastname') {
            setinput_replace_regex([/[`~!@#$%^&*()|+\-=?;:'",.<>\s\s+\{\}\[\]\\\/]\s{1,}/g, ""])
        }
        if (props.inputtype === 'email') {
            setinput_replace_regex([/[`~!#$%^&*()\ \ |+\-=?;:'",<>\{\}\[\]\\\/]/gi, ""])
            setinput_format_validation_regex(/^\w.+@[a-zA-Z_]+?\.[a-zA-Z]/)
        }
        if (props.inputtype === 'phone') {
            setinput_replace_regex([/[a-zA-Z`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""])
            setinput_format_validation_regex(/^\d{10,}(?:,\d{10,})*$/)
        }
        if (props.inputtype === 'username') {
            setinput_replace_regex([/[`~!@#$%^&*()\ \ |+\=?;:'",.<>\{\}\[\]\\\/]/gi, ""])
        }
        if (props.inputtype === 'amount') {
            setinput_replace_regex([/[a-zA-Z`~!@#$%^&*()\ \ |+\-=?;:'",<>\{\}\[\]\\\/]/gi, ""])
            setinput_format_validation_regex(/^\d+(\.\d{1,2})?$/)
        }

        if (props.setvalue !== "") {
            setinput_data(props.setvalue)
        }

        console.log(input_data.length, props.required, error_message)

    }, [])


    const Reformat_and_Validate = (data: any) => {

        let a = data.target.value.replace((input_replace_regex[0]), (input_replace_regex[1]))

        setinput_data(a)

        let b = input_format_validation_regex.test(input_data)

        let c = input_replace_regex[0].test((data.target.value).slice(-1))

        let d = (data.target.value.length === 1) ? data.target.value : (data.target.value).slice(-1)

        if (input_data.length === 0) {
            if ((props.required === true) && (props.presubmit_validation === true)) {
                seterror_message("Field is required.")
                props.valid(false)
            }
            else {
                seterror_message("")
                props.valid(true)
            }
        }
        else if (c === true) {
            seterror_message("This field can not contain ' " + d + " ' .")
            props.valid(false)
        }
        else if (a.length < input_min_length) {
            seterror_message("Enter minimum " + (input_min_length - a.length) + " more character" + (((input_min_length - a.length) === 1) ? "." : "s."))
            props.valid(false)
        }
        else if (b === false) {
            seterror_message(((props.label !== undefined) ? props.label : "Entry") + " is invalid.")
            props.valid(false)
        }
        else {
            seterror_message("")
            props.valid(true)
        }

        console.log(
            "a: " + a + '\n',
            "b: " + b + '\n',
            "c: " + c + '\n',
            "d: " + d + '\n',
            "(data.target.value).slice(-1): " + (data.target.value).slice(-1) + '\n',
            "input_replace_regex[0]: " + input_replace_regex[0] + '\n',
            "input_format_validation_regex: " + input_format_validation_regex + '\n',
            "input_data: " + input_data + '\n',
            "input_data.length: " + input_data.length + '\n',
            "props.required: " + props.required + '\n'
        )

    }

    return (
        <div className="input_main_container">

            <div className="input_outer_div">

                <div className={(input_data !== "") ? "top Label" : "Empty Label"}>{props.label}</div>

                <div className="input_innerLeft_div">{props.input_inner_leftprop}</div>

                <div className="input_innerCenter_div">

                    <input {...props}

                        className={((error_message !== "") || (props.required == true)) ? "textinput_box invalid_entry_container" : "textinput_box"}
                        value={input_data}
                        onChange={(data: any) => {
                            Reformat_and_Validate(data)
                        }}
                        onFocus={() => {
                            setisActive(true)
                            console.log(input_data.length, props.required, error_message, isActive)
                        }}
                        onBlur={() => {
                            setisActive(false)
                            if ((input_data.length === 0) && ((props.required === false) || (props.required === undefined))) {
                                seterror_message("")
                                props.valid(true)
                                // props.setinput_valid(valid)
                            }
                            console.log(input_data.length, props.required, error_message, isActive)
                        }}
                    />

                </div>

                <div className="input_innerRight_div">{props.input_inner_rightprop}</div>

            </div>

            <div className="invalid_entry">{error_message}</div>

        </div>
    )

}


export default TextField;