class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize (str){
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str){
    const forbiddenWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    const titleizedWords = words.map((word, index) => {
      if (forbiddenWords.includes(word) && index !== 0) {
        return word.toLowerCase();
      } else {
        return Formatter.capitalize(word);
      }
    });
    
    return titleizedWords.join(' ');
  }
}

let capitalisation = Formatter.capitalize("alligator");
let sanitisation = Formatter.sanitize("Entert*ain(i{ng-Elephan^ts");
let titleisation = Formatter.titleize("chicken soup with rice and a few other songs" );

console.log(capitalisation);
console.log(sanitisation);
console.log(titleisation);