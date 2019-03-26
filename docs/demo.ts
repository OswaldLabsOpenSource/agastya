const agastyaElement = new (<any> window).AgastyaModule("examples", true);
console.log("Opening Agastya...");
agastyaElement.open().then(() => console.log("Opened Agastya!"));
