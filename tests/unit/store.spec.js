import {expect} from 'chai';
import {mutations} from '@/store.js';

const {createCard, changeName, changeBody} = mutations;

describe('state mutations', () => {
  describe('createCard', () => {
    it('can create a new card', () => {
      const state = {cards: []};
     
      createCard(state, {id: 1});
      
      expect(state.cards.length).to.equal(1);
      expect(state.cards[0].name).to.equal('test');
      expect(state.cards[0].body).to.equal('test');
      expect(state.cards[0].id).to.equal(1);
    });
    it('does nothing on a existing card', () => {
      const state = {cards: [{id: 1, name: 'name', body: 'body'}]};

      createCard(state, {id: 1});

      expect(state.cards.length).to.equal(1);
      expect(state.cards[0].name).to.equal('name');
      expect(state.cards[0].body).to.equal('body');
    });
  });

  describe('changeName', () => {
    it('can change the name of a card', () => {
      const state = {cards: [{id: 1, name: 'test', body: 'test'}]};
     
      changeName(state, {newName: 'name', id: 1});
      
      expect(state.cards[0].name).to.equal('name');
    });
  });

  describe('changeBody', () => {
    it('can change the body of a card', () => {
      const state = {cards: [{id: 1, name: 'test', body: 'test'}]};
     
      changeBody(state, {newBody: 'body', id: 1});
      
      expect(state.cards[0].body).to.equal('body');
    });
  });
});
