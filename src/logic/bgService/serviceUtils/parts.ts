import { store } from "../../../store/store";
import { getResponse } from "../../createRequest";
import { setDisplayable } from "../../../store/resultingSlice";



export let defineState = (section: number): object => {
  let state = {
    1: store.getState().FirstPersistedSection,
    2: store.getState().SecondPersistedSection,
    3: store.getState().ThirdPersistedSection,
  };
  // console.log(state[section])
  return state[section];
};

export let pickTitles = (state: object): Array<string> => {
  let results: Array<string> = [];

  let titles = [
    state.first,
    state.second,
    state.third,
    state.fourth,
    state.fifth,
  ];
  let getReadyTitles = titles.forEach((title) => {
    title.value ? results.push(title.value) : null;
  });

  return results;
};

export let pickFilters = (state: object): Array<boolean | number> => {
  return [
    state.minStickerYear,
    state.maxStickerYear,
    state.FN,
    state.MW,
    state.FT,
    state.WW,
    state.BS,
    state.minDiscount,
  ];
};

export let fetchTitle = async( title:string)=>{
  const options = {
    Title:title,
    Limit:10000
  }
  let resp = await getResponse(undefined, undefined, 'exchange/v1/offers-by-title/', options, 'fetchTitle in fethLoop')
  return resp.data.objects
}

export const sleep = (time: number) => new Promise((resolve) => setTimeout(() => resolve(), time));


export let createLocalPool = ():object=>{
  let dataPool = {}

  let allTitles:Array<string> = [...pickTitles(defineState(1)), ...pickTitles(defineState(2)), ...pickTitles(defineState(3))]

  allTitles.forEach((title)=>{
    Object.assign(dataPool, {[title]:[null]})
  })
  console.log(allTitles)
  console.log(dataPool)
  return dataPool
  }

export let toDisplayablePool = (payload:Array<object>)=>{
    if (payload.length>0){
        let prevValue = store.getState().resulting.displayableItems
        let valueToBeSet = [...prevValue, ...payload]
        store.dispatch(setDisplayable(valueToBeSet))
        }  
}
