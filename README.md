![gruppo lineCode](https://imagizer.imageshack.com/img923/557/86bUrf.png)

# PoC Interfaccia Grafica - PORTACS
Proof of Concept dell'interfacca grafica per il colloquio sulla Technology Baseline con il prof. Riccardo Cardin.

## Overview
L'applicativo funge da PoC e simula il comportamento di un'interfaccia grafica per visualizzazione della mappa nel sistema real-time progettato e sviluppato come attività progettuale per il corso di SWE dell'Università degli Studi di Padova sotto il nominativo di Progetto _PORTACS_.

## Installazione, dipendenze ed esecuzione
Dipendenze:
 - Node.js
 - npm
 - angular-cli

`ng build --prod` realizza l'app di cui si può fare il deploy.

Il Dockerfile in questa repo containerizza l'app assieme al web server NGINX.

L'interfaccia web è disponibile su: `http://localhost:8081`.
