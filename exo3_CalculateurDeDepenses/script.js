const nbPersons = document.getElementById('nbPersons');
const sum = document.getElementById('sum');
const calculButton = document.getElementById('calcul');
const text = document.getElementById('result');

function Calcul () {
    let inputNbPersons = nbPersons.value;
    let inputSum = sum.value;
    let result = inputSum / inputNbPersons;
    
    text.innerHTML = "Résultat du calcul : " + Separator(result) + " € par personne";
}

function Separator (nbr) {
		var nombre = ''+nbr;
		var retour = '';
		var count=0;
		for(var i=nombre.length-1 ; i>=0 ; i--)
		{
			if(count != 0 && count % 3 == 0)
				retour = nombre[i] + ' ' + retour ;
			else
				retour = nombre[i] + retour ;
			count++;
		}
		return retour;
}

calculButton.addEventListener('click', Calcul);