const elementSource = document.querySelector('#source-text')
const elementOutput = document.querySelector('#output-text')
const elementCopyOutput = document.querySelector('#output-copy')
const elementNotification = document.querySelector('#notification')

const CLASS_ACTIVE_NOTIFICATION = 'active'

const sourceCodeWithProps = `

`;

const transformProps = (source) => {
    return source.replace(/@Prop\(([\s\S]*?)\)\s+(\w+):/g, (match, propOptions, propName) => {
        const options = propOptions
            .replace(/\s+/g, '')
            .replace(/(\w+):/g, '"$1":')
            .replace(/'/g, '"');

        return `const ${propName} = defineProps(${options});`;
    });
};

const transformToComposition = (source) => {
    let output = source
    output = transformProps(output)

    return output
}

const changeSource = (value) => {
    elementOutput.innerText = transformToComposition(value)
}


const clickCopyOutput = () => {
    elementNotification.classList.add(CLASS_ACTIVE_NOTIFICATION)
    navigator.clipboard.writeText(elementOutput.innerText)

    setTimeout(() => {
        elementNotification.classList.remove(CLASS_ACTIVE_NOTIFICATION)
    },1000)
}

elementSource.addEventListener('input', event => changeSource(event.target.value))
elementCopyOutput.addEventListener('click', clickCopyOutput)

document.addEventListener('DOMContentLoaded', () => {
    elementSource.textContent = sourceCodeWithProps
    changeSource(elementSource.textContent)
})