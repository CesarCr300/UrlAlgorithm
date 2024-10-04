// Para ejecutar: node algorithm.js

// Hay 9 urls únicas que contienen la palabra shop y terminan en .html
const defaultUrls = `https://shoponline.com/product.html
http://myshop.net/page.html
https://notashop.com/index.html
http://example.com/page.html
https://shoponline.com/contact.html
http://myshop.net/product.html
https://yourshop.org/homepage.html
http://anotherwebsite.com/aboutus.html
https://shopworld.com/offers.html
https://shoponline.com/product.html
https://noshoponline.com/index.html
https://hola.no.shoponline.com/index.html`;

function main(){

    urls = readFile('urls.txt') || defaultUrls;

    // Regex que busca cualquier url que contenga shop y termine en .html
    const pattern = /https?:\/\/.*shop\w*\.\w+\/.*\.html/g;
    // Creo un set para almacenar las URLs únicas
    const set = new Set();

    // Como matchall nos permite iterar sobre todas las coincidencias de una expresión regular,
    // aprovecho en agregar los matches al set
    // Hago esto para no esperar hasta que termine de iterar todas las url, convertirla a un array y 
    // luego crear un bucle para agregarlas al set
    for (const match of urls.matchAll(pattern)) {
        set.add(match[0])
    }

    console.log("Número de URLs encontradas: ", set.size)
    console.log("URLs encontradas: ", set)
}

function readFile(name){
    try {
        const fs = require('fs');
        return fs.readFileSync(name, 'utf8');
    } catch (error) {
        return null;
    }
}

main()