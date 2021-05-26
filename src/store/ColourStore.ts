import { Store, useStore } from "./Store";


export class ColourItem {
primary : String;
    constructor(o: {
        primary: String;
    }) {
        this.primary = o.primary;
    }
}

export const ColourObjects = new Store<ColourItem | false>(false);

export const ColourObject = () => {
    const [Colour, setColour] = useStore(ColourObjects);

    return {
        Colour, setColour,

        async loadColour() {
            setColour({"primary":""});
        },

    }

}