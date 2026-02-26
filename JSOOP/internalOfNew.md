In JavaScript, the `new` keyword isn’t just syntax sugar — it triggers a specific internal object construction process defined in the ECMAScript specification. The core internal mechanism behind `new` is the **`[[Construct]]` internal method**.

Let’s break it down clearly.

---

# What `new` Does Internally

When you write:

```js
const obj = new Person("John");
```

JavaScript performs something equivalent to this (simplified):

---

## 🔹 Step-by-Step Internal Algorithm

The spec describes this in terms of **`[[Construct]]`** and **`OrdinaryConstruct`**.

Conceptually, this is what happens:

### 1️⃣ Create a new empty object

It creates a new object whose prototype is:

```js
Person.prototype
```

Equivalent to:

```js
const obj = Object.create(Person.prototype);
```

---

### 2️⃣ Bind `this` to the new object

The constructor function is called with `this` bound to the new object:

```js
const result = Person.call(obj, "John");
```

---

### 3️⃣ If constructor returns an object, use it

If the constructor explicitly returns an object:

```js
function Person() {
  return { name: "Override" };
}
```

Then that returned object replaces `obj`.

---

### 4️⃣ Otherwise return the created object

If the constructor returns:

* nothing
* a primitive

Then JavaScript returns the original created object.

---

# Equivalent Manual Implementation of `new`

Here is a working polyfill-style implementation:

```js
function myNew(constructor, ...args) {
  // Step 1: Create object linked to prototype
  const obj = Object.create(constructor.prototype);

  // Step 2: Call constructor with new object as this
  const result = constructor.apply(obj, args);

  // Step 3: Return object if constructor returned object
  return (typeof result === "object" && result !== null) 
         ? result 
         : obj;
}
```

Usage:

```js
function Person(name) {
  this.name = name;
}

const p = myNew(Person, "John");
console.log(p.name); // John
```

---

# 🔬 Internal Spec-Level Explanation

Under the hood, `new` does:

```
Construct(F, argumentsList)
```

Which internally calls:

```
F.[[Construct]](argumentsList, newTarget)
```

For normal functions, this runs:

```
OrdinaryConstruct(F, argumentsList, newTarget)
```

That performs:

1. Let obj = OrdinaryCreateFromConstructor(...)
2. Let result = F.[[Call]](obj, argumentsList)
3. If result is Object → return result
4. Return obj

---

# 💡 Important Internal Concepts

### 🔹 `[[Construct]]`

An internal method that only constructor functions have.

Arrow functions DO NOT have `[[Construct]]`, so:

```js
const x = new (() => {});
// TypeError: not a constructor
```

---

### 🔹 `new.target`

Inside a constructor, `new.target` tells you which constructor was invoked with `new`.

Example:

```js
function Person() {
  console.log(new.target);
}

new Person(); // Person
Person();     // undefined
```

---

# 🚀 Bonus: Real Engine Perspective

In engines like:

* V8 (Chrome, Node.js)
* SpiderMonkey (Firefox)
* JavaScriptCore (Safari)

The engine checks:

* Does function have `[[Construct]]`?
* Allocate memory for object
* Set internal `[[Prototype]]`
* Call constructor
* Handle return override

The actual implementation is in C++ inside the engine runtime, but logically it follows the ECMAScript algorithm described above.

---

# ⚡ Final Summary

`new` does exactly this:

```js
function internalNew(F, ...args) {
  const obj = Object.create(F.prototype);
  const result = F.apply(obj, args);
  return (typeof result === "object" && result !== null) ? result : obj;
}
```

But officially it works through:

* `[[Construct]]`
* `OrdinaryConstruct`
* `[[Call]]`
* `new.target`

