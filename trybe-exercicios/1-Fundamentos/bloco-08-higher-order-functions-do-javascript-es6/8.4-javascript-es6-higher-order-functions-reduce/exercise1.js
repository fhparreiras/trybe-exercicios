const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    // escreva seu código aqui
    const newArr = array.reduce((acum, curr) => acum.concat(curr));
    console.log(newArr);
  }

  flatten(arrays);