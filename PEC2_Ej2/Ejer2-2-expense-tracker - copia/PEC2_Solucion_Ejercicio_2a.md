(0.50 punts) Per què és el valor de this és undefined?


Quan utilitzem controladors de JavaScript el valor "this" pot causar problemes, ja que passa a ser un parametre. Com que són metodes que depenen del context de la classe on pertanyen 
perden el acces al seu origen i ja no tenen acces a l'objecte esperat. I donant com a resultat "undefined". Per solucionar aquest problema utilitzem tal i com diu l'enunciat les "fat-arrow" per mantenir el valor original de "this". Ja que la seva funcio es mantenir el valor del lloc on es va definir.




