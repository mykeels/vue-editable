import Vue from 'vue'
import { CreateSelectEditable, CreateUnmountedSelectEditable } from './helpers/create-comp'

describe('SelectEditable', () => {
    const values = ['A', 'B', 'C']
    const objValues = [
        {
            text: 'A',
            value: 1
        },
        {
            text: 'B',
            value: 2
        },
        {
            text: 'C',
            value: 3
        }
    ]

    it ('isEditMode is true', () => {
        const vm = CreateSelectEditable({
            isEdit: true,
            value: '',
            values
        })
        expect(vm.isEditMode).toBe(true)
    })

    it ('isEditMode is false', () => {
        const vm = CreateSelectEditable({
            isEdit: false,
            value: '',
            values
        })

        expect(vm.isEditMode).toBe(false)
    })
    
    it ('element class-name is set', () => {
        const vm = CreateSelectEditable({
            className: 'my-class-name',
            value: '',
            values
        })

        expect(vm.$el.className).toEqual('my-class-name')
    })
    
    it ('has a form in edit-mode', () => {
        const vm = CreateSelectEditable({
            isEdit: true,
            value: '',
            values
        })

        expect(vm.$el.querySelectorAll('form').length).toEqual(1)
    })
    
    it ('onChange is triggered', () => {
        /**
         * will change the selected value in the input to "B"
         * if onChange is triggered, the value of [onChangeHasTriggered] should change to true
         */
        let onChangeHasTriggered = false

        const vm = CreateSelectEditable({
            value: 'A',
            isEdit: true,
            onChange: (text) => {
                onChangeHasTriggered = true
                expect(text).toEqual('B')
            },
            values
        })

        const $input = vm.$el.querySelector('select')
        $input.value = 'B'
        $input.dispatchEvent(new Event('change'))

        const $form = vm.$el.querySelector('form')
        $form.dispatchEvent(new Event('submit'))
        
        Vue.nextTick(() => {
            expect(onChangeHasTriggered).toBe(true)
            done()
        })
    })

    it('will throw Error if [values] is not provided', () => {
        expect(CreateUnmountedSelectEditable({
            value: 'A'
        }).$mount).toThrow()
    })
})