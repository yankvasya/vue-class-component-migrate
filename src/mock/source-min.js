// EXAMPLES FOR BASE TEST
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

// export const examplesTransformedGet =
//   [
//     {
//       source:  `import { Component, Emit, Prop, Vue } from 'vue-property-decorator';`,
//       expectedOutput: ''
//     },
//     {
//       source: `import Vue from 'vue';
//       import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
//       import Icon from 'src/icon.vue';`,
//       expectedOutput: `import Vue from 'vue';
//       import Icon from 'src/icon.vue';`
//     }
//   ]
//
// export const examplesRemovedComponentDecorator =
//   ``
//
// export const examplesRemovedClassDeclaration =
//   ``
//
// export const examplesTransformedWatchers =
//   ``
//
// export const examplesTransformedProps =
//   ``
//
// export const examplesTransformedToComposition =
//   ``