function fivaa(input) {

    let result = [];
    let num = input;
  
    for( let i = num - 1; i >= 0; i-- ) {

      let tmp = [];

      for( let j = 0; j < num + 2; j++ ) {

        if (j >= 2) {

          tmp.push(num + 1);

        } else {

          tmp.push(num - 1);
          
        }

      }

      num--;
      result.push(tmp.join(""));

    }

    return result.join("\n");

  }
  
  console.log(fivaa(5));

  // Output Fivaa
  // 4466666
  // 335555
  // 22444
  // 1133
  // 002
