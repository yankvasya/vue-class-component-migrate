export const examplesWithSetup =
  [
    {
      source: '<script lang="ts">',
      expectedOutput: '<script lang="ts" setup>'
    },
    {
      source: '<script>',
      expectedOutput: '<script setup>'
    }
  ]

export const examplesRemovedImports =
  [
    {
      source:  `import { Component, Emit, Prop, Vue } from 'vue-property-decorator';`,
      expectedOutput: ''
    },
    {
      source:
`import Vue from 'vue';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import Icon from 'src/icon.vue';`,
      expectedOutput:
`import Vue from 'vue';

import Icon from 'src/icon.vue';`
    },
    {
      source: `import Component from 'vue-class-component';`,
      expectedOutput: ''
    },
    {
      source:
`import Vue from 'vue';
import Component from 'vue-class-component';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import Icon from 'src/icon.vue';`,
      expectedOutput:
`import Vue from 'vue';


import Icon from 'src/icon.vue';`
    }
  ]

export const examplesTransformedGet =
  [
    {
      source: `get env() {
    return process.env;
  }`,
      expectedOutput: `const env = computed(() => {
    return process.env;
  })`
    },
  ]

export const examplesRemovedComponentDecorator =
  [
    {
      source: `@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})`,
      expectedOutput:
        ``
    },
    {
      source:
`import test from 'test.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})

console.log(123)`,
      expectedOutput:
`import test from 'test.vue';



console.log(123)`
    },
  ]


export const examplesRemovedClassDeclaration =
  [
    {
      source: `<script>
export default class MainComponent extends Vue {
testFn(123)
}
</script>`,
      expectedOutput:
`<script>

testFn(123)
</script>`
    },
  ]

export const examplesTransformedWatchers = [
  {
    source:
`@Watch('value')
onChangeValue(newValue) {
console.log(newValue)
}`,
    expectedOutput: `watch('value', (newValue) => {console.log(newValue)});`
  },
  {
    source:
`@Watch('value')
onChangeValue(newValue) {
console.log(newValue)
}

@Watch('value2')
onChangeValue2(newValue, oldValue) {
if (newValue > oldValue) {
console.log('more')
}
}`,
    expectedOutput:
`watch('value', (newValue) => {console.log(newValue)});

watch('value2', (newValue, oldValue) => {if (newValue > oldValue) {
console.log('more')});
}`
  }
]

export const examplesTransformedProps = [
  {
  source:
`@Prop({ default: false, type: Boolean }) loading!: boolean;`,
  expectedOutput:
`
interface Props {
  loading?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
});
`,
  },
  {
    source:
`@Prop({ default: false, type: Boolean }) loading!: boolean;
@Prop({ default: '', type: String }) text!: string;`,
    expectedOutput:
`
interface Props {
  loading?: boolean,
  text?: string,
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  text: '',
});
`
  },
  {
    source:
`import testVue from 'testVue.vue'
@Prop({ default: false, type: Boolean }) loading!: boolean;
@Prop({ default: '', type: String }) text!: string;
@Prop({ required: false, type: Number }) value!: number;

console.log(123)`,
    expectedOutput:
`import testVue from 'testVue.vue'

interface Props {
  loading?: boolean,
  text?: string,
  value: number,
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  text: '',
});

console.log(123)`
  }
]

export const examplesTransformedEmits = [
  {
    source:
`@Emit()
click() {
  return;
}`,
    expectedOutput:
`
const emit = defineEmits({
  click: () => {
    return;
  },
});
`,
  },
  {
    source:
`const a = 1;

@Emit()
click() {
  return;
}

@Emit('change')
onInputChange(value) {
  return value;
}

const a = 2`,
    expectedOutput:
`const a = 1;


const emit = defineEmits({
  click: () => {
    return;
  },
  onInputChange: (value) => {
    return value;
  },
});


const a = 2`,
  },
  {
    source:
      ``,
    expectedOutput:
      ``,
  },
]

export const examplesTransformedVariables = [
  {
    source:
      ``,
    expectedOutput:
      ``,
  },
  {
    source:
      ``,
    expectedOutput:
      ``,
  },
  {
    source:
      ``,
    expectedOutput:
      ``,
  },
]
