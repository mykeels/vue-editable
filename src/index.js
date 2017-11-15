import TextEditable from './comps/text-editable.vue'
import DateEditable from './comps/date-editable.vue'
import SelectEditable from './comps/select-editable.vue'
import TimeEditable from './comps/time-editable.vue'

const VueEditable = {
    TextEditable: TextEditable,
    DateEditable: DateEditable,
    SelectEditable: SelectEditable,
    TimeEditable: TimeEditable
}

if (!!window) {
    window.VueEditable = VueEditable;
}

export default VueEditable;

