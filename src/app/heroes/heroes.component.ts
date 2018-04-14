import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../HEROES';
import {HeroService} from '../hero.service';

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
 //  heroes = HEROES;
 //  selectedHero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  // 2)서비스를 생성자로 주입
  // private 선언으로 멤버 인스턴스가 됨
  constructor(private heroService: HeroService) {
    // hero.id = 1; // 사용불가 (위에 hero라는 변수는 HeroesComponent 의 hero가 멤버변수로 생성됨)
    // this.hero.id = 1;
    // this.hero.name = 'Winstorm';

  }

  ngOnInit() {
    // service 호출
    // 1) 잘못된 방법, 컴포넌트가 히어로를 의존(의존성이 생김)
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();

    // 2번
    //this.heroes = this.heroService.getHeroes();
     this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

 /* onSelect: function() {
  es6에서는 메소드를 쓸 경우는 function 생략하고 써라.
  } */
  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
