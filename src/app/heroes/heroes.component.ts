import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../HEROES';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
/*  hero: Hero = {
    id: 1,
    name: 'Winstorm',
  };*/

 // hero = new Hero();
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
    // hero.id = 1; // 사용불가 (위에 hero라는 변수는 HeroesComponent 의 hero가 멤버변수로 생성됨)
    // this.hero.id = 1;
    // this.hero.name = 'Winstorm';

  }

  ngOnInit() {
  }

 /* onSelect: function() {
  es6에서는 메소드를 쓸 경우는 function 생략하고 써라.
  } */
  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
