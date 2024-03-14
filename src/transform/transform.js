export const removeImport = (source) => {
    return source
        .replace(/import Component from 'vue-class-component';/, '')
        .replace(/import\s+\{(?:[^{}]*\s*,\s*)*[^{}]*}\s+from\s+'vue-property-decorator';/, '');
};

export const addSetupToScript = (source) => {
    return source.replace(/<script\s*(?:lang=["']?ts["']?)?\s*>/gm, (match) => match.replace('>', ' setup>'));
};

export const transformGetToComputed = (source) => {
    return source.replace(/get\s+(\w+)\(\)\s*{([^}]*)}/g, (match, propertyName, propertyBody) => {
        return `const ${propertyName} = computed(() => {${propertyBody}})`;
    });
};

export const removeComponentDecorator = (source) => {
    return source.replace(/@Component\({[\D\d:']+}\)/, '');
};

export const removeClassDeclaration = (source) => {
    return source
      .replace(/}\s*<\/script>/, '</script>')
      .replace(/export\s+default\s+class\s+\w+\s+extends\s+Vue\s*{/, '')

};

export const transformWatchers = (source) => {
    return source.replace(/@Watch\(['"](.+)['"]\)\s*(\w+)\(([^)]+)\)\s*{([\s\S]*?)}/g, (match, property, methodName, args, body) => {
        return `watch('${property}', (${args}) => {${body.trim()}});`;
    });
};

export const transformProps = (source) => {
    const propRegex = /@Prop\(([^)]*)\)\s+(\w+)!:([^;]+);/g;
    const sourceRegex = /^([^@]+)/gm;
    const propsObject = {};

    let newSource = source;
    const [beforeText, afterText] = source.match(sourceRegex) || ['','']

    for (const match of source.matchAll(propRegex)) {
        const [, props, propName, propType] = match;
        const defaultMatch = props.match(/default:\s*(.+),/);
        const requiredMatch = props.match(/required:\s*(.+)?,/);

        const defaultValue = defaultMatch?.[1];
        const requiredValue = requiredMatch?.[1];

        propsObject[propName] = {
            type: propType.trim(),
            default: defaultValue,
            required: requiredValue
        };

        newSource = newSource.replace(match[0], '');
    }

    if (!Object.keys(propsObject).length) {
        return source;
    }

    let interfaceCode = 'interface Props {\n';
    for (const propName in propsObject) {
        interfaceCode += `  ${propName}${propsObject[propName].required ? '' : '?'}: ${propsObject[propName].type},\n`;
    }
    interfaceCode += '}\n\n';

    let propsInitialization = 'const props = withDefaults(defineProps<Props>(), {\n';
    for (const propName in propsObject) {
        if (propsObject[propName].default !== undefined) {
            propsInitialization += `  ${propName}: ${propsObject[propName].default},\n`;
        }
    }
    propsInitialization += '});';

    return `${beforeText}\n${interfaceCode}${propsInitialization}\n${afterText}`;
};

export const transformToComposition = (source) => {
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
