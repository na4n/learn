//linear search o(n)

const linearSearch = (a: number[], v: number): boolean => {
	for(let i = 0; i < a.length; i++){
		if(a[i] == v){
			return true;
		}
	}
	return false;
}

//binary search o(log(n)) for ordered arrays

const binarySearch = (a: number[], v: number): boolean => {
    let mid = Math.floor(a.length / 2);
    return true;    
}

