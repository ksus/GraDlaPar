import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  data: Question[] = [
    {
      text: 'Powiedz partnerowi komplement dotyczący jego zdolności lub umiejętności.',
    },
    {
      text: 'Jeżeli można by cofnąć czas, to co chciałbyś przeżyć jeszcze raz i dlaczego?',
    },
    {
      text: 'Wymień 2-3 cechy charakteru, które szczególnie cenisz w swoim partnerze.',
    },
    {
      text: 'Co sprawia największą radość partnerowi? (podaj 2-3 przykłady)',
    },
    {
      text: 'Jakich trzech zachowań nie lubi Twój partner?',
    },
    {
      text: 'Jak okazujesz zrozumienie partnerowi na co dzień?',
    },
    {
      text: 'Czy imponują Ci starsze osoby, które spacerują trzymając się za ręce? Jeśli tak, to dlaczego?',
    },
    {
      text: 'Jakie rzeczy dają wam satysfakcję, gdy robicie je razem? Dlaczego?',
    },
    {
      text: 'Czy lubicie razem przyjmować gości?',
    },
    {
      text: 'Jak myślisz, czy jest coś, co wyróżnia wasze małżeństwo od innych?',
    },
    {
      text: 'Potrafisz wymienić hobby współmałżonka?',
    },
    {
      text: 'Jaka cecha współmałżonka najbardziej ci imponuje, którą warto naśladować?',
    },
    {
      text: 'Jak lubisz, kiedy partner zdrobniale się do Ciebie zwraca? A jak nie lubisz?',
    },
    {
      text: 'Podaj 3 pomysły, które możecie zastosować przy rozwiązywaniu konfliktów, różnicy zdań.',
    },
    {
      text: 'Wymień kilka zaprzyjaźnionych małżeństw/par, z którymi możecie swobodnie porozmawiać o waszych relacjach i sprawach.',
    },
    {
      text: 'Czego cennego nauczyli Cię rodzice?',
    },
    {
      text: 'Wymień kilka postaw partnera, które wprawiają Cię w zakłopotanie.',
    },
    {
      text: 'Czego do tej pory nauczyłeś się w swoim związku?',
    },
    {
      text: 'Jaki prezent sprawił Ci największą radość i dlaczego?',
    },
    {
      text: 'Jakich chwil na pewno nie dalibyście sobie odebrać, a które wspólnie przeżyliście?',
    },
    {
      text: 'Czy pamiętacie rady babci lub dziadka dotyczące związków?',
    },
    {
      text: 'Pamiętasz, jak się poznaliście?',
    },
    {
      text: 'Jak sądzisz, czy potraficie odpoczywać poza wakacjami? Jak to robicie?',
    },
    {
      text: 'Co mógłbyś zmienić w swoim charakterze w najbliższym roku, by Wasz związek na tym skorzystał?',
    },
    {
      text: 'Jaką formę dotyku nieerotycznego lubisz? (np. głaskanie po włosach)',
    },
    {
      text: 'Jakie posiłki (przygotowane przez partnera) najbardziej lubisz?',
    },
    {
      text: 'Co chciałbyś zrobić szalonego w niedalekiej przyszłości razem z partnerem?',
    },
    {
      text: 'Jak Twój partner lubi doświadczać Twojej miłości?',
    },
    {
      text: 'Czego nie lubi robić Twój partner?',
    },
    {
      text: 'Co byś wolał otrzymać od partnera: bardzo drogi prezent czy wspaniale wspólnie przeżyty weekend w wymarzonym miejscu?',
    },
    {
      text: 'Czy twój partner jest Twoim przyjacielem?',
    },
    {
      text: 'Jaką aktywność sportową lubicie wspólnie uprawiać?',
    },
    {
      text: 'Czy wyjazd na wakacje to raczej problem czy przyjemność?',
    },
    {
      text: 'Co cię urzekło w partnerze na początku Waszej znajomości?',
    },
    {
      text: 'Czy dzieci (jeśli je macie) wpływają na jakość Waszej relacji?',
    },
    {
      text: 'Jak często lubisz uprawiać seks (ile razy w tygodniu)?',
    },
  ];

  // ------------------------------------------------------------------
  // random questions
  // ------------------------------------------------------------------
  getData(arg: number): Question[] {

    const randomData: Question[] = [];

    while (randomData.length < arg) {
      const r = Math.floor(Math.random() * this.data.length);
      if (randomData.indexOf(this.data[r]) === -1) {
        randomData.push(this.data[r]);
      }
    }
    return randomData;
  }
  // ------------------------------------------------------------------
}
