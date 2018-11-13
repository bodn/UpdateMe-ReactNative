/** Global function to format your numbers into a formatted ',' 
 * seperated string
 * Application -- follower count
 */
export function formatNumber(str){
    counter = 0;
    resp = "";
    for(i = str.length; i >= 0 ; i--){

        resp = str.charAt(i).concat(resp);
        if(counter == 3){
            resp = ",".concat(resp);
            counter = 0;
        }
        counter++;
    }
    return resp;
}