/* Descrizione: 
Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1 Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2 Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3 Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 

Bonus 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

const { createApp } = Vue

createApp({
    data() {
        return {

            // CONTROLLA SE L'IMPUT BINDATO A taskInput E' PIENO O VUOTO
            taskInput: "",

            taskCheck: false,

            tasks: [
                {
                    text: "Cucinare",
                    done: false
                },

                {
                    text: "Fare la spesa",
                    done: false
                },

                {
                    text: "Lavara l'auto",
                    done: false
                },

                {
                    text: "Andare al cinema",
                    done: false
                },

                {
                    text: "Oziare",
                    done: false
                },
            ],

        }
    },

    methods: {

        // ES5 syntax
        // methodName: function() {},

        // ES6 synthax
        // methodNameEs6: () => {},
        // methodNameEs62() {},

        addTask() {

            //AL CLICK DEL BOTTONE CONTROLLO SE L'IMPUT NON E' UNA STRINGA VUOTA
            if (this.taskInput != "") {
                const newTask = {
                    text: this.taskInput,
                    done: false
                };
                this.tasks.push(newTask);
                //SVUOTO LA NEW TASK, SVUOTANDO L'IMPUT
                this.taskInput = "";
                //SETTO LA VARIABILE DI CONTROLLO DELLA LUNGHEZZA DEL TASK SU FALSE PER CANCELLARE UN EVENTUALE MESSAGGIO DI ERRORE IN PAGINA
                this.taskCheck = false;
                console.log(this.tasks);
            } else {
                //SE newTask E' UNA STRINGA VUOTA, SETTO SU true taskCheck, MOSTRANDO IL MESSAGGIO DI ERRORE
                this.taskCheck = true;
            }

        },

        removeTask(index) {
            //RIMUOVE ALLA POSIZIONE index 1 ELEMENTO
            this.tasks.splice(index, 1);
            console.log(this.tasks);
        },

    }

}).mount('#app')