import React, { useEffect, useState } from 'react'
import './style.css';
import '../../../components/app.css'

const TextField = (props: any) => {


    const [input_data, setinput_data] = useState(props.value)

    const [input_min_length, setinput_min_length] = useState(props.min_length)

    const [input_replace_regex, setinput_replace_regex] = useState([props.replace_regex, ""])

    const [input_format_validation_regex, setinput_format_validation_regex] = useState(props.format_validation_regex)

    const [isActive, setisActive] = useState(false)

    const [error_message, seterror_message] = useState("Field is required.")



    useEffect(() => {

        if (props.value === undefined) {
            setinput_data("")
        }

        if (props.min_length === undefined) {
            setinput_min_length(0)
        }
        if (props.replace_regex === undefined) {
            setinput_replace_regex([/'$^'/, ""])
        }
        if (props.format_validation_regex === undefined) {
            setinput_format_validation_regex(/^/)
        }

        // if (props.presubmit_validation === 'true') {
        //     Reformat_and_Validate(input_data)
        //     console.log("presubmitValidation started")
        // }

        // console.log(props.presubmit_validation)

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
            setinput_format_validation_regex(/^\d{9,}(?:,\d{9,})*$/)
        }
        if (props.inputtype === 'username') {
            setinput_replace_regex([/[`~!#$%^&*()\ \ |+\=?;:'",<>\{\}\[\]\\\/]/gi, ""])
        }
        if (props.inputtype === 'amount') {
            setinput_replace_regex([/[a-zA-Z`~!@#$%^&*()\ \ |+\-=?;:'",<>\{\}\[\]\\\/]/gi, ""])
            setinput_format_validation_regex(/^\d+(\.\d{1,2})?$/)
        }



        switch (props.inputtype) {

            case 'firstname':
                setinput_replace_regex([/[0-9`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""]);
                break;

            case 'firstname':
                setinput_replace_regex([/[0-9`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""]);
                break;

            case 'email':
                setinput_replace_regex([/[`~!#$%^&*()\ \ |+\-=?;:'",<>\{\}\[\]\\\/]/gi, ""])
                setinput_format_validation_regex(/^\w.+@[a-zA-Z_]+?\.[a-zA-Z]/)
                break;

            case 'phone':
                setinput_replace_regex([/[a-zA-Z`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""])
                setinput_format_validation_regex(/^\d{9,}(?:,\d{9,})*$/)
                break;

            case 'username':
                setinput_replace_regex([/[`~!#$%^&*()\ \ |+\=?;:'",<>\{\}\[\]\\\/]/gi, ""])
                break;

            case 'amount':
                setinput_replace_regex([/[a-zA-Z`~!@#$%^&*()\ \ |_+\-=?;:'",<>\{\}\[\]\\\/]/gi, ""]);
                setinput_format_validation_regex(/^\d+(\.\d{1,2})?$/)
                break;

        }

        // console.log(input_data.length, props.required, error_message)

    }, [])


    const Reformat_and_Validate = (data: any) => {

        let a = data.target.value.replace((input_replace_regex[0]), (input_replace_regex[1]))

        setinput_data(a)
        props.onChange(a)

        let b = input_format_validation_regex.test(a)

        let c = input_replace_regex[0].test((data.target.value).slice(-1))

        let d = (data.target.value.length === 0) ? data.target.value : (data.target.value).slice(-1)

        if (String(a).length === 0) {
            if (props.valid === true) {
                seterror_message("Field is required.")
                props.setvalid(true)
            }
            else {
                seterror_message("")
                props.setvalid(false)
            }
        }
        else if (c === true) {
            seterror_message("This field can not contain ' " + d + " ' .")
            props.setvalid(true)
        }
        else if (a.length < input_min_length) {
            seterror_message("Enter minimum " + (input_min_length - a.length) + " more character" + (((input_min_length - a.length) === 1) ? "." : "s."))
            props.setvalid(true)
        }
        else if (b === false) {
            seterror_message(((props.label !== undefined) ? props.label : "Entry") + " is invalid.")
            props.setvalid(true)
        }
        else {
            seterror_message("")
            props.setvalid(false)
        }


        // console.log(
        //     "a: " + a + '\n',
        //     "b: " + b + '\n',
        //     "c: " + c + '\n',
        //     "d: " + d + '\n',
        //     "(data.target.value).slice(-1): " + (data.target.value).slice(-1) + '\n',
        //     "input_replace_regex[0]: " + input_replace_regex[0] + '\n',
        //     "input_format_validation_regex: " + input_format_validation_regex + '\n',
        //     "input_data: " + input_data + '\n',
        //     "input_data.length: " + input_data.length + '\n',
        //     "props.required: " + props.required + '\n'
        // )

    }

    return (
        <div className="input_main_container">

            <div className="input_outer_div">

                <div className={((input_data !== "") || (isActive === true)) ? "top Label" : "Empty Label"}>{props.label}</div>

                <div className="input_innerLeft_div">{props.input_inner_leftprop}</div>

                <div className="input_innerCenter_div">

                    <input {...props}
                        className={((error_message !== "") || (props.required === true)) ? "textinput_box invalid_entry_container" : "textinput_box"}
                        value={props.value}
                        onChange={(data: any) => {
                            Reformat_and_Validate(data)
                        }}
                        onFocus={() => {
                            setisActive(true)
                            console.log(props.setvalue, input_data, String(input_data).length, props.required, error_message, isActive, props.presubmit_validation)
                        }}
                        onBlur={() => {
                            setisActive(false)
                            if ((String(input_data).length === 0) && ((props.required === false) || (props.required === undefined))) {
                                seterror_message("")
                                props.setvalid(true)
                                // props.setinput_valid(valid)
                            }
                            console.log(props.setvalue, input_data, String(input_data).length, props.required, error_message, isActive, props.presubmit_validation)
                        }}
                    />

                </div>

                <div className="input_innerRight_div">{props.input_inner_rightprop}</div>

            </div>
            {((props.valid === true) && (props.required === true)) ?
                <div className="invalid_entry">{error_message}</div>
                : null
            }
        </div>
    )

}


export default TextField;