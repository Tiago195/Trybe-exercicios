function encode(nomezin) {
  nomezin = nomezin.replace(/a/g, '1');
  nomezin = nomezin.replace(/e/g, '2');
  nomezin = nomezin.replace(/i/g, '3');
  nomezin = nomezin.replace(/o/g, '4');
  nomezin = nomezin.replace(/u/g, '5');
  return nomezin;
}

function decode(nomezin) {
  nomezin = nomezin.replace(/1/g, 'a');
  nomezin = nomezin.replace(/2/g, 'e');
  nomezin = nomezin.replace(/3/g, 'i');
  nomezin = nomezin.replace(/4/g, 'o');
  nomezin = nomezin.replace(/5/g, 'u');
  return nomezin;
}

module.exports = { encode, decode };