/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length != str2.length){
    console.log("here");
    return false;
  }
  let freq1 = {};
  let freq2 = {};

  for(let i=0;i<str1.length;i++){
    let ch1 = str1[i];
    let ch2 = str2[i];

    if(freq1[ch1] == undefined){
      freq1.ch1 = 1;
    }else{
      freq1.ch1 = freq2.ch2 + 1;
    }

    if(freq2[ch2] == undefined){
      freq2.ch2 = 1;
    }else{
      freq2.ch2 = freq2.ch2 + 1;
    }
  }

  for(const key in freq1){
    if(freq1[key] != freq2[freq2]){
      return false;
    }
  }

  return true;

}

module.exports = isAnagram;
