const apiRequest = async (url = '', optionsObj?:Object , errMsg: unknown = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error('Please reload the app');
    } catch (err) {
        if(typeof err === "string") {
            errMsg = err;
          }else if(err instanceof Error) {
            errMsg = err.message;
          }
        
    } finally {
        return errMsg;
    }
}

export default apiRequest;