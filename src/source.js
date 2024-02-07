import {updateOutput} from "./output.js";

const LOCAL_STORAGE_SOURCE_TEXT = 'LOCAL_STORAGE_SOURCE_TEXT'

const elementSource = document.querySelector('#source-text')

const changeSource = (source) => {
    localStorage.setItem(LOCAL_STORAGE_SOURCE_TEXT, source)
    updateOutput(source)
}


const initSource = () => {
    const lastSourceText = localStorage.getItem(LOCAL_STORAGE_SOURCE_TEXT) || ''

    elementSource.textContent = lastSourceText
    changeSource(lastSourceText)
}

document.addEventListener('DOMContentLoaded', initSource)
elementSource.addEventListener('input', event => changeSource(event.target.value))
