/**
 * EJERCICIOS 8, 9 y 10 - Clase Alumno
 * ---------------------------------------------------------------------------
 * Esta clase se completa en tres pasos, marcados con TODO. Cada paso agrega
 * comportamiento sin romper el anterior:
 *
 *   - Ejercicio 8:  atributos básicos, getNombreCompleto, esMayorDeEdad.
 *   - Ejercicio 9:  `edad` pasa a ser privada; getEdad/setEdad con validación.
 *   - Ejercicio 10: arreglo de materias inscriptas.
 */

// -----------------------------------------------------------------------------
// EJERCICIO 10 - interface Materia
// -----------------------------------------------------------------------------

export type Materia = {
    codigo: number;
    nombre: string;
    horas: number;
}

export class Alumno {
    public legajo: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    // EJERCICIO 9: `edad` es privada. Se accede solo con getEdad/setEdad.
    private edad: number;

    // EJERCICIO 10: materias en las que está inscripto el alumno.
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        edad: number,
        email: string
    ) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 8
    // -------------------------------------------------------------------

    getNombreCompleto(): string {
        return this.nombre + " " + this.apellido;
    }

    esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 9 - encapsulamiento de `edad`
    // -------------------------------------------------------------------

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        if (edad < 0 || edad > 120)
        {
        throw new Error("Edad inválida");
        }
        this.edad = edad;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 10 - materias
    // -------------------------------------------------------------------

    agregarMateria(materia: Materia): void {
        if (materia == null)
            throw new Error("Materia nula")
            
        this.materias.push(materia);
        
    }

    quitarMateria(codigo: number): Materia | undefined {

        const materiaEliminar = this.materias.find(materia => materia.codigo == codigo);

        if (materiaEliminar == undefined) {
            return undefined;
        }

        const indice = this.materias.indexOf(materiaEliminar);
        this.materias.splice(indice, 1);

        return materiaEliminar;
    }

    estaInscripto(codigo: number): boolean {
        return this.materias.some(materia => materia.codigo == codigo);
    }

    cantidadMaterias(): number {
        return this.materias.length;
    }

    getMaterias(): Materia[] {
        // TODO: devolver las materias sin exponer el arreglo interno
        // (devolver una copia, no la referencia original).
        const materiasCopia: Materia[] = [];

        for (const materia of this.materias) {
            materiasCopia.push(materia);
        }

        return materiasCopia;
    }
}
