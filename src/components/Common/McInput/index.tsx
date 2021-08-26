import React, { useEffect, useState } from 'react'
import './style.css';
import '../../../components/app.css'
import * as down from '../../../assets/down.png'
import * as up from '../../../assets/up.png'
import * as eye from '../../../assets/eye-visibility.svg'
import * as eye_invisible from '../../../assets/eye-invisible.svg'
import { file_upload } from '../../../utils/actions';
import { useAuth } from '../../../store/authStore';


const McInput = (props: any) => {

    const { auth } = useAuth();

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const [passwordvisible, setPasswordvisible] = useState(false)


    const toggling = () => setDropdownOpen(!dropdownOpen)

    const onOptionClicked = (value: any) => {
        props.onChange(value)
        setDropdownOpen(false)
        // console.log("select option value :", props.value)
    }

    const [checkedOptionValue, setcheckedOptionValue] = useState('')

    const handleRadioChange = (e: any) => {
        // console.log(e)
        setcheckedOptionValue(e.target.value)
    }

    const [input_data, setinput_data] = useState(props.value)

    const [input_min_length, setinput_min_length] = useState(props.min_length)

    const [input_replace_regex, setinput_replace_regex] = useState([props.replace_regex, ""])

    const [input_format_validation_regex, setinput_format_validation_regex] = useState(props.format_validation_regex)

    const [isActive, setisActive] = useState(false)

    const [isValid, setIsValid] = useState(props.valid)

    const [error_message, seterror_message] = useState("")

    const [filedata, setfiledata] = useState("")

    const [inputpaddingclassname, setInputPaddingClassName] = useState("")


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

        if ((props.valid === undefined) && (props.required !== true)) {
            setIsValid(true)
        }

        if (props.input_inner_leftprop !== undefined) {
            setInputPaddingClassName(" padleft")
        }

        if ((props.input_inner_rightprop !== undefined) || (props.type === "password")) {
            setInputPaddingClassName(" padright")
        }

        if ((props.input_inner_leftprop !== undefined) && ((props.input_inner_rightprop !== undefined) || (props.type === "password"))) {
            setInputPaddingClassName(" padleft padright")
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
        props.onchange(a)

        let b = input_format_validation_regex.test(a)

        let c = input_replace_regex[0].test((data.target.value).slice(-1))

        let d = (data.target.value.length === 0) ? data.target.value : (data.target.value).slice(-1)

        if ((String(a).length === 0) && (props.required === true) && (props.sendcheck === true)) {
            seterror_message("Field is required.")
            props.valid(false)
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


    const onChangeHandler = (data: any) => {
        console.log(data.target.files[0])
        let file = data.target.files[0]
        console.log(file);

        let formdata = new FormData()
        formdata.append("file", file)
        file_upload(Callback, auth, formdata)
    }

    const Callback = async (data: any, errorresponse: any) => {
        if (data.status === 201) {
            console.log("respnse :", data, props)
            // props.valid(data.data.file)
            props.onchange(data.data.file)
            // Reformat_and_Validate(data.data.file)
        }
        else {
            console.log('error ' + JSON.stringify(data));
            console.log('error ' + JSON.stringify(errorresponse));
        }
    };


    return (
        <div className="input_box_wrapper">

            <div className="input_outer_div">

                <div className={((input_data !== "") || (isActive === true)) ? "top Label" : "Empty Label"} >{props.label}</div>

                <div className="input_innerLeft_div">
                    {props.input_inner_leftprop}
                </div>

                <div className={"input_innerCenter_div" + inputpaddingclassname}>

                    {(props.type === "picker") &&
                        <div className={((props.valid === false) && (props.required === true)) ? "DropDownHeader invalid_entry_container" : "DropDownHeader"}
                            onClick={toggling}>
                            {props.value || props.name}
                        </div>
                    }

                    {(props.type === "file") &&
                        <>
                            <input type="text" id={props.id} value={props.value}
                                onChange={(data: any) => {
                                    props.onchange(data.target.value)
                                }} />
                            <input type="file" name="file" className="upload-btn" onChange={onChangeHandler} />
                        </>
                    }

                    {(props.type === "color_picker") &&
                        <>
                            <input type="text" id={props.id} value={props.value}
                                onChange={(data: any) => {
                                    props.onchange(data.target.value)
                                }} />
                            <input type="color" className="color_picker"
                                value={props.value}
                                onChange={(data: any) => {
                                    props.onchange(data.target.value)
                                }} />
                        </>
                    }

                    {(props.type === "text") &&
                        <input {...props}
                            className={((props.valid === false) && (props.required === true)) ? "textinput_box invalid_entry_container" : "textinput_box"}
                            value={props.value}
                            onChange={(data: any) => {
                                Reformat_and_Validate(data)
                            }}
                            onFocus={() => {
                                setisActive(true)
                                // console.log(props.onchange, input_data, String(input_data).length, props.required, error_message, isActive, props.presubmit_validation)
                            }}
                            onBlur={() => {
                                setisActive(false)
                                if ((String(input_data).length === 0) && ((props.required === false) || (props.required === undefined))) {
                                    seterror_message("")
                                    props.valid(true)
                                    // props.setinput_valid(valid)
                                }
                                // console.log(props.onchange, input_data, String(input_data).length, props.required, error_message, isActive, props.presubmit_validation)
                            }} />
                    }

                    {(props.type === "password") &&
                        <input {...props} type={passwordvisible ? "text" : "password"}
                            className={((props.valid === false) && (props.required === true)) ? "textinput_box invalid_entry_container" : "textinput_box"}
                            value={props.value}
                            onChange={(data: any) => {
                                Reformat_and_Validate(data)
                            }}
                            onFocus={() => {
                                setisActive(true)
                                // console.log(props.onchange, input_data, String(input_data).length, props.required, error_message, isActive, props.presubmit_validation)
                            }}
                            onBlur={() => {
                                setisActive(false)
                                if ((String(input_data).length === 0) && ((props.required === false) || (props.required === undefined))) {
                                    seterror_message("")
                                    props.valid(true)
                                    // props.setinput_valid(valid)
                                }
                                // console.log(props.onchange, input_data, String(input_data).length, props.required, error_message, isActive, props.presubmit_validation)
                            }} />
                    }

                    {(props.type === "textarea") &&
                        <textarea {...props}
                            className={((props.valid === false) && (props.required === true)) ? "textinput_box invalid_entry_container" : "textinput_box"}

                            value={props.value}
                            onChange={(data: any) => {
                                Reformat_and_Validate(data)
                            }}
                            onFocus={() => {
                                setisActive(true)
                                // console.log(props.onchange, input_data, String(input_data).length, props.required, error_message, isActive, props.presubmit_validation)
                            }}
                            onBlur={() => {
                                setisActive(false)
                                if ((String(input_data).length === 0) && ((props.required === false) || (props.required === undefined))) {
                                    seterror_message("")
                                    props.valid(true)
                                    // props.setinput_valid(valid)
                                }
                                // console.log(props.onchange, input_data, String(input_data).length, props.required, error_message, isActive, props.presubmit_validation)
                            }} />
                    }

                    {(props.type === "checkbox") &&
                        <div className={((props.valid === false) && (props.required == true)) ? "invalid_entry_container" : ""}
                        >
                            {props?.options?.map((option: any) => (
                                <div className={"checkbox_option_wrapper"}>
                                    <input {...props}
                                        type="checkbox"
                                        id={props.id}
                                        className="checkbox"
                                        name={option.value}
                                        value={option.value}
                                        onChange={(e) => {
                                            // console.log(e);
                                            onOptionClicked(option.value)
                                            seterror_message("")
                                            props.valid(true)
                                            setinput_data(option.value)

                                        }} />
                                    <div className="checkbox_text">{option.value}</div>
                                </div>
                            ))}

                        </div>
                    }

                    {(props.type === "radio") &&
                        <div className={((props.valid === false) && (props.required == true)) ? " invalid_entry_container" : ""}
                        >

                            {props.options?.map((option: any) => (
                                <div className={"checkbox_option_wrapper"}>
                                    <input {...props}
                                        type="radio"
                                        id={props.id + option.value}
                                        className="checkbox"
                                        name={props.id}
                                        value={option.value}
                                        checked={checkedOptionValue === option.value}
                                        onChange={(e) => {
                                            console.log(e);
                                            handleRadioChange(e)
                                            seterror_message("")
                                            props.valid(true)
                                            setinput_data(option.value)
                                        }}
                                    />
                                    <div className="checkbox_text">{option.value}</div>
                                </div>
                            ))}

                        </div>
                    }

                </div>

                <div className="input_innerRight_div">
                    {((props.type !== "picker") && (props.type !== "password")) &&
                        <div className={"input_innerRight_icon"}>
                            {props.input_inner_rightprop}
                        </div>
                    }
                    {(props.type === "picker") &&
                        <div className={"input_innerRight_icon"} onClick={toggling} onBlur={toggling} onFocus={toggling}>
                            <img className='down_up_arrow_icon' src={dropdownOpen ? up : down} />
                        </div>
                    }
                    {(props.type === "password") &&
                        <div className={"input_innerRight_icon"} onClick={() => { setPasswordvisible(!passwordvisible) }}>
                            <img className="Password_visibility_icon" src={passwordvisible ? eye : eye_invisible} />
                        </div>
                    }
                </div>

            </div >

            {dropdownOpen && (
                <div className="DropDownListContainer">
                    <div className={((props.valid === false) && (props.required == true)) ? "DropDownList invalid_entry_container" : "DropDownList"}
                    >
                        {props.options?.map((option: any) => (
                            <div className="dropdown_option"
                                onClick={(data: any) => {
                                    onOptionClicked(option)
                                    seterror_message("")
                                    props.valid(true)
                                    setinput_data(option.value)
                                    // console.log("clicked");
                                }}
                                key={option.key}>
                                {option.value}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="invalid_entry" >{
                ((String(input_data).length === 0) && (props.required === true) && (props.sendcheck === true)) ?
                    "Field is required."
                    :
                    error_message
            }
            </div>

            <div className="field_description">

                <div className='description_text' >
                    {props.description}
                </div>

            </div>

        </div>
    );


}
export default McInput;