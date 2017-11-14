<template>
    <div :class="className">
        <div v-if="isEditMode">
            <form @submit="toggleEdit">
                <select v-model="text" class="float-left">
                    <option v-if="v.constructor.name === 'String'" v-for="(v, index) in values" :key="index" :value="v">{{v}}</option>
                    <option v-if="v.constructor.name === 'Object'" v-for="(v, index) in values" :key="index" :value="v.value">{{v.text}}</option>
                </select>
                <span class="float-right" @click="toggleEdit">&#9989;</span>
            </form>
        </div>
        <div v-if="!isEditMode" @dblclick="toggleEdit">
            {{text}}
        </div>
    </div>
</template>

<script>
    /**
     * The select-editable component is used to edit dates
     * 
     * Input:
     * values: The string or object values as an array e.g. ['a', 'b'] or [{ text: 'a', value: 'b' }]
     * value: The initial value
     * is-edit: A boolean indicating whether or not the component is in EDIT mode
     * class-name: A string containing class names to pass to the component DIV
     * on-change: To contain a reference to a function that the date value will be passed to when changed
     */
    
    export default {
        name: 'SelectEditable',
        props: ['value', 'values', 'is-edit', 'class-name', 'on-change'],
        data(){
            return {
                text: this.value || (this.values || [])[0] || '',
                isEditMode: this.isEdit
            }
        },
        methods: {
            toggleEdit(e) {
                e.preventDefault();
                this.isEditMode = !this.isEditMode;
                if (!this.isEditMode && typeof(this.onChange) === 'function') {
                    this.onChange(this.text)
                }
            }
        }
    }
</script>

<style>
    .float-left {
        float: left;
        width: 90%;
    }

    .float-right {
        float: right;
        margin-top: 4px;
    }

    span.float-right {
        cursor: pointer;
    }
</style>