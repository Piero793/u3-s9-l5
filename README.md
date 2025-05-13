# Il Mio Progetto React

Questo progetto è un'applicazione web sviluppata utilizzando React. Sfrutta la libreria React Bootstrap per una struttura responsive e stilizzata, e React Router DOM per la gestione della navigazione tra le diverse sezioni.

## Funzionalità Principali

 L'applicazione include le seguenti funzionalità:

* **Navigazione:** Una barra di navigazione in alto (`Navbar`) permette agli utenti di esplorare diverse sezioni come Home, TV Shows, Movies, Recently Added e My List. Include anche funzionalità di ricerca, un'area "KIDS", notifiche e un dropdown per la gestione del profilo (Edit Profile, Settings, Logout).
* **Gestione dell'Account:** La sezione `AccountPage` consente agli utenti di modificare il proprio profilo, inclusa l'immagine dell'avatar, il nome del profilo, la lingua preferita e le impostazioni di controllo parentale.
* **Impostazioni:** La pagina `Settings` offre agli utenti la possibilità di gestire le informazioni del proprio account, come email, password, numero di telefono, informazioni di pagamento e piano di abbonamento.
* **Visualizzazione Contenuti:** L'applicazione presenta diverse sezioni per la scoperta di contenuti:
    * `NewReleases`: Mostra le nuove uscite.
    * `TrendingNow`: Evidenzia i contenuti di tendenza.
    * `WatchItAgain`: Suggerisce contenuti da rivedere.
    * `TVShows`: Una sezione dedicata alle serie TV.
* **Footer:** Un footer (`Footer`) con link utili, icone social e informazioni di copyright.

## Tecnologie Utilizzate

* **React:** Libreria JavaScript per la costruzione di interfacce utente.
* **React Bootstrap:** Libreria di componenti UI pre-stilizzati per React, basata su Bootstrap.
* **Bootstrap Icons:** Libreria di icone vettoriali.
* **React Router DOM:** Libreria per la navigazione e la gestione delle rotte in applicazioni React.
* **OMDb API:** Utilizzata per recuperare informazioni sui film (le chiamate API nei componenti indicano l'uso di questa API).
* **Vite:** Un bundler di sviluppo e build estremamente veloce per JavaScript.
* **ESLint:** Un linter per identificare e segnalare pattern problematici nel codice JavaScript/JSX.

## Installazione

Per avviare questo progetto in locale, segui questi passaggi:

1.  **Clona la repository:**
    ```bash
    git clone [https://www.amazon.it/Repo-Genetic-Opera/dp/B001MT7ZEW](https://www.amazon.it/Repo-Genetic-Opera/dp/B001MT7ZEW)
    cd [nome della tua repository]
    ```
2.  **Installa le dipendenze:**
    ```bash
    npm install
    # oppure
    yarn install
    ```
3.  **Avvia il server di sviluppo:**
    ```bash
    npm run dev
    # oppure
    yarn dev
    ```
    Questo comando avvierà l'applicazione in modalità sviluppo e solitamente sarà accessibile all'indirizzo `http://localhost:[porta]`.

## Script Disponibili

Nel `package.json` sono definiti alcuni script utili:

* `dev`: Avvia il server di sviluppo con Vite.
* `build`: Compila l'applicazione per la produzione.
* `lint`: Esegue ESLint per analizzare il codice.
* `preview`: Avvia un server di anteprima locale per la build di produzione.
