import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  faqs = [
    {
      question: 'What are your shipping options?',
      answer: 'We offer standard (5-7 business days) and express (2-3 business days) shipping options for all domestic orders.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email to monitor your package\'s journey.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be unused and in original packaging.'
    }
  ];
}