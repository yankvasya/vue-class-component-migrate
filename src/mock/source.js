export const initedSource =
    `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})
export default class MainComponent extends Vue {
  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  get env() {
    return process.env;
  }

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
}
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputWithSetup =
    `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts" setup>
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})
export default class MainComponent extends Vue {
  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  get env() {
    return process.env;
  }

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
}
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputRemovedImports =
    `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">


import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})
export default class MainComponent extends Vue {
  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  get env() {
    return process.env;
  }

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
}
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputTransformedGet =
`<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})
export default class MainComponent extends Vue {
  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  const env = computed(() => {
    return process.env;
  });

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
}
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputRemovedComponentDecorator =
`<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';


export default class MainComponent extends Vue {
  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  get env() {
    return process.env;
  }

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
}
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputRemovedClassDeclaration =
`<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})

  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  get env() {
    return process.env;
  }

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputTransformedWatchers =
`<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})

  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  get env() {
    return process.env;
  }

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   watch('value', (newValue) => {
      console.log(newValue)
   });
   
   watch('value2', (newValue, oldValue) => {
      if (newValue > oldValue) {
          console.log('more')
      }
   });
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputTransformedProps =
`<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})
export default class MainComponent extends Vue {
  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  
interface Props {
  loading?: boolean,
  size?: 'xs' | 'sm' | 'md',
  text?: boolean,
  block?: boolean,
  rounded?: boolean,
  disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  text: false,
  block: false,
  disabled: false,
});

  get env() {
    return process.env;
  }

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
}
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputTransformedVariables = `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})
export default class MainComponent extends Vue {
  const value: boolean = false;
  const value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  get env() {
    return process.env;
  }

  doFn(value: string, params: {value: number}) {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
}
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputTransformedFunctions = `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import ComponentFirst from '@/components/my-components/ComponentFirst.vue';

@Component({
  name: 'MainComponent',
  components: { ComponentFirst },
})
export default class MainComponent extends Vue {
  value: boolean = false;
  value2: number = 1;

  @Emit()
  click() {
    return;
  }

  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: 'xs' }) size!: 'xs' | 'sm' | 'md';
  @Prop({ default: false, type: Boolean }) text!: boolean;
  @Prop({ default: false, type: Boolean }) block!: boolean;
  @Prop() rounded!: boolean;
  @Prop({ default: false, type: Boolean }) loading!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;

  get env() {
    return process.env;
  }const doFn = (value: string, params: {value: number}) => {
    console.log(value)
  }
  
   @Watch('value')
   onChangeValue(newValue) {
      console.log(newValue)
   }
   
   @Watch('value2')
   onChangeValue2(newValue, oldValue) {
      if (newValue > oldValue) {
          console.log('more')
      }
   }
}
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`

export const expectedOutputTransformedToComposition = `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
    <button @click="doFn"></button>
  </button>
</template>

<script lang="ts" setup>


import ComponentFirst from '@/components/my-components/ComponentFirst.vue';



  const value: boolean = false;
  const value2: number = 1;

  @Emit()
  click() {
    return;
  }

  
interface Props {
  loading?: boolean,
  size?: 'xs' | 'sm' | 'md',
  text?: boolean,
  block?: boolean,
  rounded?: boolean,
  disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  text: false,
  block: false,
  disabled: false,
});

  const env = computed(() => {
    return process.env;
  });const doFn = (value: string, params: {value: number}) => {
    console.log(value)
  }
  
   watch('value', (newValue) => {
      console.log(newValue)
   });
   
   watch('value2', (newValue, oldValue) => {
      if (newValue > oldValue) {
          console.log('more')
      }
   });
</script>

<style>
.body {
  display: block;
  height: 100px;
}

.button {
  display: flex;
}
</style>`