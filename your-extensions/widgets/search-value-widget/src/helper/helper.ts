
class Helper {

    getAllSuggestions = (features:any[],params,searchedFieldArr)=>{
        const searchItem = params?.suggestTerm??" "
        const suggestions = features.reduce((newSuggestions,{attributes})=>{
            const keys = searchedFieldArr;
            if (keys.length){
                keys.forEach((keyVal)=>{
                    const obj = {};
                    let status = false;
                    if (typeof attributes[keyVal] === "number"){
                        status = attributes[keyVal] === parseInt(searchItem);
                    }else if (typeof attributes[keyVal] === "string"){
                        const toLowerCase = attributes[keyVal].toLowerCase()
                        status = toLowerCase.includes(searchItem)
                    }
                    
                    if (status){
                        obj["key"] = attributes["OBJECTID"],
                        obj["text"] = `${attributes[keyVal]}`,
                        obj["sourceIndex"] = params.sourceIndex
                        newSuggestions.push(obj)
                    }
                })
            }
            return newSuggestions
        },[]) 
        return suggestions;
    }

}

export default new Helper();