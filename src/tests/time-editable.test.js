import Vue from 'vue'
import { CreateTimeEditable } from './helpers/create-comp'

describe('TimeEditable', () => {
    it ('isEditMode is true', () => {
        const vm = CreateTimeEditable({
            isEdit: true
        })
        expect(vm.isEditMode).toBe(true)
    })

    it ('isEditMode is false', () => {
        const vm = CreateTimeEditable({
            isEdit: false
        })

        expect(vm.isEditMode).toBe(false)
    })
})