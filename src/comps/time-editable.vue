<template>
    <div :class="className">
        <div class="edit-area" v-if="isEditMode">
            <form @submit="toggleEdit">
                <input type="time" class="float-left" v-model="text" required />
                <span class="float-right" @click="toggleEdit">&#9989;</span>
            </form>
        </div>
        <div class="text-area" v-if="!isEditMode" @dblclick="toggleEdit">
            {{text}}
        </div>
    </div>
</template>

<script>
    /**
     * The time-editable component is used to edit time
     * 
     * Input:
     * value: A string value
     * is-edit: A boolean indicating whether or not the component is in EDIT mode
     * class-name: A string containing class names to pass to the component DIV
     * on-change: To contain a reference to a function that the text value will be passed to when changed
     */

    export default {
        name: 'TimeEditable',
        props: {
            value: {
                type: String,
                required: true
            },
            'is-edit': {
                type: Boolean
            },
            'class-name': {
                type: String
            },
            'on-change': {
                type: Function
            }
        },
        data(){
            return {
                text: this.value,
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
        width: 80%;
    }

    .float-right {
        float: right;
        margin-top: 4px;
    }

    span.float-right {
        cursor: pointer;
    }
</style>