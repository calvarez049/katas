class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallestInt = 0
    for (var i = 0; i < args.length; i++){
    smallestInt = args[i];
    if(args[i+1] < args[i]){
        smallestInt = args[i+1];
    } else {
        smallestInt = args[i];
    }
  }
  return smallestInt;
 }
}

//simpler solution

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

