# Vue Editable

This is a collection of editable Vue components.

The components are "Editable" because you can double-click them and get an input field to edit its content.

Available editable components are:

## Text Editable

```html
<text-editable 
    value="Hello World" 
    class-name="text-editable"
    :is-edit="false" 
    :on-change="doStuff"
    :multi="false"></text-editable>
```

| Prop       | Type     | Required | Description |
| ---------- | --------:| --------:| ----:|
| value      | String   | No       |  |
| class-name | String   | No       |  |
| is-edit    | Boolean  | No       |  |
| multi      | Boolean  | No       |  |
| on-change  | Function | No       |  |


## Date Editable

```html
<date-editable 
    value="2017-01-01" 
    format="YYYY-mm-DD" 
    class-name="date-editable"></date-editable>
```

| Prop       | Type     | Required | Description |
| ---------- | --------:| --------:| ----:|
| value      | String   | Yes       |  |
| format     | String   | Yes       |  |
| class-name | String   | No       |  |
| is-edit    | Boolean  | No       |  |
| on-change  | Function | No       |  |

## Select Editable

```html
<select-editable 
    value="Basic 1" 
    :values="[
                'Basic 1',
                'Basic 2',
                'Basic 3',
                'Basic 4',
                'Basic 5',
                'Basic 6'
                ]" 
    class-name="select-editable"></select-editable>
```

| Prop       | Type     | Required | Description |
| ---------- | --------:| --------:| ----:|
| value      | String   | No       |  |
| values     | Array    | Yes      |  |
| class-name | String   | No       |  |
| is-edit    | Boolean  | No       |  |
| on-change  | Function | No       |  |

## Time Editable

```html
<time-editable 
    value="09:00" 
    class-name="time-editable"></time-editable>
```

| Prop       | Type     | Required | Description |
| ---------- | --------:| --------:| ----:|
| value      | String   | Yes      |  |
| class-name | String   | No       |  |
| is-edit    | Boolean  | No       |  |
| multi      | Boolean  | No       |  |
| on-change  | Function | No       |  |


# How to use

You could use via the `<script>` tag:

```html
<script src="https://raw.githubusercontent.com/mykeels/vue-editable/master/build/vue-editable.min.js"></script>
```

Be sure to register the components in your Vue Instance

```html
<script>
    new Vue({
            el: '#app',
            data: {
                
            },
            components: {
                'text-editable': VueEditable.TextEditable,
                'date-editable': VueEditable.DateEditable,
                'select-editable': VueEditable.SelectEditable,
                'time-editable': VueEditable.TimeEditable
            }
        })
</script>
```

# Testing

Testing is done with [Jest](https://github.com/facebook/jest). You can run tests with `npm test`