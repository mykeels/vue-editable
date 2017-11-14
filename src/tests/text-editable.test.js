import Vue from 'vue'
import { mount } from 'vue-test-utils'
import TextEditable from '../comps/text-editable'

describe('TextEditable', () => {

    const CreateTextEditor = (props) => {
        const Ctor = Vue.extend(TextEditable)
        return new Ctor({
            propsData: props
        }).$mount()
    }

    it ('isEditMode is true', () => {
        const vm = CreateTextEditor({
            isEdit: true
        })
        expect(vm.isEditMode).toBe(true)
    })

    it ('isEditMode is false', () => {
        const vm = CreateTextEditor({
            isEdit: false
        })

        expect(vm.isEditMode).toBe(false)
    })
    
    it ('element class-name is set', () => {
        const vm = CreateTextEditor({
            className: 'my-class-name'
        })

        expect(vm.$el.className).toEqual('my-class-name')
    })
    
    it ('has a form in edit-mode', () => {
        const vm = CreateTextEditor({
            isEdit: true
        })

        expect(vm.$el.querySelectorAll('form').length).toEqual(1)
    })
    
    it ('multi mode uses a textarea', () => {
        const vm = CreateTextEditor({
            isEdit: true,
            multi: true
        })

        expect(vm.$el.querySelectorAll('textarea').length).toEqual(1)
        expect(vm.$el.querySelectorAll('input[type="text"]').length).toEqual(0)
    })
})