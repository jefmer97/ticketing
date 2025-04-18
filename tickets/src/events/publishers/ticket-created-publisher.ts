import { Publisher, Subjects, TicketCreatedEvent } from '@jefmertickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated; 
}