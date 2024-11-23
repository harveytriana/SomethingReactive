# Comparing Reactivity in Blazor WebAssembly with Angular Signals

Does Blazor need something like Angular's Signals to be reactive? It doesn't. Blazor has always been reactive. Interactive user interfaces update dynamically and granularly in response to changes in page state.

Blazor uses a component-based programming model, where each component has its own lifecycle and representation in the UI. The state of components changes in response to user events, API interactions, or server changes, which triggers an efficient UI update.

### **How Reactivity Works in Blazor:**

1. **State Changes**: When a component's state changes (for example, a variable bound to an input or a button is clicked), Blazor marks the component as "dirty" and re-renders it.

2. **Efficient Rendering**: Blazor performs efficient rendering using an algorithm similar to the reconciliation of React or Angular’s Signals. Only parts of the UI that have actually changed are updated. However, unlike these, Blazor uses C# and WebAssembly to run code in the browser instead of JavaScript.

3. **Data Binding**: Blazor allows for **two-way data binding**, meaning that changes in the data model are automatically reflected in the UI and vice versa. This also contributes to reactivity (example 2).

4. **UI Events**: Blazor handles events such as clicks, key presses, text changes, etc., which can trigger updates in the component's state, resulting in a reactive re-rendering of the UI.

#### About Angular Signals

*Signals* is a new reactive API from Angular designed to manage application state more efficiently and predictably. Blazor's reactive model has a technically equivalent specification, but unlike Angular, it is inherent, or in other words, it is a fundamental part of its identity.

## Example 1 - Timer

In this first example, I show what the equivalent of a Signal in Blazor WebAssembly would look like. The result is identical, and the performance is the same (of course). It’s a simple component that updates granularly every 250 milliseconds.

<table style="width:1000px;">
  <thead>
    <tr>
      <th>Angular</th>
      <th>Blazor WebAssembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">
        <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/ng1.png" style="width: 490px; height: 600px; object-fit: contain;" /> 
      </td>
      <td valign="top">
        <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/cs1.png" style="width: 490px; height: 600px; object-fit: contain;" /> 
      </td>
    </tr>
  </tbody>
</table>

>*The code style is illustrative; naturally, it can be formally structured according to the principles of each framework.*

## Example 2 - Two-Way Binding

This second example is a bit more complex. It covers the Signal concepts of *compute and update*. Editing in one box performs a calculation that updates another box, and vice versa. I admit it was somewhat challenging to make it work the same way in Angular as in Blazor, even with Signals. It’s likely that a developer specialized in Angular could improve the code. In any case, the final result is fully equivalent.

<table>
  <thead>
    <tr>
      <th>Angular</th>
      <th>Blazor WebAssembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">
        <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/ng2.png" style="width: 490px; height: 510px; object-fit: contain;" /> 
      </td>
      <td valign="top">
        <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/cs2.png" style="width: 490px; height: 500px; object-fit: contain;" /> 
      </td>
    </tr>
  </tbody>
</table>

Finally, we can use this pair of components on a page to illustrate the behavior.

<table>
  <thead>
    <tr>
      <th>Angular</th>
      <th>Blazor WebAssembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">
        <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/ng3.png" style="width: 560px; height: 300px; object-fit: contain;" /> 
      </td>
      <td valign="top">
        <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/cs3.png" style="width: 420px; height: 200px; object-fit: contain;" /> 
      </td>
    </tr>
  </tbody>
</table>

### Running
<p align="center">
  <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/Running.png" alt="Running...">
</p>
---

### Note

> The Blazor WebAssembly app was written in a minimal Template. Template: Blazor WebAssembly App Empty, without ASP.NET Core Hosted.


## Conclusions

Blazor WebAssembly is superior to Angular in this regard, allowing for less code and a clearer structure. However, for many, the popularity of Angular remains a determining factor.

The contrast remains between the technical advantages of Blazor and the popularity of Angular, React, Vue.js, and others in the frontend development environment.

I find that for someone with experience in Blazor WebAssembly, learning Angular is accessible, since they share several similar concepts and structures.

---
<small>By: Luis Harvey Triana Vega</small>
