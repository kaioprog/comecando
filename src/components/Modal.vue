
<template>
    <div class="card flex justify-content-center">
        <DynamicDialog />
    </div>
</template>

<script setup>
import { defineAsyncComponent, watch, computed } from 'vue';
import DynamicDialog from 'primevue/dynamicdialog';
import { useDialog } from 'primevue/usedialog';

const data = defineProps(['data', 'component', 'show'])

const dialog = useDialog();

    function loadComponent(){
        return new Promise((resolve) => {
            resolve(import(`./${data.component}.vue`))
        })
    }
        
    watch(
        () => data.show,
        (count) => {
            console.log(count)
            loadComponent().then(ret => {
                // const comp = defineAsyncComponent(() => ret)
                const ComponentView = defineAsyncComponent(() => import(`./${data.component}.vue`))
                // console.log(defineAsyncComponent(() => ret), defineAsyncComponent(() => import(`./${data.component}.vue`)))
                dialog.open(ComponentView, {
                    props: {
                        header: 'Product List',
                        style: {
                            width: '70vw',
                        },
                        breakpoints:{
                            '960px': '75vw',
                            '640px': '90vw'
                        },
                        modal: true
                    },
                    onClose: (options) => {
                    }
                });
            })
        }
    )




// console.log(dynamicComponent)
/*
watch(
    () => data.show,
    (count) => {
      dialog.open(dynamicComponent, {
          props: {
              header: 'Product List',
              style: {
                  width: '70vw',
              },
              breakpoints:{
                  '960px': '75vw',
                  '640px': '90vw'
              },
              modal: true
          },
          onClose: (options) => {
        }
      });
  }
)
*/

</script>
    