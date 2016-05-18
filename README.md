# Cond

Lisp-like condition statement for JSX

## Installation

```bash
npm install yuanchuan/cond --save
```

## Example

##### like if statement

```jsx
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


## Shorcuts

##### If

```jsx
import { If } from 'yuanchuan/cond';

<div>
  { If(n > 0, (
      <div>hell world</div>
  ))}
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
  { unless(n != 0, (
      <div>hell world</div>
  ))}
</div>
```

## Extend cond

```jsx
  let condEven = cond((a, b) => {
    if (a % 2 === 0) return b;
  });

  <div>
    { condEven(number, (
        <div>even number</div>
    )}
  </div>
```
