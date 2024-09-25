Exercici 1 - PAC1

1- L'aparició de HTML5/CSS3/JS ha suposat el naixement del desenvolupament front-
end modern. (0.75 punts)

    • Quin és l'avantatge d'utilitzar etiquetes semàntiques? Anomena i explica com a
    mínim 3 d'aquests avantatges.

        SEO: Gràcies a les etiquetes semàntiques els motors poden interpretar les pàgines d'una forma més clara i indexar-les de manera que pot millorar el posicionament en els resultats de cerca. 
        Accessibilitat: Les etiquetes semàntiques tenen la funció d'interpretar correctament el contingut per així facilitar a persones amb discapacitats durant la recerca. 
        Claredat del codi: Un codi amb una bona estructura fa que sigui més fàcil d'entendre per a desenvolupadors encara que no treballin constantment en aquell codi.


    • Cita almenys 3 APIs HTML5 i explica breument la seva funcionalitat.

        Geolocation API: Permet a les aplicacions saber la ubicació geogràfica de l'usuari.
        Canvas API: Permet fer gràfics 2D i 3D animats.
        HTMLMediaElement: Permet controlar elements multimèdia dins de les pàgines web, com ara àudios i vídeos. 
        

    • Cita quina opció ofereix CSS3 per aconseguir que s'apliquin diferents estils CSS
    sobre el mateix element en la visualització en diferents dispositius (diferents
    mides de pantalla).

    L'opció ofereix CSS3 per aconseguir que s'apliquin diferents estils és MediaQueries i serveix per crear pàgines responsives (resolució de pantalla, mida de la finestra...). 

    • Cita almenys 4 de les característiques principals de TypeScript (important superset de JavaScript que tractarem al següent capítol).
        
        Tipat estàtic: TypeScript permet declarar tipus de dades per a variables. Així el número d'errors disminueix força i fa que sigui un codi mes segur. 
        Compatibilitat amb JavaScript: Al ser compatible amb JavaScript es poden utilitzar totes les llibreries i codis fets anteriorment
        Compatible amb Programació orientat a objectes: TypeScript ofereix suport per a la programació orientada a objectes amb classes, herències i interfícies.
        Compilació: El codi TypeScript es compila abans de ser executat, convertint-se en JavaScript, que és el llenguatge que els navegadors poden interpretar i executar.


2- El llenguatge CSS és molt rígid, poc pràctic i endreçat a l'hora de programar. Per evitar aquest problema s'han creat els preprocessadors CSS, que ofereixen avantatges
evidents (0.5 punts)

    • Citeu almenys 2 d'aquests preprocessadors.
        - SASS (Syntactically Awesome Style Sheets): Afegeix funcionalitats com variables, mixins, i herència a CSS,
        - LESS (Leaner Style Sheets): Introdueix característiques com variables, funcions i mixins

    • Cita almenys 4 avantatges que ofereixen aquests preprocessadors.
        Variables: És útil per definir variables en diferents colors, mides de font.
        Operadors: Permeten utilitzar operacions matemàtiques i fer càlculs al propi codi.
        Mixins: Permeten crear de declaracions per reutilitzar en diferents llocs.
        Herència: Serveix per reduir el codi redundant gràcies a heretar els estils d'una altre classe.

    • Explica breument en què consisteixen els sourcemaps.
        Els sourcemaps són fitxers que s'utilitza en per depurar un codi, vinculant el CSS transformat amb el codi font original.

    • Explica què és un transpilador.
         Un transpilador és una eina que converteix el codi font d'un llenguatge a un altre. Per exemple pot convertir el llenguatge d'un preprocessador  a CSS estàndard que els navegadors poden interpretar.


3. El flux de treball professional a front-end fa indispensable l'ús d'eines com a controls de versions i eines de gestió de mòduls (0.75 punts).

    • Cita almenys dos sistemes de control de versions i dues eines de gestió de mòduls.

        Dos sistemes de control de versions:
            - Git
            - Subversion
        Dues eines de gestió de mòduls:
            - Yarn
            - npm 
            

    • Cita i explica almenys 3 ordres de Git.

        git init: Inicialitza un nou repositori Git al directori del projecte.
        git add: Afegeix un fitxer al git local.
        git commit -m: Posa un comentari del ultim que has afegit.

    • Cita i explica breument les característiques més definitòries de WebPack

        Mòduls: Cada modul és una petita part del codi amb l'objectiu de que sigui més facil trobar els errors i fer proves.
        Plugins: Serveiexen per optimitzar paquests, fer gestió d'arxius o fer injeccions de variables d'entorn.
        Loaders: Permeten pre-processar fitxers abans d'agrupament, com ara passar de TypeScript a JavaScript