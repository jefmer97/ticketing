import { Publisher, Subjects, TicketUpdatedEvent } from '@jefmertickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated; 
}