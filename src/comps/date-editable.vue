<template>
    <div :class="className">
        <div v-if="isEditMode">
            <form @submit="toggleEdit">
                <input type="date" class="float-left" v-model="date" required />
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
     * The date-editable component is used to edit dates
     * 
     * Input:
     * value: The Date as a string, or Date object
     * format: The Format of the Date above if it is a string e.g. DD-mm-YYYY
     * is-edit: A boolean indicating whether or not the component is in EDIT mode
     * class-name: A string containing class names to pass to the component DIV
     * on-change: To contain a reference to a function that the date value will be passed to when changed
     */
    
    import moment from 'moment'

    const INPUT_DATE_FORMAT = 'YYYY-mm-DD'

    export default {
        name: 'DateEditable',
        props: ['value', 'format', 'is-edit', 'class-name', 'on-change'],
        data(){
            return {
                date: moment(this.value, this.format).format(INPUT_DATE_FORMAT),
                isEditMode: this.isEdit
            }
        },
        computed: {
            text() {
                return this.moment.format(this.format)
            },
            moment() {
                return moment(this.date, INPUT_DATE_FORMAT)
            }
        },
        methods: {
            toggleEdit(e) {
                e.preventDefault();
                this.isEditMode = !this.isEditMode;
                if (!this.isEditMode && typeof(this.onChange) === 'function') {
                    /**this.onChange is a function to be passed in as a prop */
                    this.onChange(this.text, this.moment)
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