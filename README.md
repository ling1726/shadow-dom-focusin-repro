# `focusin` event in Shadow DOM

This example shows that the `focusin` event in shadow DOM is not composed unlike other events such as `click`

## Setup

1. run `npm install`
2. run `npm run dev`
3. navigate to `http://localhost:5173/`

## Steps

1. click on a button
2. output should be:

```
focusin listener - shadow root
focusin listener - document
click listener - shadow root
click listener - document
```

3. click on another button
4. output should be:

```
focusin listener - shadow root
click listener - shadow root
click listener - document
```

## Expected result

`focusin listener - document` should be present in both steps `2` and `4`

## Actual result
`focusin listener - document` is only present in step `2`