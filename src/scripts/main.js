'use strict';

function createPromise() {
  const result = document.querySelector('body');
  const resolver = (resolve, reject) => {
    result.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

function createSecond() {
  const result = document.querySelector('body');
  const resolver = (resolve, reject) => {
    result.addEventListener('click', () => {
      resolve();
    });

    result.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      resolve();
    });
  };

  return new Promise(resolver);
}

function createThird() {
  const result = document.querySelector('body');
  const resolver = (resolve) => {
    result.addEventListener('click', () => {
      resolve();
    });
  };

  return new Promise(resolver);
}

const promise1 = createPromise();
const promise2 = createSecond();
const promise3 = createThird();

promise1.then(onSuccess, onError);
promise2.then(second, onError);
promise3.then(third, onError);

function onSuccess(res) {
  document.body.insertAdjacentHTML('beforebegin',
    '<div data-qa="notification">First promise was resolved</div>');
}

function onError(res) {
  document.body.insertAdjacentHTML('beforebegin',
    '<div data-qa="notification">First promise was rejected</div>');
}

function second(res) {
  document.body.insertAdjacentHTML('beforebegin',
    '<div data-qa="notification">Second promise was resolved</div>');
}

function third(res) {
  document.body.insertAdjacentHTML('beforebegin',
    '<div data-qa="notification">Third promise was resolved</div>');
}
