# useRef

https://stackblitz.com/edit/ir5?file=src%2Froutes%2FUseRef.jsx

Keeps variable reference through rerenders
useful if we need to do something with a dom element

const renderTarget = useRef();
renderTarget.current.appendChild(renderer.domElement);

<div ref={renderTarget} className="scene"></div>

const insideObj
const otherObj = {} // this is outside of component in example. not sure what effect that has on this.
const otherRef = useRef()
otherRef.current = otherObj
otherObj === otherRef // true because useRef keeps the reference

# useReducer

https://stackblitz.com/edit/ir5?file=src%2Froutes%2FUseRef.jsx,src%2Froutes%2FUseReducer.jsx

const reducer = (state, action) => {
switch (action.type) {
case 'INCREMENT_H':
return Object.assign({}, state, { h: (state.h + step) % 360 });
case 'DECREMENT_H':
return Object.assign({}, state, { h: (state.h - step) % 360 });
default:
return state;
}
};

const [{ h, s, l }, dispatch] = useReducer(reducer, { h: 50, s: 50, l: 50 });
<button onClick={() => dispatch({ type: 'INCREMENT_H' })}>➕</button>

# useMemo

https://stackblitz.com/edit/ir5?file=src%2Froutes%2FUseCallback.jsx,src%2Froutes%2FUseMemo.jsx

const value = useMemo(() => expensiveMathOperation(count), [count]);

# useCallback

https://stackblitz.com/edit/ir5?file=src%2Froutes%2FUseCallback.jsx

memoizes a callback
built from useMemo and useMemo can be used instead
basically just use for expensive operations and/or laggy ui

const memoizedCallback = useCallback(aUsefulCallback, []);
<UseRefComponent cb={memoizedCallback} /> // UseRefComponent must be memoized

# useLayoutEffect

https://stackblitz.com/edit/ir5?file=src%2Froutes%2FUseLayoutEffect.jsx

useEffect has a small delay when executing after a rerender. useLayoutEffect happens right after a rerender.
rarely useful - in this case we need to measure something in the dom that changes quickly / often and output it

# useId

https://stackblitz.com/edit/ir5?file=src%2Froutes%2FUseId.jsx

generates arbitrary id
colons are part of ids so that they cant be used in css selectors
safe across server-side and client-side renders

dont use this multiple times inside same component. instead const id2 = id + '-two'

const id = useId();
<input type="text" id={id} />

# useImperativeHandle

child component exposes method for the parent to call
maybe in a form validation library

parent passes ref to child. child adds function to ref to expose to parent

# useDebugValue

outputs debugging value to react dev tools

# useInsertionEffect

like useLayoutEffect except this occurs before a rerender
cant use refs as a consequence and has other limitations
used for css
