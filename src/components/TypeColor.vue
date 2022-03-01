<template>
    <div class="d-flex flex-nowrap me-3"  v-for = "(item , index)  in types"   :key="index">
         <p class="tiposPok ">{{item }}</p>
      </div>
</template>

<script>

export default {
    props: ['types']
}
</script>

<style scoped>
.tiposPok{
    border:1px solid gray;
    background-color:bisque;
    text-transform:capitalize;
    width: 90px;
    text-align:center;
}
</style>
