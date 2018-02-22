class Speaker {
    constructor(name, verb) {
        this.name = name;
        this._verb = verb || "says";
    }
    speak(text) {
        console.log(`${this.name} ${this.verb} '${text}'`);
    }

    get verb() {
        return this._verb.toUpperCase();
    }
}
class Shouter extends Speaker {
    constructor(name,verb) {
        super(name, verb,"shouts")
    }
    speak(text) {
        super.speak(text.toUpperCase())
    }
}
new Shouter("Dr. Loudmouth", "funktioniert").speak("hello there");
