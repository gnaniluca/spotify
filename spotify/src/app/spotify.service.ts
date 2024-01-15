import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA2WH1NsDzDH3Hf-Qys8HqvXn0JsbhIE9wNN2w6PotPKxhgDmh22kPtIs1JCf48lwpoUdOOhJaDeFXG2sMowmMGxEedMdolZ9D1OhVFYkcKI0-SV3rgkCBTqvFyGypD2Dtv3_1-IkS4fXEO4NNqDpKDqfTBX5JFPGlVCPvc3YqEL-ud1yQwOgORt84bJLprIJhnZuHzjK8WSiCnQAg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}