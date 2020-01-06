
# Button

### Button Theme

````html demo:vue
<template>
  <vc-button>Default</vc-button>
  <vc-button type="info">Info</vc-button>
  <vc-button type="primary">Primary</vc-button>
  <vc-button type="warning">Warning</vc-button>
  <vc-button type="danger">Danger</vc-button>
  <vc-button type="success">Success</vc-button>
  <vc-button type="text">Text</vc-button>
</template>
````


### Defined Size

````html demo:vue
<template>
  <vc-button size="large">Large</vc-button>
  <vc-button >Default</vc-button>
  <vc-button size="medium">Medium</vc-button>
  <vc-button size="small">Small</vc-button>
  <vc-button size="mini">mini</vc-button>
</template>
````


### Plain Button

````html demo:vue
<template>
  <vc-button plain>Default</vc-button>
  <vc-button plain type="info">Info</vc-button>
  <vc-button plain type="primary">Primary</vc-button>
  <vc-button plain type="warning">Warning</vc-button>
  <vc-button plain type="danger">Danger</vc-button>
  <vc-button plain type="success">Success</vc-button>
</template>
````

### Round Button

````html demo:vue
<template>
  <vc-button round>Default</vc-button>
  <vc-button round type="info">Info</vc-button>
  <vc-button round type="primary">Primary</vc-button>
  <vc-button round type="warning">Warning</vc-button>
  <vc-button round type="danger">Danger</vc-button>
  <vc-button round type="success">Success</vc-button>
</template>
````

### Disabled

````html demo:vue
<template>
  <vc-button disabled>Default</vc-button>
  <vc-button disabled type="info">Info</vc-button>
  <vc-button disabled type="primary">Primary</vc-button>
  <vc-button disabled type="warning">Warning</vc-button>
  <vc-button disabled type="danger">Danger</vc-button>
  <vc-button disabled type="success">Success</vc-button>
</template>
````

### Block Button

````html demo:vue
<template>
  <vc-button block type="info">Block Button</vc-button>
  <vc-button block type="success">Block Button</vc-button>
</template>
````

### Block Group

````html demo:vue
<template>
  <vc-button-group>
    <vc-button>Button</vc-button>
    <vc-button>Button</vc-button>
    <vc-button>Button</vc-button>
  </vc-button-group>

  <vc-button-group>
    <vc-button type="info" size="medium">Button</vc-button>
    <vc-button type="info" size="medium">Button</vc-button>
    <vc-button type="info" size="medium">Button</vc-button>
  </vc-button-group>

  <vc-button-group>
    <vc-button type="info" size="mini">Button</vc-button>
    <vc-button type="danger" size="mini">Button</vc-button>
    <vc-button type="success" size="mini">Button</vc-button>
  </vc-button-group>
</template>
````

[demo:vue](./button-demo.vue)

----