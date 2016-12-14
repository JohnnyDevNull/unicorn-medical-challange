export default class AppComponent implements ng.IComponentOptions {

    public template = require("./app.html");

    static factory(): ng.IComponentOptions {
        return new AppComponent();
    }
}
