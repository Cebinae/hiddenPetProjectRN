import { store } from "../../../store/store";
import { getResponse } from "../../createRequest";
import { setDisplayable } from "../../../store/resultingSlice";



export let defineState = (section: number): object => {   //to use in other utils
  let state = {
    1: store.getState().FirstPersistedSection,
    2: store.getState().SecondPersistedSection,
    3: store.getState().ThirdPersistedSection,
  };
  // console.log(state[section])
  return state[section];
};

export let pickTitles = (state: object): Array<string> => {     //return all selected titles as array
  let results: Array<string> = [];

  let titles = [
    state.first,
    state.second,
    state.third,
    state.fourth,
    state.fifth,
  ];
  titles.forEach((title) => {
    title.value ? results.push(title.value) : null;
  });
  return results;
};

export let pickFilters = (state: object): Array<boolean | number> => { //same for filters
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

export let fetchTitle = async( title:string)=>{              //obviously, getting array with response objects
  const options = {
    Title:title,
    Limit:10000
  }
  let resp = await getResponse(undefined, undefined, 'exchange/v1/offers-by-title/', options, 'fetchTitle in fethLoop')
  return resp.data.objects
}

export const sleep = (time: number) => new Promise((resolve) => setTimeout(() => resolve(), time)); //for delay

export let createLocalPool = ():object=>{     //temprorary pool to avoid redux, define at top of bg service
  let dataPool = {}

  let allTitles:Array<string> = [...pickTitles(defineState(1)), ...pickTitles(defineState(2)), ...pickTitles(defineState(3))]

  allTitles.forEach((title)=>{
    Object.assign(dataPool, {[title]:[null]})
  })
  console.log(allTitles)
  console.log(dataPool)
  return dataPool
  }

