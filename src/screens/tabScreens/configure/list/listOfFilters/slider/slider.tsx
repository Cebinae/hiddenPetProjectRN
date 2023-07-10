import {View, Text, TextInput, PanResponder} from 'react-native'
import * as React from 'react';
import RangeSlider from 'rn-range-slider';
import Thumb from './Thumb';
import Rail from './rail';
import RailSelected from './railSelected';
import { useContext, useRef} from 'react';
import { sectionContext } from '../../../setLists';
import store from '../../../../../../store/store';


export default function Slider(props:{
  toggleTitle:any
}){

  let returnLow = (sectionID: number)=>{
    let sectionsMap = {
      1:store.getState().FirstPersistedSection.minStickerYear,
      2:store.getState().SecondPersistedSection.minStickerYear,
      3:store.getState().ThirdPersistedSection.minStickerYear
    }
    return sectionsMap[sectionID]
  }


  let returnHigh = (sectionID: number)=>{
    let sectionsMap = {
      1:store.getState().FirstPersistedSection.maxStickerYear,
      2:store.getState().SecondPersistedSection.maxStickerYear,
      3:store.getState().ThirdPersistedSection.maxStickerYear
    }
    return sectionsMap[sectionID]
  }


let [values, setValues] = React.useState({low:14, high:23}) 

let isFisrtRender = useRef(true)
let renderCounter = useRef(0)


    React.useEffect(()=>{
      renderCounter.current++
      console.log('rednered '+renderCounter.current+' times')

      let payloadLow = returnLow(sectionID)
      let payloadHigh = returnHigh(sectionID)

      console.log('low is'+ payloadLow)
      console.log('high is '+ payloadHigh)


      let setState = ()=>{setValues({low:payloadLow, high: payloadHigh})}

      isFisrtRender.current? setState():console.log('wrong')
      isFisrtRender.current=false                   
    }, [])


let sectionID = useContext(sectionContext)


    const renderThumb = React.useCallback(() => <Thumb/>, []);
    const renderRail = React.useCallback(() => <Rail/>, []);
    const renderRailSelected = React.useCallback(() => <RailSelected/>, []);
    const renderLabel = React.useCallback((value)=><Text style={{fontSize:22}}>{value}</Text>, [])

    const handleValueChange = React.useCallback((low:number, high:number) => {
      setValues({low:low, high:high})
      enum sections {
        'FirstPersistedSection'=1,
        'SecondPersistedSection'=2,
        'ThirdPersistedSection'=3
      }
      store.dispatch({
        type:`${sections[sectionID]}/setMinYear`, payload : low
      })
      store.dispatch({
        type:`${sections[sectionID]}/setMaxYear`, payload : high
      })
    }, []);



const max = 23
const min= 14

let onStart = ()=>{
  props.toggleTitle('')
}

let onEnd = ()=>{
  props.toggleTitle('Select sticker years')
}



    return(      
        <RangeSlider    
            style = {{height:'60%', width:'100%',  margin:0, padding:0, top:'10%'}}
            floatingLabel={true}
            allowLabelOverflow={true}
            renderLabel={renderLabel}
            step={1}
            min={min}
            max={max}
            low={values.low}
            high={values.high}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            onValueChanged={handleValueChange}
            onSliderTouchStart={onStart}
            onSliderTouchEnd= {onEnd}
        ></RangeSlider>  
    )
}