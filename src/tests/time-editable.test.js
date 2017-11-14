import Vue from 'vue'
import { CreateTimeEditable } from './helpers/create-comp'

describe('TimeEditable', () => {
    it ('isEditMode is true', () => {
        const vm = CreateTimeEditable({
            isEdit: true,
            value: ''
        })
        expect(vm.isEditMode).toBe(true)
    })

    it ('isEditMode is false', () => {
        const vm = CreateTimeEditable({
            isEdit: false,
            value: ''
        })

        expect(vm.isEditMode).toBe(false)
    })
    
    it ('element class-name is set', () => {
        const vm = CreateTimeEditable({
            className: 'my-class-name',
            value: ''
        })

        expect(vm.$el.className).toEqual('my-class-name')
    })
    
    it ('has a form in edit-mode', () => {
        const vm = CreateTimeEditable({
            isEdit: true,
            value: ''
        })

        expect(vm.$el.querySelectorAll('form').length).toEqual(1)
    })
    
    it ('onChange is triggered', () => {
        /**
         * will change the time in the input to "3:30"
         * if onChange is triggered, the value of [onChangeHasTriggered] should change to true
         */
        let onChangeHasTriggered = false

        const vm = CreateTimeEditable({
            value: '3:00',
            isEdit: true,
            onChange: (text) => {
                onChangeHasTriggered = true
                expect(text).toEqual('3:30')
            }
        })

        const $input = vm.$el.querySelector('input')
        $input.value = '3:30'
        $input.dispatchEvent(new Event('input'))

        const $form = vm.$el.querySelector('form')
        $form.dispatchEvent(new Event('submit'))
        
        Vue.nextTick(() => {
            expect(onChangeHasTriggered).toBe(true)
            done()
        })
    })
})