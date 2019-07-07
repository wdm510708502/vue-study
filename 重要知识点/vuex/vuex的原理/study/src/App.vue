<template>
  <div id="app">
  <som1 />
  <som2 />
  <h2>01 使用 state</h2>
  <state />
  <h2>02 使用 mutations</h2>
  <mutations/>
  <h2>03 使用actions</h2>
  <actions/>
  </div>
</template>

<script>
import som1 from './components/som1'
import som2 from './components/som2'
import state from './components/01state'
import mutations from './components/02mutations'
import actions from './components/03actions'

export default {
  name: 'App',
  components: {
    som1,
    som2,
    state,
    mutations,
    actions
  }
}
</script>

<style>

</style>
