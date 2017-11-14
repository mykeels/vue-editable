import Vue from 'vue'
import TextEditable from '../../comps/text-editable'
import TimeEditable from '../../comps/time-editable'
import DateEditable from '../../comps/date-editable'
import SelectEditable from '../../comps/select-editable'

const CreateEditable = (comp, props) => {
    const Ctor = Vue.extend(comp)
    return new Ctor({
        propsData: props
    }).$mount()
}

export const CreateTextEditable = (props) => CreateEditable(TextEditable, props)
export const CreateTimeEditable = (props) => CreateEditable(TimeEditable, props)
export const CreateDateEditable = (props) => CreateEditable(DateEditable, props)
export const CreateSelectEditable = (props) => CreateEditable(SelectEditable, props)