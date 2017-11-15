<template>
    <div :class="className">
        <div class="edit-area" v-if="isEditMode">
            <form @submit="toggleEdit">
                <textarea class="float-left form-control" v-if="multi" v-model="text" required></textarea>
                <input type="text" class="float-left" v-if="!multi" v-model="text" required />
                <button class="float-right icon-btn" type="submit">&#9989;</button>
            </form>
        </div>
        <div class="text-area" v-if="!isEditMode" @dblclick="toggleEdit">
            {{text}}
        </div>
    </div>
</template>

<script>
    /**
     * The text-editable component is used to edit text
     * 
     * Input:
     * value: A string value
     * is-edit: A boolean indicating whether or not the component is in EDIT mode
     * class-name: A string containing class names to pass to the component DIV
     * on-change: To contain a reference to a function that the text value will be passed to when changed
     */

    export default {
        name: 'TextEditable',
        props: ['value', 'is-edit', 'class-name', 'on-change', 'multi'],
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
        width: 90%;
    }

    .float-right {
        float: right;
        margin-top: 4px;
    }

    span.float-right {
        cursor: pointer;
    }

    .icon-btn {
        border: none;
        background: none;
    }
</style>