function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    if (str1.length > str2.length) {
        return false;
    }
    let tracker = 0;
    //let letter = str1[tracker]

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[tracker] && tracker !== str1.length - 1) {
            tracker++
        } else if (tracker === str1.length - 1) {
            return true
        } else {
            tracker = 0
        }
    }
    return false
}

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
      if (str1.length > str2.length) {
          return false;
      }
      if(!str1){
          return true
      }
      let i = 0;
      let j = 0;
      let tracker = 0;
      //let letter = str1[tracker]
  
       for (let i = 0; i < str2.length; i++) {
          if (str2[i] === str1[tracker]) {
               tracker++
           } 
           if (tracker === str1.length) {
               return true
           }
       }
  //     while (j < str2.length) {
  //     if (str2[j] === str1[i]) i++;
  //     if (i === str1.length) return true;
  //     j++;
  //   }
      return false
  }
