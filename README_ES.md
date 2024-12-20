# Comparando Reactividad en Blazor con Signals de Angular

¿Blazor necesita algo como Signals de Angular para ser reactivo? No. Blazor es reactivo desde siempre. Las interfaces de usuario interactivas se actualizan dinámica y granularmente en respuesta a cambios en el estado de la página.

Blazor utiliza un modelo de programación basado en componentes, donde cada componente tiene un ciclo de vida propio y una representación en la interfaz de usuario. El estado de los componentes cambia en respuesta a eventos del usuario, interacciones con la API, o cambios en el servidor, lo que desencadena una actualización de la UI de manera eficiente.

### **Cómo funciona la reactividad en Blazor:**

1. **State Changes**: Cuando cambia el estado de un componente (por ejemplo, una variable vinculada a un input o un botón presionado), Blazor marca el componente como "sucio" y lo vuelve a renderizar.
     
2. **Renderizado eficiente**: Blazor realiza un renderizado eficiente utilizando un algoritmo similar al de reconciliación de React o Signals de Angular. Solo se actualizan las partes del UI que realmente han cambiado. Sin embargo, a diferencia de estos, Blazor usa C\# y WebAssembly para ejecutar el código en el navegador, en lugar de JavaScript.
   
3. **Data Binding**: Blazor permite un **data binding** bidireccional, lo que significa que los cambios en el modelo de datos se reflejan automáticamente en la UI y viceversa. Esto también contribuye a la reactividad (ejemplo 2).
   
4. **Eventos de UI**: Blazor maneja eventos como clics, teclas presionadas, cambios de texto, etc., que pueden disparar actualizaciones en el estado del componente, lo que nuevamente provoca una re-renderización reactiva de la UI.

#### Acerca de Angular Signals

*Signals* es una nueva API reactiva de Angular con el objetivo de manejar el estado de las aplicaciones de forma más eficiente y predecible. El modelo reactivo de Blazor dispone de una especificación técnica equivalente, pero a diferencia de Angular es inherente, o en otras plabras, es una parte fundamental de su identidad. 

## Ejemplo 1 - Timer

En este primer ejemplo, muestro cómo es el equivalente de un Signals en Blazor WebAssembly, el resultado es idéntico, y el desempeño igual (por supuesto). Un simple componente que se actualiza granularmente cada 250 milisegundos.

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
        <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/ng1.png" style="width: 490px; height: 600px; object-fit: contain;" /> 
      </td>
      <td valign="top">
        <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/cs1.png" style="width: 490px; height: 600px; object-fit: contain;" /> 
      </td>
    </tr>
  </tbody>
</table>

>*El estilo del código es solo ilustrativo; naturalmente, puede estructurarse formalmente siguiendo los principios de cada framework.*

## Ejemplo 2 - Two-Way Binding

Este segundo ejemplo, es algo más complejo. Se abordan los conceptos de Signal *compute, y update*. Al editar en una caja, se realiza un cálculo que actualiza otra caja, y viceversa. Admito que fue algo desafiante lograr que funcionara de la misma forma en Angular que en Blazor, incluso con Signals. Es probable que un programador especializado en Angular pueda mejorar el código. En cualquier caso, el resultado final es completamente equivalente.

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

Finalmente podemos usar este par de componentes en una página para ilustrar el comportamiento. 

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

### Ejecutando
<p align="center">
  <img src="https://github.com/harveytriana/SomethingReactive/blob/master/Screens/Running.png" alt="Ejecutando...">
</p>

---
### Nota

> La aplicación Blazor WebAssembly se escribió en un Template mínimo. Plantilla: Blazor WebAssembly App Empty, sin ASP.NET Core Hosted.

## Conclusiones

Blazor WebAssembly es superior a Angular en este aspecto, permitiendo escribir menos código y de forma más clara. Sin embargo, para muchos, la popularidad de Angular sigue siendo un factor determinante.

Se mantiene el contraste entre las ventajas técnicas de Blazor y la popularidad de Angular, React, Vue.js, otros en el entorno de desarrollo frontend.

Encuentro que para alguien con experiencia en Blazor WebAssembly, aprender Angular resulta accesible, ya que comparten varios conceptos y estructuras similares.

_Oí hace poco un comentario de un tal «Gentleman Programming», experto en frontend que decía: «Angular pide demasiado a sus programadores». Cierto, para algo sencillo tienen que usar una sofisticada implementación como Signals._
