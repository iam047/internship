class Speak {
    constructor(name, verb){
        this.name = name;
        this.verb = verb;
    }
}
class Shout extends Speak {
        constructor(name, tex){
            super(name);
            this.tex = tex;
            console.log(`${this.name}`);
        }
        spa(tex){
         let a =  new Shout(`${this.name}  shouts  ${tex.toUpperCase()} `);
            console.log(a);
        }
};
new Shout('Dr. Loudmouth').spa("'hello there'");

class Speaker {
    constructor(name, verb) {
        this.name = name;
        this.verb = verb || "says";
    }
    speak(text) {
        console.log(this.name + " " + this.verb + " '" + text + "'")
    }
}
class Shouter extends Speaker {
    constructor(name) {
        super(name, "shouts")
    }
    speak(text) {
        super.speak(text.toUpperCase())
    }
}
new Shouter("Dr. Loudmouth").speak("hello there");