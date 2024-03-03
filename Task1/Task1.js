// Fornire  il  codice  di  una  funzione  in  javascript  che,  
// dato  un  array  non  ordinato  di  stringhe  
// che possa  anche  contenere  stringhe  doppie,  
// restituisca  un  array  ordinato  in  ordine  alfabetico 
// senza  stringhe  doppie.

const Names = ["Laura", "James", "Laura", "John", "John", "Mike", "Anthony", "Bob"];


const removeDuplicates = (data) => {
  return data.filter((name, index) => data.indexOf(name) === index);
}

console.log(removeDuplicates(Names.sort()))