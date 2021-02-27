<template>
    <div>
     <div class="error">Country that you are looking for does not exists!</div>
    <BackButton v-if="!isFromHome" />
    </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'

export default {
    name: 'SearchError',
    props: ['isFromHome'],
    components:{
        BackButton
    }
}
</script>
