import React from "react";

const TextField = (props: any) => {

    if (props.type === "text")
        return <input {...props} />
    else
        return <textarea {...props} />

}

export default TextField;
