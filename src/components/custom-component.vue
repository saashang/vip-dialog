<template>
    <div class="custom-view-wrapper">

        <div>
            <p>
                Name (received by params):
                <input type="text" class="form-control" v-model="name">
            </p>
            <p>
                Age:<input type="text" class="form-control" v-model="age">
            </p>
            <div>
                Company:
                <div class="input-group">
                    <input type="text" class="form-control" disabled="disabled"
                        v-model="company" placeholder="Please choose a company">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Choose</button>
                    </span>
                </div>
            </div>
            <p style="margin-top: 10px;">
                <button type="button"
                    class="btn btn-default"
                    @click="ok">OK</button>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        name: String
    },
    data(){
        return {
            company: '',
            age: 20
        }
    },
    methods: {
       ok(){
            //close current modal dialog and return data
            this.$emit('close', { name: this.name, age: this.age, company: this.company });
        }
    }
}
</script>

<style scoped="">
    button {
        width: 100%;
        margin-bottom: 10px;
        float: none;
    }
</style>
