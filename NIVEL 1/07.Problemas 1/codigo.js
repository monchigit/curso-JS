
let dineroPedro=prompt('ingresa el dinero que tienes pedro');
let dineroRoberto=prompt('ingresa el dinero que tienes roberto');
let dineroCofla=prompt('ingresa el dinero que tienes cofla');

dineroCofla=parseFloat(dineroCofla)
dineroPedro=parseFloat(dineroPedro)
dineroRoberto=parseFloat(dineroRoberto)


// Pedro
if (dineroPedro >= 0 && dineroPedro < 0.6) {
    alert('Pedro no te alcanza para nada');
}


else if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert('el helado mas caro que puede comprar Pedro es el palito de agua');
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert('el helado mas caro que puede comprar Pedro es el palito de crema');
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert('el helado mas caro que puede comprar Pedro es el bombon heladix');
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert('el helado mas caro que puede comprar Pedro es el bombon heladovich');
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert('el helado mas caro que puede comprar Pedro es el bombon helardo');
}

else if (dineroPedro >= 2.9 && dineroPedro < 5.8) {
    cambio=dineroPedro-2.9;
    alert(`el helado mas caro que puede comprar Pedro es el pote de helado de 1/4 kg o el helado con confetis y el cambio es ${cambio}$`);
}

else {
    cambio=dineroPedro-5.8;
    alert(`Pedro puede comprar el pote de helado de 1/4 kg y el helado con confetis y el cambio es ${cambio}$`);
}
// Roberto
if (dineroRoberto >= 0 && dineroRoberto < 0.6) {
    alert('Roberto no te alcanza para nada');
}


else if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert('el helado mas caro que puede comprar Roberto es el palito de agua');
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert('el helado mas caro que puede comprar Roberto es el palito de crema');
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert('el helado mas caro que puede comprar Roberto es el bombon heladix');
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert('el helado mas caro que puede comprar Roberto es el bombon heladovich');
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert('el helado mas caro que puede comprar Roberto es el bombon helardo');
}

else if (dineroRoberto >= 2.9 && dineroRoberto < 5.8) {
    cambio=dineroRoberto-2.9;
    alert(`el helado mas caro que puede comprar Roberto es el pote de helado de 1/4 kg o el helado con confetis y el cambio es ${cambio}$`);
}

else {
    cambio=dineroRoberto-5.8
    alert(`Roberto puede comprar el pote de helado de 1/4 kg y el helado con confetis y el cambio es ${cambio}$`);
}
// cofla
if (dineroCofla >= 0 && dineroCofla < 0.6) {
    alert('Cofla no te alcanza para nada');
}

else if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert('el helado mas caro que puede comprar cofla es el palito de agua');
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert('el helado mas caro que puede comprar cofla es el palito de crema');
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert('el helado mas caro que puede comprar cofla es el bombon heladix');
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert('el helado mas caro que puede comprar cofla es el bombon heladovich');
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert('el helado mas caro que puede comprar cofla es el bombon helardo');
}

else if (dineroCofla >= 2.9 && dineroCofla < 5.8) {
    cambio=dineroCofla-2.9;
    alert(`el helado mas caro que puede comprar cofla es el pote de helado de 1/4 kg o el helado con confetis y el cambio es ${cambio}$`);
}

else {
    cambio=dineroCofla-5.8;
    alert(`Cofla puede comprar el pote de helado de 1/4 kg y el helado con confetis y el cambio es ${cambio}$`);
}

