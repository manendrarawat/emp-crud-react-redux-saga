export const fetchData = async () => {
    console.log('API Invoked >>>>>>>>>');

    try{
        const response = await fetch('https://themanojshukla.github.io/mockdata.json');
         const data = response.json();
        return data;
    }
    catch(e){
        console.log(e);
    }
    
}