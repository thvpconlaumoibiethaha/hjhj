let task = -1;

function decode(){
	task = 1;
	let S = document.getElementById("inp").value;
	let tmp = ((S.split("")).reverse()).join("");
	while (tmp[0] === ' ')
		tmp = tmp.replace(tmp[0], '');
	S = tmp;
	tmp = S.split(" ");
	S = tmp;
	let res = "";
	for(const num of S){
		if (num === '')
			res += ' ';
		else
			res += String.fromCharCode(num-8);
	}
	alert(res);
}

function code(){
	task = 0;
	let S = document.getElementById("inp").value;
	let tmp = S.split("");
	while (tmp[0] === ' ')
		tmp = tmp.replace(tmp[0], '');
	S = tmp;
	let res = "";
	for (const char of S){
		if (char === ' ')
			res += ' ';
		else{
			res += char.charCodeAt(0)+8;
			res += ' ';
		}
	}
	S = res;
	S = ((S.split("")).reverse()).join("");
	alert(S);
}
