import { Injectable } from '@angular/core';

import {Promotion} from '../shared/promotion';

import {PROMOTIONS} from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }


  getPromotions() : Promotion[] {
    return PROMOTIONS;
  }

  getpromotion(id:number) : Promotion{
    return PROMOTIONS.filter((fish) => (fish.id === id))[0];
  }

  getFeaturedPromotion() : Promotion {
    return PROMOTIONS.filter((fish) => (fish.featured))[0];
  }
}
