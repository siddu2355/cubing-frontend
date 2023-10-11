import http from "./httpservice";

export function getParticipants(sa){
    if(sa === 1){
        return http.get("cubing/participants/")
    }
    else{
        return http.get("cubing/participants/avg")
    }
}