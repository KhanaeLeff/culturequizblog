import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Culture Quiz, Le Blog';

  posts = [
    {
      title: 'Avalon Pub & VR Gaming',
      content: 'Quiz & Blind-test tous les vendredis soirs, aux alentours de 21H30. Réponses à la gueulante'
    },
    {
      title: 'Vasco Le Gamma',
      content: 'Quiz & Blind-test tous les mercredis soir, à 21h. Ambiance calme et détendue. Coup de coeur de Culture Quiz'
    },
    {
      title: 'George & Dragon',
      content: 'Quiz & Blind-test tous les mercredis soir, à 21h. Animateur Dynamique. Originalité de la troisième manche'
    },
    {
      title: 'Eurekafé',
      content: 'Quiz "Sciences" tous les vendredis soir, à 21h. Bonne ambiance et quiz original dans la forme'
    }
  ];
}
