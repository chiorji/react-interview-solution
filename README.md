## SOLUTION TO A REACT INTERVIEW(LIVE CODING QUESTION)
------------------------------------------------------------------------
### Task

The task was to create an effect in react that will change the `fontStyle`, `color` and `fontFamily` of an element as intervals.
Having an array of nth `font-styles` you are to change the font-style of a given element picking a font from the font array
`const fonts = [....]`

 __I was provided with a sample gif image__

#### MY APPROACH

- [x]  create and array of fonts
- [x] Wrote a `function` to pick an item(font-style) from the `array` at random
- [x] Use javascript `setInterval`, `window` method
- [x] Updates the `classNames` of the would change element
- [x] Styled the element with the appropriate CSS styling associated with the `classNames`

--------------------------------------------------------------------------------------------

_Additionally_, I included a counter (not part of the interview task) to stop the effect after `nth times` of running - to avoid system from hanging.

--------------------------------------------------------------------------------------------
___Have an improvement to make or to suggest a better solution?___

Please send a pull request