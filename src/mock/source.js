export const sourceMock =
    `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
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

export const sourceMockWithSetup =
    `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
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

export const sourceMockRemovedImports =
    `<template>
  <button
    class="button"
  >
    <ComponentFirst v-if="loading" class="body" />
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
