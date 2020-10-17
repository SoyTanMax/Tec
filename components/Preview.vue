<template>
    <div>
        <div class="box">
            <div class="image" :style="{backgroundImage: 'url(' + image + ')'}"></div>
            <div class="info">
                <div class="title">{{ title }}</div>
                <div class="org"> {{ org }} </div>
                <div class="description">{{ description }}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Preview',
        props: {
            image: {
                type: String
            },
            title: {
                type: String
            },
            org: {
                type: String
            },
            description: {
                type: String
            }
        }
    }
</script>

<style scoped>
.box{
    padding: 0;
    height: fit-content;
}
.image{
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 192px;
    margin-bottom: 12px;
    border-radius: 6px 6px 0px 0px;
}
.info{
    padding: 24px;
}
.org{
    margin-bottom: 12px;
    font-family: 'Nunito', sans-serif;
}
.description{
    font-family: 'Nunito', sans-serif;
}
</style>