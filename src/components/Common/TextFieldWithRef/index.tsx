import React from "react";
import './style.css';
import '../../../components/app.css'

const TextField = (props: any) => {

    return (
        <div>

            <label className={props.isActive ? "Active" : ""} htmlFor={props.labelid}>{props.label}</label>

            <div className="input_outer_div">

                <div className="input_innerLeft_div">{props.input_inner_leftprop}</div>

                <div className="input_innerCenter_div">
                    {!(props.type === "password") ?
                        <>
                            {(props.type === "text") ?
                                <input {...props} /> : <textarea {...props} />
                            }
                        </>
                        :
                        <input {...props} />
                    }
                </div>

                <div className="input_innerRight_div">{props.input_inner_rightprop}</div>

            </div>

        </div>
    )

}


export default TextField;
