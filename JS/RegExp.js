// let a=new RegExp('harry','g')//(source,flag)
// let a=new RegExp(`harr${'y'}`,'g')
// let b='code with harry'
// let c=a.test(b)
// console.log(c)

// let a=/rahul/g;//  /source/flag
// console.log(a.source)


// let a=/rahul/;//first match with Case sensitive 
//FLAGS----------
// let a=/rahul/i;//Case In-sensitive 
// let a=/rahul/g;//Global search

//METHODS-
//RegExp methods---------------
// let c=a.exec(b)//returns first match with array results or null//return only first match in g flag
// let c=a.test(b)//returns true if matches or false
//String methods---------------
// let c=b.match(a)//Returns array of matches in g flag
// let c=b.search(a)//Returns first index of first match
// let c=b.split(a)//Returns array with strings splitted at match
// let c=b.replace(a,'hi')//Returns string replace with hi at every match

//META CHARACTERS--------------
// let a=/^r/;//First character of string
// let a=/is$/g;//Last character of string
// let a=/H.y/g;//return H index//anywhere in string
// let a=/y*r/g;//return r index//anywhere in string
// let a=/whr?w?ere/g;// character before ? is optional

//CHARACTER SETS--------------[]
// let a=/ra[a-z]ul/ //Character can be between a to z
// let a=/ra[a-zA-Z0-9]ul/ //Character can be between a to z,A to Z,0 to 9
// let a=/ra[bmk]ul/ //Character can be between b,m,k
// let a=/ra[^bmk]ul/ //Character cannot be b,m,k

//Quantifiers-------------{}
// let a=/Rah{3}ul/ //h occurs 3 times

//GROUPING-----------()
// let a=/(Rah)ul/ //Rah  is a group
// let a=/(Rah){3}ul/ //Rah  is a group which occurs 3 times

//CHARACTER CLASSES-----------
// let a=/\wam/ //single Word character(alphabet,numeric) before am
// let a=/\w+ul/ //Multiple Word characters(alphabet,numeric)  before ul
// let a=/\Wwhe/ //single Non-Word character before whe
// let a=/\W+Ra/ //Multiple Non-Word character before Ra
// let a=/\dky/ //single digit
// let a=/\d+wh/ //Multiple digits
// let a=/\Dra/ //single non-digit
// let a=/\D+ra/ //single non-digit
// let a=/\sra/ //single white space
// let a=/\s+ul/ //multiple white space
// let a=/\Sam/ //single non-white space
// let a=/\S+ul/ //multiple non-white space
// let a=/\bkya/ //word boundry//write before or after letter

//ASSERTIONS--------------
// let a=/w(?=a)/ //after w there should only be a
// let a=/w(?!=a)/ //after w there can be any character except a


// let a=/w(?!=a)/ //after w there can be any character except a
// let b="Hey ram  ul  *where %^&RahRahRahul babu is rahul 31who 4kya";
// let d='men'
// let c=a.test(b)
// console.log(c)



