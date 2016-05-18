# Cond

Lisp-like conditional statement for JSX

## Installation

```bash
npm install yuanchuan/cond --save
```

## Examples

##### like if statement

```jsx
import { cond } from 'yuanchuan/cond';

<div>
  { cond(n > 0,
      (<div>hell world</div>)
  )}
</div>
```

##### like if...else statement

```jsx
<div>
  { cond(
      n > 0, (<div>hell world</div>),
      true,  (<div>hell world</div>)
  )}
</div>
```

##### like if...else if... statement

```jsx
<div>
  { cond(
      n == 3, (<div>hell world</div>),
      n == 6, (<div>something</div>),
      n == 9, (<div>something else</div>),
      true,   (<div>default</div>)
  )}
</div>
```


## Shortcuts

##### If

```jsx
import { If } from 'yuanchuan/cond';

<div>
  { If(n > 0,
      (<div>hell world</div>)
  )}
</div>
```

##### If...else

```jsx
<div>
  { If(n > 0,
      (<div>hell world</div>),
      (<div>something else</div>)
  )}
</div>
```

##### unless

```jsx
import { unless } from 'yuanchuan/cond';

<div>
  { unless(n != 0,
      (<div>hell world</div>)
  )}
</div>
```

## Extend cond

```jsx
let condOdd = cond((a, b) => (a % 2 ? b : null));

<div>
  { condOdd(number, (
      <div>odd number</div>
  )}
</div>
```

```jsx
let condThenWrap = cond((a, b) => {
  if (a) {
    return (
      <div className="deepNested">
        { b }
      </div>
    );
  }
});

<div>
  { condThenWrap(
      n == 3, (<div>hell world</div>),
      n == 6, (<div>something</div>),
      n == 9, (<div>something else</div>),
      true,   (<div>default</div>)
  )}
</div>
```

## License

MIT
