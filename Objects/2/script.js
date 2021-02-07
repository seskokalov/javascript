let book = function (title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.readOrDone = function () {
    if (this.readingStatus === true) {
      console.log(`Already read ${this.title} by ${this.author}`);
    } else {
      console.log(`You still need to read ${this.title} by ${this.author}`);
    }
  };
};

let newBook01 = new book(`Zoki Poki`, `Olivera Nikolova`, true);
let newBook02 = new book(`Kasni porasni`, `Petre M. Andreevski`, false);

newBook01.readOrDone();
newBook02.readOrDone();
