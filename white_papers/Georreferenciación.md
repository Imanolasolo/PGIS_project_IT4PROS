Es la técnica de posicionamiento espacial de una entidad en una localización geográfica única y bien definida en un [sistema de coordenadas](https://es.wikipedia.org/wiki/Sistema_de_coordenadas "Sistema de coordenadas") y [datum](https://es.wikipedia.org/wiki/Datum "Datum") específicos.

 La georreferenciación es un aspecto fundamental en el análisis de datos geoespaciales, pues es la base para la correcta localización de la información de mapa y, por ende, de la adecuada fusión y comparación de datos procedentes de diferentes sensores en diferentes localizaciones espaciales y temporales.

## Métodos de georreferenciación

Se pueden distinguir dos métodos principales de georreferenciación:

-   La **georreferenciación orbital**, en la que se modelan las fuentes de error geométrico conocidas (la curvatura terrestre, la distorsión panorámica, la [rotación terrestre](https://es.wikipedia.org/wiki/Rotaci%C3%B3n_de_la_Tierra "Rotación de la Tierra"), etc.) y se aplican transformaciones inversas que corrijan estos errores intrínsecos y sistemáticos de forma automatizada. Tiene la principal ventaja de que no necesita intervención humana una vez que es implementado, pero puede dar lugar a grandes errores en las coordenadas de las imágenes de satélite si su sistema de posicionamiento no tiene la suficiente precisión (problema que ha disminuido con la llegada de los [sistemas de navegación modernos](https://es.wikipedia.org/wiki/Sistema_de_navegaci%C3%B3n_inercial "Sistema de navegación inercial")).

-   La **georreferenciación por puntos de control**, en la que a partir de un conjunto de puntos bien identificados en la imagen y de los que se conocen sus coordenadas se calculan las funciones de transformación (lineales, cuadráticas) que mejor se ajustan a estos puntos. Para que esta georreferenciación resulte satisfactoria es necesario elegir de forma apropiada los puntos de control (en número, ubicación y distribución). Se trata, pues, de un proceso manual en el que se requiere intervención humana. Ofrece mayor exactitud cuando se trabaja en zonas donde es posible identificar bien los puntos conocidos.

En nuestro caso vamos a utilizar la segunda opción a partir de datos de entidades de prestación de servicios de salud ya conocidos.

Como ya hemos comentado en [[Tecnologías a utilizar]], vamos a utilizar la librería leaflet para crear las diferenes APIs de uso para georreferenciar y presentar los datos adquiridos.

¿Porqué es tan importante la geolocalización y georreferenciación?

Dentro del entorno empresarial es importantísimo conocer dónde está nuestro cliente y dónde están nuestros recursos empresariales. Básicamente utilizamos estos datos para tomar decisiones de mercadeo y logística y ahorrar dinero y tiempo a la hora de mover nuestros recursos.

Para eso se utilizan este tipo de tecnologías, que permiten analizar el mercado y nuestro entorno logístico mediante APIS y desarrollos informáticos (web y software dedicado).

Eso es lo que IT4PROS quiere presentar como MVP en este capstone project. 


 It is the technique of spatial positioning an entity in a unique and well-defined geographical location in a [coordinate system](https://en.wikipedia.org/wiki/Coordinate_system "Coordinate system") and [datum](https ://en.wikipedia.org/wiki/Datum "Datum") specifics.

Georeferencing is a fundamental aspect in geospatial data analysis, as it is the basis for the correct location of map information and, hence, the proper fusion and comparison of data proceeding from different sensors at different spatial and temporal locations.

## Georeferencing methods

Two main methods of georeferencing can be distinguished:

- The **orbital georeferencing**, in which the known sources of geometric error (Earth curvature, panoramic distortion, [Earth rotation](https://en.wikipedia.org/wiki/Rotaci%C3) are modeled %B3n_of_the_Earth "Earth Rotation"), etc.) and inverse transformations are applied which correct these intrinsic and systematic errors in an automated manner. It has the main advantage of not needing human intervention once it is implemented, but can lead to large errors in the coordinates of the satellite images if its positioning system is not accurate enough (a problem that has decreased with the advent of the [modern navigation systems](https://en.wikipedia.org/wiki/Inertial_navigation_system "Inertial navigation system")).

- The **georeferencing by control points**, in which from a set of points well identified in the image and whose coordinates are known to calculate the transformation functions (linear, quadratic) that best fit to these points. For this georeferencing to turn out satisfactory it is necessary to appropriately choose the control points (in number, location and distribution). It is, therefore, a manual process in which human intervention is required. It offers greater accuracy when working in areas where it is possible to properly identify known points.

In our case we are going to use the second option from data of already known health service delivery entities.

As we have already commented in [[Technologies to use]], we are going to use the leaflet library to create the various usage APIs to georeference and present the acquired data.

Why is geolocation and georeferencing so important?

Within the business environment it is very important to know where our customer is and where our business resources are. We basically use this data to make marketing and logistics decisions and save money and time when it comes to moving our resources.

For that, this kind of technologies are used, which allow us to analyze the market and our logistics environment through APIS and computer developments (web and dedicated software).

That is what IT4PROS wants to present as MVP in this capstone project.

