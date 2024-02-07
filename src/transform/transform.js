export const removeImport = (source) => {
    return source
        .replace(/import Component from 'vue-class-component';/, '')
        .replace(/import { Component, Emit, Prop, Vue } from 'vue-property-decorator';/, '');
};

export const addSetupToScript = (source) => {
    return source.replace('<script lang="ts">', '<script lang="ts" setup>');
};

export const transformGetToComputed = (source) => {
    return source.replaceAll(/get\s+(\w+)\(\)\s*{([^}]*)}/g, (match, propertyName, propertyBody) => {
        return `const ${propertyName} = computed(() => {${propertyBody}})`;
    });
};

export const removeComponentDecorator = (source) => {
    return source.replace(/@Component\s*\([\s\S]*?\)\s*\n/, '');
};

export const removeClassDeclaration = (source) => {
    return source.replace(/export\s+default\s+class\s+\w+\s+extends\s+Vue\s*{/, '')
        .replace(/}\s*<\/script>/, '</script>');
};

export const transformWatchers = (source) => {
    return source.replace(/@Watch\(['"](.+)['"]\)\s*(\w+)\(([^)]+)\)\s*{([\s\S]*?)}/g, (match, property, methodName, args, body) => {
        return `watch('${property}', (${args}) => {${body.trim()}});`;
    });
};

export const transformProps = (source) => {
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
