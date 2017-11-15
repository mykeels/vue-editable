# Vue Editable

A collection of editable Vue components such as:

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


