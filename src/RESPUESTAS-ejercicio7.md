# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

Interface permite extenderse para crear otras interfaces mas especificas a partir de una mas general, ademas las interfaces permiten declaraciones repetidas mientras que los types no.

## ¿Qué permite hacer `type` que `interface` no?

Type es mas flexible que Interface. Type puede decir que un valor puede ser una cosa u otra (number|string).
Crear tuplas, que son como una lista donde cada posicion tiene un tipo especifico. 
Ponerle nombre a un tipo simple (como por ejemplo Type edad = 21) o crear tipos nuevos modificando otros tipos. 

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Si, ambas se pueden extender. Con Interface se usa extends y con type se usa el operador &.

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Eligiriamos Interface porque es muy buena para definir objetos del mundo real como alumno, profesor, usuario, etc.
Mientras que Type es mas flexible y serviria mejor si tuvieramos que hacer algo relacionado a uniones, tuplas, etc.


