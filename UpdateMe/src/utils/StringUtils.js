/** Global function to format your numbers into a formatted ',' 
 * seperated string
 * Application -- follower count
 */
export function formatNumber(str){
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
}