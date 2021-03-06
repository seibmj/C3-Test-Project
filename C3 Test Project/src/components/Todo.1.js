// Helper function for generating unique IDs
function guidGenerator() {
    function S4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

export default class Todo {
    constructor(descriptionText, isDone, id) {
            this.descriptionText = descriptionText || '';
            this.isDone = isDone || false;
            this.id = id || guidGenerator();
        }
        ///Testing 2.0
        // Test Load Build in VSTS
        // Comment in Github 2 Relate to the story 

}