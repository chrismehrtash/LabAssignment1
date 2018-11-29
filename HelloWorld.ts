class HelloWorld{
    constructor(private firstName: string, private lastName: string){

    }
    sayHello(){
        console.log("Hello World!" + "My name is" + this.firstName + " " + this.lastName);
    }
}

const helloWorld = new HelloWorld("Chris", "Mehrtash");
helloWorld.sayHello();