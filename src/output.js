import {notifyAboutCopy} from "./notification.js";
import {transformToComposition} from "./transform";

const elementOutput = document.querySelector('#output-text')
const elementCopyOutput = document.querySelector('#output-copy')

export const updateOutput = (source) => {
    elementOutput.innerText = transformToComposition(source)
}

export const clickCopyOutput = () => {
    navigator.clipboard.writeText(elementOutput.innerText)

    notifyAboutCopy()
}

elementCopyOutput.addEventListener('click', clickCopyOutput)