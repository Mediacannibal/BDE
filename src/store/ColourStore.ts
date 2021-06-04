import { Store, useStore } from './Store'

export class ColourItem {
  id: String
  selected: boolean
  colour: String
  constructor(o: { id: String; selected: boolean; colour: String }) {
    this.id = o.id
    this.selected = o.selected
    this.colour = o.colour
  }
}
export class ColourObjItem {
  color_1: String
  color_2: String
  color_3: String
  color_4: String
  color_5: String
  color_6: String
  color_7: String
  color_8: String
  color_9: String
  color_10: String
  color_11: String
  color_12: String
  color_13: String
  color_14: String
  color_15: String
  color_16: String
  color_17: String
  color_18: String
  color_19: String
  color_20: String
  color_21: String
  color_22: String
  color_23: String
  color_24: String
  color_25: String

  constructor(o: {
    color_1: String
    color_2: String
    color_3: String
    color_4: String
    color_5: String
    color_6: String
    color_7: String
    color_8: String
    color_9: String
    color_10: String
    color_11: String
    color_12: String
    color_13: String
    color_14: String
    color_15: String
    color_16: String
    color_17: String
    color_18: String
    color_19: String
    color_20: String
    color_21: String
    color_22: String
    color_23: String
    color_24: String
    color_25: String
  }) {
    this.color_1 = o.color_1
    this.color_2 = o.color_2
    this.color_3 = o.color_3
    this.color_4 = o.color_4
    this.color_5 = o.color_5
    this.color_6 = o.color_6
    this.color_7 = o.color_7
    this.color_8 = o.color_8
    this.color_9 = o.color_9
    this.color_10 = o.color_10
    this.color_11 = o.color_11
    this.color_12 = o.color_12
    this.color_13 = o.color_13
    this.color_14 = o.color_14
    this.color_15 = o.color_15
    this.color_16 = o.color_16
    this.color_17 = o.color_17
    this.color_18 = o.color_18
    this.color_19 = o.color_19
    this.color_20 = o.color_20
    this.color_21 = o.color_21
    this.color_22 = o.color_22
    this.color_23 = o.color_23
    this.color_24 = o.color_24
    this.color_25 = o.color_25
  }
}

export const ColourObjects = new Store<ColourItem[] | false>(false)
export const ColObj = new Store<ColourObjItem | false>(false)

export const ColourObject = () => {
  const [Colour, setColour] = useStore(ColourObjects)
  const [colourObj, setcolourObj] = useStore(ColObj)
  return {
    Colour,
    setColour,
    colourObj,
    setcolourObj,
    async loadColour() {
      setColour([
        {
          id: '--color_1',
          selected: true,
          colour: '#154360',
        },
        {
          id: '--color_2',
          selected: true,
          colour: '#01003c',
        },
        {
          id: '--color_3',
          selected: true,
          colour: '#ff0000',
        },
        {
          id: '--color_4',
          selected: true,
          colour: '#242446',
        },
        {
          id: '--color_5',
          selected: true,
          colour: '#ffffff',
        },
        {
          id: '--color_6',
          selected: true,
          colour: '#00000019',
        },
        {
          id: '--color_7',
          selected: true,
          colour: '#60ce80',
        },
        {
          id: '--color_8',
          selected: true,
          colour: '#fcfeff',
        },
        {
          id: '--color_9',
          selected: true,
          colour: '#eac952',
        },
        {
          id: '--color_10',
          selected: true,
          colour: '#60ce80',
        },
        {
          id: '--color_11',
          selected: true,
          colour: '#dc0000',
        },
        {
          id: '--color_12',
          selected: true,
          colour: '#efecec',
        },
        {
          id: '--color_13',
          selected: true,
          colour: '#00008b',
        },
        {
          id: '--color_14',
          selected: true,
          colour: '#449698',
        },
        {
          id: '--color_15',
          selected: true,
          colour: '#ddd',
        },
        {
          id: '--color_16',
          selected: true,
          colour: '#378587',
        },
        {
          id: '--color_17',
          selected: true,
          colour: '#639A4D',
        },
        {
          id: '--color_18',
          selected: true,
          colour: '#fc595a',
        },
        {
          id: '--color_19',
          selected: true,
          colour: '#4fb5ff',
        },
        {
          id: '--color_20',
          selected: true,
          colour: '#dcfd47',
        },
        {
          id: '--color_21',
          selected: true,
          colour: '#000000',
        },
        {
          id: '--color_22',
          selected: true,
          colour: '#e06a6a19',
        },
        {
          id: '--color_23',
          selected: true,
          colour: '#acfc91c2',
        },
        {
          id: '--color_24',
          selected: true,
          colour: '#e0e0e0',
        },
        {
          id: '--color_25',
          selected: true,
          colour: '#757588',
        },
      ])
      setcolourObj({
        color_1: '#154360',
        color_2: '#01003c',
        color_3: '#ff0000',
        color_4: '#242446',
        color_5: '#ffffff',
        color_6: '#00000019',
        color_7: '#60ce80',
        color_8: '#fcfeff',
        color_9: '#eac952',
        color_10: '#60ce80',
        color_11: '#dc0000',
        color_12: '#efecec',
        color_13: '#00008b',
        color_14: '#449698',
        color_15: '#ddd',
        color_16: '#378587',
        color_17: '#639A4D',
        color_18: '#fc595a',
        color_19: '#4fb5ff',
        color_20: '#dcfd47',
        color_21: '#000000',
        color_22: '#e06a6a19',
        color_23: '#acfc91c2',
        color_24: '#e0e0e0',
        color_25: '#757588',
      })
    },
  }
}
