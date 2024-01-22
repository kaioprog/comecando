<script setup>
    import {ref, defineAsyncComponent, computed} from 'vue'
    import modal from './Modal.vue'
    const show = ref(0)
    const components = ref(undefined)

    const ShowModal = (component) =>{
        show.value++
        components.value = component
        // console.log(component)
    }
</script>
<template>
    ola seja bem vindo
    <modal :show="show" :component="components"/>
    <Button label="Abrir modal form" icon="pi pi-search" @click="ShowModal('Form')" />
    <Button label="Abrir modal list" icon="pi pi-search" @click="ShowModal('List')" />
</template>