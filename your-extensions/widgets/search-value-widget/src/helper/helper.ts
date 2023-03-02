
class Helper {

    getAllSuggestions = (features:any[],params)=>{
        // const suggestions = [];
        const searchItem = params?.suggestTerm??" "
        const suggestions = features.reduce((newSuggestions,{attributes})=>{
            const keys = Object.keys(attributes);
            if (keys.length){
                keys.forEach((keyVal)=>{
                    const obj = {};
                    // let key,text,sourceIndex;
                    let status = false;
                    if (typeof attributes[keyVal] === "number"){
                        status = attributes[keyVal] === parseInt(searchItem);
                    }else if (typeof attributes[keyVal] === "string"){
                        status =  attributes[keyVal].includes(searchItem)
                    }
                    
                    if (status){
                        obj["key"] = attributes[keyVal],
                        obj["text"] = `${attributes[keyVal]}`,
                        obj["sourceIndex"] = params.sourceIndex
                        newSuggestions.push(obj)
                    }
                    
                    // if (typeof attributes[keyVal] === "number"){
                    //     if (attributes[keyVal] === searchItem){
                    //         obj["key"] = "name",
                    //         obj["text"] = attributes[keyVal],
                    //         obj["sourceIndex"] = params.sourceIndex
                    //         newSuggestions.push(obj)
                    //     }
                    // }else if (typeof attributes[keyVal] === "string"){
                    //     if (attributes[keyVal].includes(searchItem)){
                    //         obj["key"] = "name",
                    //         obj["text"] = attributes[keyVal],
                    //         obj["sourceIndex"] = params.sourceIndex
                    //         newSuggestions.push(obj)
                    //     }
                    // }
                  
                })
            }
            return newSuggestions
        },[]) 
        return suggestions;
    }

}

export default new Helper();