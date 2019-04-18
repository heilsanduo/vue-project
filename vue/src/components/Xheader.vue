<template>
    <div class="box">
        <header class="header">
            <div class="left"></div>
            <div class="right"></div>
        </header>
    </div>
</template>
<style scoped>
.box{
    height: auto;
    width: 100%;
}
.header{
    width: 100%;
    height: 1.666667rem;
    background: paleturquoise;
    display: flex;
    position: fixed;
     justify-content:space-between;
    top: 0;
    left: 0; 
}
.left{
    width: 20%;
    height: 100%;
    background: pink;
}
.right{
     width: 20%;
    height: 100%;
    background: pink;
}
</style>
<script>
export default {
    
}
</script>