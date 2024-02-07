const elementSource = document.querySelector('#source-text')
const elementOutput = document.querySelector('#output-text')
const elementCopyOutput = document.querySelector('#output-copy')
const elementNotification = document.querySelector('#notification')

const CLASS_ACTIVE_NOTIFICATION = 'active'
const LOCAL_STORAGE_SOURCE_TEXT = 'LOCAL_STORAGE_SOURCE_TEXT'

const removeImport = (source) => {
    return source
        .replace(/import\s+Component\s+from\s+'vue-class-component';\n/, '')
        .replace(/import\s+\{ Component, Emit, Prop, Vue \}\s+from\s+'vue-property-decorator';\n/, '');
};

const addSetupToScript = (source) => {
    return source.replace(/<script\s+lang="ts">/, '<script lang="ts" setup>');
};

const transformGetToComputed = (source) => {
    return source.replaceAll(/get\s+(\w+)\(\)\s*{([^}]*)}/g, (match, propertyName, propertyBody) => {
        return `const ${propertyName} = computed(() => {${propertyBody}})`;
    });
};

const removeComponentDecorator = (source) => {
    return source.replace(/@Component\s*\([\s\S]*?\)\s*\n/, '');
};

const removeClassDeclaration = (source) => {
    return source.replace(/export\s+default\s+class\s+\w+\s+extends\s+Vue\s*{/, '')
        .replace(/}\s*<\/script>/, '</script>');
};

const transformWatchers = (source) => {
    return source.replace(/@Watch\(['"](.+)['"]\)\s*(\w+)\(([^)]+)\)\s*{([\s\S]*?)}/g, (match, property, methodName, args, body) => {
        return `watch('${property}', (${args}) => {${body.trim()}});`;
    });
};

const transformProps = (source) => {
    let output = source;

    const propAnnotations = output.match(/@Prop\(([^)]*)\)\s+(\w+)!:([^;]+);/g);

    if (!propAnnotations) {
        return output;
    }

    const propsInterface = propAnnotations.map((annotation) => {
        const [, options, propName, propType] = annotation.match(/@Prop\(([^)]*)\)\s+(\w+)!:([^;]+);/);
        const propsOptions = options.trim() === '' ? '' : `, ${options.trim()}`;
        return `${propName}${propsOptions}: ${propType}`;
    });

    const propsInterfaceString = `interface Props {\n  ${propsInterface.join('\n  ')}\n}\n`;

    output = output.replace(/(import[^]*\n)(@Component)/, `$1${propsInterfaceString}\n$2`);

    output = output.replace(/@Prop\(([^)]*)\)\s+(\w+)!:([^;]+);/g, (match, options, propName, propType) => {
        const propsOptions = options.trim() === '' ? '' : `, ${options.trim()}`;
        return `const ${propName} = withDefaults(defineProps<Props>(), ${propType.replace(/[\r\n]/g, '')}${propsOptions});`;
    });

    return output;
};

const transformToComposition = (source) => {
    let output = source

    const functions = [
        removeImport,
        addSetupToScript,
        transformGetToComputed,
        removeComponentDecorator,
        removeClassDeclaration,
        transformWatchers,
        transformProps,
    ]

    for (const func of functions) {
        output = func(output)
    }

    return output
}

const changeSource = (value) => {
    localStorage.setItem(LOCAL_STORAGE_SOURCE_TEXT, value)
    elementOutput.innerText = transformToComposition(value)
}


const clickCopyOutput = () => {
    elementNotification.classList.add(CLASS_ACTIVE_NOTIFICATION)
    navigator.clipboard.writeText(elementOutput.innerText)

    setTimeout(() => {
        elementNotification.classList.remove(CLASS_ACTIVE_NOTIFICATION)
    },1000)
}

const initApp = () => {
    const lastSourceText = localStorage.getItem(LOCAL_STORAGE_SOURCE_TEXT) || ''

    elementSource.textContent = lastSourceText
    changeSource(lastSourceText)
}

elementSource.addEventListener('input', event => changeSource(event.target.value))
elementCopyOutput.addEventListener('click', clickCopyOutput)

document.addEventListener('DOMContentLoaded', initApp)