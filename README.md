# ACT1B4TALLER

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Nota del desarrollo

Este proyecto comenzó instalando Angular CLI de forma global usando pnpm como gestor de paquetes. Después de verificar la instalación con ng version, se generó el proyecto con el comando ng new mi_primer_proyecto_angular --no-standalone --routing --style=scss --ssr=false --file-name-style-guide=2016. Se eligió trabajar con NgModules en lugar de componentes standalone, se habilitó el enrutamiento desde el inicio, se usó SCSS como preprocesador de estilos y se dejó desactivada la generación de SSR, ya que por ahora la aplicación es una interfaz de presentación que se sirve desde un único servidor.

En cuanto a los componentes, el principal actúa como página de inicio y dentro de él hay un componente de productos que agrupa dos componentes separados entre sí: celulares y laptops. Ambos comparten la misma estructura de tarjeta, pero cada uno maneja sus propios datos de forma independiente. La página de inicio también incluye apartados de información de la empresa, como los de sobre nosotros y contacto.

La estructura principal del proyecto está organizada dentro de src/app, donde se agrupan todos los componentes. Junto a ellos existe una carpeta de modelos que contiene las interfaces de datos, entre ellas la de Producto, y una carpeta de servicios donde vive la lógica que en el futuro se comunicará con el backend. De esta forma cada capa tiene su lugar y resulta fácil ubicar dónde modificar cada cosa.

Sobre la conexión con el backend, se dejó preparado un servicio de productos que expone métodos para obtener celulares y laptops. En este momento esos métodos devuelven datos simulados con un pequeño retraso, con la intención de imitar el comportamiento de una petición real, para que los componentes ya se acostumbren a trabajar con Observables. La URL base de la futura API ya está centralizada en los archivos de entorno environment.ts y environment.prod.ts, de modo que cuando el backend esté disponible bastará con reemplazar la lógica interna del servicio por peticiones HTTP reales usando esa misma URL, sin necesidad de tocar la forma en que los componentes consumen el servicio.
