import {formatNumber} from './StringUtils';

export function toTimeAgo(lastActive){

    if(!lastActive){
        return "";
    }

    if(lastActive.includes("LIVE")){
      var res = lastActive.split(" ");
      var viewCount = formatNumber(res[1]);
      return res[0]+"  "+viewCount+ " viewers";
    }
    var lastActiveDate;
    if(!lastActive.endsWith(".000+0000")){
        lastActiveDate = new Date(lastActive.trim());
    }else{
        lastActiveDate = new Date(lastActive.substr(0, lastActive.lastIndexOf("\.")));
    }
    var currentTime = new Date();
    
    var timeAgoDifference = currentTime.getTime() - lastActiveDate.getTime();

    var diffMinutes = timeAgoDifference / (60 * 1000) % 60;
    var diffHours = timeAgoDifference / (60 * 60 * 1000);
    var diffInDays = (timeAgoDifference) / (1000 * 60 * 60 * 24);
    
    if(diffInDays > 1){
        var days = Math.round(diffInDays);
        if(days == 1){
            return "1 day ago";
        }else{
            return days + " days ago";
        }

    }
    else if(diffHours < 24 && diffHours > 1){
        var hours = Math.round(diffHours);
        if(hours == 1){
            return "1 hour ago";
        }else{
            return hours + " hours ago";
        }
    }
    else if(diffMinutes < 60 && diffMinutes > 1){
        var minutes = Math.round(diffMinutes);
        if(minutes == 1){
            return "1 minute ago";
        }else{
            return minutes + " minutes ago";
        }
    }
    else{
        return "a moment ago."
    }
    

    return null;
}